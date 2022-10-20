import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "../api/Axios";


const image_path = 'https://image.tmdb.org/t/p/original/';

const SliderComp = (props) => {
    const [movies, setMovie] = useState([]);

    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(props.url)
        setMovie(request.data.results)
    }

    fetchData()
}, [])

    return (
        <Carousel fade>
        
            { movies.slice(0,10).map(movie => {
                return (
                    <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={`${image_path}${movie.backdrop_path}`}
                    alt={movie.original_title}
                    style={{ height: '70vh' }}
                    />
                    <Carousel.Caption>
                    <h3>{movie.original_title}</h3>
                    <p>{movie.overview}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
            })
            }
        
        
        </Carousel>
    );
};

export default SliderComp;
