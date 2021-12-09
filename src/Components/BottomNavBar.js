import React from 'react'
import "./CSS Files/BottomNavBar.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';

const BottomNavBar = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        if (value === 1) {
            navigate("/trending")
        } else if (value === 2) {
            navigate("/movies");
        } else if (value === 3) {
            navigate("/series");
        } else if (value === 4) {
            navigate("/search");
        } else if (value === 5) {
            navigate("/")
        }

    }, [value])

    return (
        <div className="buttonContainer">
            <div className="borderContainer">
                <button className="myButton mx-lg-2 mx-md-1" onClick={() => { setValue(5) }}>
                    Home <HomeIcon />
                </button>
                <button className="myButton mx-lg-2 mx-md-1" onClick={() => { setValue(1) }}>
                    Trending <WhatshotIcon />
                </button>
                <button className="myButton mx-lg-2 mx-md-1 " onClick={() => { setValue(2) }}>
                    Movies <LocalMoviesIcon />
                </button>
                <button className="myButton mx-lg-2 mx-md-1" onClick={() => { setValue(3) }}>
                    Tv Shows <TvIcon />
                </button>
                <button className="myButton mx-lg-2 mx-md-1" onClick={() => { setValue(4) }}>
                    Search <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default BottomNavBar
