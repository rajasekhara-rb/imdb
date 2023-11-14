import { Chip, Grid, Paper, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Movie.css"

const Movie = () => {
    const [movieDetails, setMovieDetails] = useState({});
    console.log(movieDetails);
    const { id } = useParams();

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    useEffect(() => {
        const getData = () => {
            axios.get(apiUrl).then((res) => {
                setMovieDetails(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getData()
    }, [apiUrl])

    return (
        <div className="movie">

            <div className="movie_intro">
                <img
                    className="movie_backdrop"
                    src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.backdrop_path : ""}`}
                    alt=""
                />
            </div>

            {/* Display various Movie Details  */}

            <div className="movie_detail">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Paper elevation={3} className="movie_posterbox">
                            <img
                                className="movie_poster"
                                src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.poster_path : ""}`}
                                alt=""
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6} md={8} lg={9}>
                        <div className="movie_detailRight">
                            <div className="movie_detailRightTop">
                                <Typography variant="h4" className="movie_name">
                                    {movieDetails ? movieDetails.original_title : ""}
                                </Typography>
                                <Typography variant="h4" className="movie_tagline">
                                    {movieDetails ? movieDetails.tagline : ""}
                                </Typography>

                                <div className="movie_rating">
                                    <span>
                                        Rating:{movieDetails ? movieDetails.vote_average : ""}
                                        <Rating name="half-rating" defaultValue={4} precision={1} />
                                    </span>
                                </div>

                                <Typography variant="subtitle1" className="movie_runtime">
                                    {movieDetails ? `${movieDetails.runtime}mins` : ""}
                                </Typography>
                                <Typography variant="subtitle1" className="movie_revenue">
                                    {movieDetails ? `${movieDetails.revenue}$` : ""}
                                </Typography>

                                <Typography variant="subtitle1" className="movie_releasedate">
                                    {movieDetails ? movieDetails.release_date : ""}
                                </Typography>

                                {/* //Display movie generes  */}

                                <div className="movie_generes">
                                    {movieDetails && movieDetails.genres ?
                                        movieDetails.genres.map((genre) =>
                                            <Chip
                                                key={genre.id}
                                                label={genre.name}
                                                className="movie_genre"
                                                color="primary"
                                            />
                                        ) : ""}
                                </div>
                            </div>

                            {/* Display Movie Description  */}
                            <div className="movie_detailRightBottom">
                                <Typography variant="h5" className="description">
                                    Description
                                </Typography>

                                <Typography variant="body1" className="description_overview">
                                    {movieDetails ? movieDetails.overview : ""}
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            {/* Display extra information related to movie  */}

            <div className="movie_links">
                <Typography variant="h5" className="movie_heading">
                    Useful Links
                </Typography>
                {movieDetails && movieDetails.homepage && (
                    <Link
                        href={movieDetails.homepage}
                        target="_blank"
                        underline="none"
                        className="useful"
                    >
                        <Typography variant="body1" className="movie_homeButton movie_Button">
                            Homepage <i className="newTab fas fa-external-link-alt" />
                        </Typography>

                    </Link>
                )}


                {movieDetails && movieDetails.imdb_id && (
                    <Link
                        href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                        target="_blank"
                        underline="none"
                        className="useful"
                    >
                        <Typography variant="body1" className="movie_imdbButton movie_Button">
                            IMDB <i className="newTab fas fa-external-link-alt" />
                        </Typography>

                    </Link>
                )}
            </div>


            {/* Display the information of the production companies of the movie  */}

            <Typography variant="h5" className="movie_heading" style={{ textDecoration: "none", color: "white", marginTop: "20px" }}>
                Production Companies
            </Typography>

            <div className="movie_production" style={{ textDecoration: "none", color: "white", marginTop: "20px" }}>
                {movieDetails &&
                    movieDetails.production_companies &&
                    movieDetails.production_companies.map((company) =>
                        company.logo_path ? (
                            <span key={company.id} className="productioncompanyimage">
                                <img
                                    style={{ background: "white", borderRadius: "10px" }}
                                    className="movie_productioncompany"
                                    src={`http://image.tmdb.org/t/p/original${company.logo_path}`}
                                    alt={company.name}
                                />
                                <span>{company.name}</span>
                            </span>

                        ) : (
                            ""
                        )
                    )}
            </div>
        </div>
    );
};

export default Movie;