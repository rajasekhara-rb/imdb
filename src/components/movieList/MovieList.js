import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cards from '../cards/Cards.js';
import "./MovieList.css";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();
    // console.log(movieList)

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=${apiKey}&language=en-US`;
        axios.get(apiUrl).then((res) => {
            setMovieList(res.data.results)
        }).catch((error) => {
            console.log(error);
        })
    }, [type])


    return (
        <div>
            <Container className="movie_list">
                <Typography variant="h2" className="list_title" style={{ textDecoration: "none", color: "white", marginTop: "20px" }}>
                    {(type ? type : 'POPULAR').toUpperCase()}
                </Typography>
                {/* create a Grid container ->display movie card  */}
                <Grid container spacing={2} className="list_cards" style={{ textDecoration: "none", color: "white", marginTop: "20px" }}>
                    {movieList.map((movie) => (
                        <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                            <Cards movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default MovieList;