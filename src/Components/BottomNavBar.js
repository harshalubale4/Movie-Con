import React from 'react'
import "./CSS Files/BottomNavBar.css"

const BottomNavBar = () => {
    return (
        <div className="buttonContainer">
            <div className="borderContainer">
                <button className="btn-light myButton">
                    Trending
                </button>
                <button className="btn-primary myButton">
                    Movies
                    <i class="fa-solid fa-fire-flame-curved"></i>
                </button>
                <button className="btn-secondary myButton">
                    Tv Shows
                    <i class="fa-solid fa-fire-flame-curved"></i>
                    <i class="fas fa-thumbs-up fa-2x"></i>
                </button>
                <button className="btn-danger myButton">
                    Search
                </button>
            </div>
        </div>
    )
}

export default BottomNavBar
