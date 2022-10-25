import React, { useState, useEffect } from "react";
import axios from "../api/Axios";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Pagination,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const image_path = "https://image.tmdb.org/t/p/original/";

const MovieList = (props) => {
  const [movies, setMovie] = useState([]);
  const [ pages, setPages ] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const request = await axios.get(`${props.url}${pages}`);
        setMovie(request.data.results);
    } catch (error) {
        console.log(error);
    }
  }

  const handlePlus = () => {
    setPages( pages + 1 );
    fetchData()
  }

  const handleMinus = () => {
    if (pages > 1) {
        setPages( pages - 1 );
        fetchData();
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          Please Wait
          <Spinner
            className="ms-1"
            animation="grow"
            size="sm"
            variant="danger"
          />
          <Spinner
            className="ms-1"
            animation="grow"
            size="sm"
            variant="danger"
          />
          <Spinner
            className="ms-1"
            animation="grow"
            size="sm"
            variant="danger"
          />
        </div>
      ) : (
        <div>
          <Container>
            <Pagination className="d-flex justify-content-center mt-3">
              <Button variant="outline-danger" onClick={handleMinus}> Previous </Button>
              <Pagination.Item className="mx-2" key={pages}>
                {pages}
              </Pagination.Item>
              <Button variant="outline-danger" onClick={handlePlus}> Next </Button>
            </Pagination>
            <Row xs={1} md={4} className="mt-2 g-4">
              {movies.map((movie, index) => {
                return (
                  <Col>
                    <Card key={index} style={{ minHeight: "100%" }}>
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
      )}
    </>
  );
};

export default MovieList;
