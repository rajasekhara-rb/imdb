import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import "./Home.css";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
            // console.log(res.data.results);
            setPopularMovies(res.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }, [apiUrl])

    return (
        <>
            <div className="poster">
                <Carousel
                    autoPlay={true}
                    animation="fade"
                    timeout={3000}
                    indicator={false}
                    infiniteLoop={true}
                >

                    {/* {popularMovies.map((movie) => {
                        return <Link
                            to={`/movie/${movie.id}`}
                            key={movie.id}
                        >
                            
                            <div className="posterImage" style={{ textDecoration: "none", color: "white" }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                    alt={movie ? movie.original_title : ""}
                                />
                            </div>

                            
                            <div className="posterImage_overlay" style={{ textDecoration: "none", color: "white" }}>
                               
                                <div className="posterImage_title">
                                    <h1>{movie ? movie.original_title : ""}</h1>
                                </div>
                                <div className="posterImage_releasedate">
                                    {movie ? movie.release_date : ""}
                                </div>
                                <div className="posterImage_rating">
                                    <span>
                                        Rating:{movie ? movie.vote_average : ""}
                                        <Rating name="half-rating" defaultValue={4} precision={1} />
                                    </span>
                                </div>

                                <div className="posterImage_description">
                                    {movie ? movie.overview : ""}
                                </div>

                            </div>
                        </Link>
                    })} */}

                    {/* map over popularMovies array to create a Link for each  */}
                    {popularMovies.map((movie) => (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            {/* create a div for movie poster image  */}
                            <div className="posterImage" style={{ textDecoration: "none", color: "white" }}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                                    alt={movie ? movie.original_title : ""}
                                />
                            </div>

                            {/* create a one more div to provide additional info  */}
                            <div className="posterImage_overlay" style={{ textDecoration: "none", color: "white" }}>
                                {/* display movie title  */}
                                <div className="posterImage_title">
                                    <h1>{movie ? movie.original_title : ""}</h1>
                                </div>
                                <div className="posterImage_releasedate">
                                    {movie ? movie.release_date : ""}
                                </div>
                                <div className="posterImage_rating">
                                    <span>
                                        Rating:{movie ? movie.vote_average : ""}
                                        <Rating name="half-rating" defaultValue={4} precision={1} />
                                    </span>
                                </div>

                                <div className="posterImage_description">
                                    {movie ? movie.overview : ""}
                                </div>

                            </div>
                        </Link>
                    ))}

                </Carousel>
                <MovieList/>
            </div>
        </>
    )
}

export default Home;
