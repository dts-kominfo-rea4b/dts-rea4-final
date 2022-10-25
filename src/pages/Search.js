import React, { useState, useEffect } from "react";
// import axios from "../api/Axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const image_path = "https://image.tmdb.org/t/p/original/";

const Search = (props) => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(props.url);
  }, []);

  const getMovies = API => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getMovies(props.searchUrl + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = event => {
    setSearchTerm(event.target.value);
  };


  return (
    <>
        <div>
          <Container>
          <Form className="d-flex mt-5" onSubmit={handleOnSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </Form>
            <Row xs={1} md={4} className="mt-2 g-4">
              {movies.length > 0 && movies.map(movie => {
                return (
                  <Col>
                    <Card key={movie.id} style={{ minHeight: "100%" }}>
                      <Card.Img
                        variant="top"
                        src={`${image_path}${movie.poster_path}`}
                      />
                      <Card.Body>
                        <Card.Title>
                          {movie.title}
                          <br />
                          <br />
                          <FontAwesomeIcon
                            icon={faStar}
                            className="me-1 text-danger"
                          />
                          {Math.round(movie.vote_average)}
                        </Card.Title>
                      </Card.Body>
                      <Card.Text className="p-2">
                        {movie.overview.slice(0, 118) + "..."}
                      </Card.Text>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
    </>
  )
}

export default Search