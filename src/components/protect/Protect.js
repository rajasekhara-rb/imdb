import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Protect = (props) => {
    const naviage = useNavigate();

    const { Component } = props;

    useEffect(() => {
        const data = localStorage.getItem("email");
        if (!data) {
            naviage("/login")
        }
    }, [naviage])

    return (
        <Component />
    )

}

export default Protect;