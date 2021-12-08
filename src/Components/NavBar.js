import React from 'react'
import "./CSS Files/NavBar.css"
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LaptopIcon from '@mui/icons-material/Laptop';
import AdbIcon from '@mui/icons-material/Adb';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ListIcon from '@mui/icons-material/List';

const NavBar = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        if (value === 1) {
            navigate("/")
        } else if (value === 2) {
            navigate("/bugbusters")
        } else if (value === 3) {
            navigate("/mentors");
        }

    }, [value])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navBar">
                <div className="container">
                    <span className="navbar-brand" id="navBarBrand" onClick={() => { setValue(1) }}> <MovieCreationIcon fontSize="large" /> Movie Con</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <ListIcon style={{
                            color: "white",
                            backgroundColor: "black",
                            fontSize: "2rem"
                        }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            <span className="navLinks mx-3" onClick={() => { setValue(2) }}><AdbIcon /> Bug Busters</span>
                            <span className="navLinks mx-3" onClick={() => { setValue(3) }}><PeopleIcon /> Mentors</span>
                            <a className="navLinks mx-3" href="https://www.communityofcoders.in/"><LaptopIcon /> COC VJTI</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
