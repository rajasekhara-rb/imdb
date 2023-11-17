import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';

const YT_API_KEY = process.env.REACT_APP_YTAPI_KEY;
// console.log(YT_API_KEY)
const MAX_RESULTS = 50;
const VideoPlay = () => {

    const [videos, setVideos] = useState([]);
    // console.log(videos);
    const [currentVideo, setCurrentVideo] = useState(null);
    // console.log(currentVideo)
    const playerRef = useRef(null);

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YT_API_KEY}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`)
            .then((res) => {
                const videoItems = res.data.items;
                if (videoItems.length > 0) {
                    setVideos(videoItems);
                    setCurrentVideo(videoItems[0].id.videoId);
                } else {
                    console.log("No videos found");
                }
            }).catch((error) => {
                console.error("Error in fetching data ", error)
            })
    }, [])

    const videoOptions = {
        width: "640",
        height: "360",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    const handleCardClick = (videoId) => {
        setCurrentVideo(videoId);
    }

    return (
        <>
            <Container>
                <h1 style={{ color: "white" }}>Video Play</h1>
                <Grid container spacing={3}>
                    {videos.map((video) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={video.id.videoId}>
                            {/* create a card for each video  */}
                            <Card onClick={() => handleCardClick(video.id.videoId)}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary">
                                        {video.snippet.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <div>
                    {currentVideo && (
                        <YouTube
                            videoId={currentVideo}
                            opts={videoOptions}
                            onReady={(event) => {
                                playerRef.current = event.target;
                            }}
                        />
                    )}
                </div>
            </Container>
        </>
    )
}

export default VideoPlay;