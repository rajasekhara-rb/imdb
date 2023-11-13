import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import "./Cards.css";
import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [])

    return (
        <>
            {isLoading ? (
                <div className="cards">
                    <Skeleton variant="rectangular" width={300} height={400} animation="wave" />
                </div>
            ) : (
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                    {/* create carc Conatiner  */}
                    <Card className="cards_img">
                        <CardMedia
                            component="img"
                            alt={movie ? movie.original_title : ""}
                            height="400"
                            image={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                        />
                        {/* create a container for content information  */}
                        <div className="cards_overlay" style={{ textDecoration: "none", color: "white" }}>
                            <CardContent >
                                {/* //Display of movie title  */}
                                <Typography variant="h6" component="div" >
                                    {movie ? movie.original_title : ""}
                                </Typography>

                                {/* //Display release and movie rateing  */}
                                <Typography variant="body2" color="text.secondary" style={{ textDecoration: "none", color: "white" }}>
                                    {movie ? movie.release_date : ""}
                                    <span className="card_rating">
                                        {movie ? movie.vote_average : ""}
                                        <Rating name="half-rating" defaultValue={4} precision={1} />
                                    </span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movie ? movie.overview.slice(0, 120) + '...' : ""}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Link>
            )}
        </>
    );
};

export default Cards;