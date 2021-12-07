import React from 'react'
import "./CSS Files/BottomNavBar.css"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';

const BottomNavBar = () => {
    return (
        <div className="buttonContainer">
            <div className="borderContainer">
                <button className="btn-light myButton">
                    Trending <WhatshotIcon />
                </button>
                <button className="btn-primary myButton">
                    Movies<MovieCreationIcon />
                </button>
                <button className="btn-secondary myButton">
                    Tv Shows<TvIcon />
                </button>
                <button className="btn-danger myButton">
                    Search<SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default BottomNavBar
