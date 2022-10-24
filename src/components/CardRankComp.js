import React, { useState, useEffect } from "react";
import { CardGroup, Card, Container } from "react-bootstrap";
import axios from "../api/Axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const image_path = "https://image.tmdb.org/t/p/original/";

const CardRankComp = (props) => {
    const { title } = props;
    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(props.url);
        setMovie(request.data.results);
        }

        fetchData();
    }, []);

    return (
        <>
        <Container>
            <br />
            <h2>{title}</h2>
            <CardGroup className="my-1">
            {movies.slice(0, 5).map((movie, index) => {
                return (
                <Card className="bg-dark text-white p-2" key={index}>
                    <Card.Img
                    src={`${image_path}${movie.poster_path}`}
                    alt="Card image"
                    />
                    <Card.ImgOverlay>
                    <Card.Text className="text-warning">
                        <FontAwesomeIcon icon={faStar} className="me-1"/>{Math.round(movie.vote_average)}
                    </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                );
            })}
            </CardGroup>
        </Container>
        </>
    );
};

export default CardRankComp;
