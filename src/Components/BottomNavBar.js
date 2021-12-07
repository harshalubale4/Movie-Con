import React from 'react'
import "./CSS Files/BottomNavBar.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const BottomNavBar = () => {
    return (
        <div className="buttonContainer">
            <div className="borderContainer">
                <button className="myButton">
                    Trending <WhatshotIcon />
                </button>
                <button className="myButton ">
                    Movies <LocalMoviesIcon />
                </button>
                <button className="myButton">
                    Tv Shows <TvIcon />
                </button>
                <button className="myButton">
                    Search <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default BottomNavBar
