import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <AppBar position="static"
                sx={{ background: "#202020", color: "ffffff" }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex" }}>
                        <div>
                            <Link to="/">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                                    style={{ width: "70px" }}
                                    alt="logo"
                                >
                                </img>
                            </Link>
                        </div>
                        <Link to="/movies/popular" style={{ textDecoration: "none", color: "#ffffff" }}>
                            {/* <Typography variant="h6" sx={{ flexGrow: 1 }} color="#ffffff">
                            Popular
                        </Typography> */}
                            <Button style={{ color: "#ffffff" }}>Popular</Button>
                        </Link>
                        <Link to="/movies/toprated" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Button style={{ color: "#ffffff" }}>Top Rated</Button>
                        </Link>
                        <Link to="/movies/upcomming" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Button style={{ color: "#ffffff" }}>Upcomming</Button>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Link to="/login" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Button style={{ color: "#ffffff" }}>Login</Button>
                        </Link>

                        <Link to="/register" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <Button style={{ color: "#ffffff" }}>Register</Button>
                        </Link>

                        <Link to="/profile" style={{ textDecoration: "none", color: "#ffffff" }}>
                            <IconButton>
                                <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60">
                                </Avatar>
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;