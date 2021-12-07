import React from 'react'
import "./CSS Files/NavBar.css"
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top navBar">
                <div class="container">
                    <a class="navbar-brand" id="navBarBrand" href="#"> <MovieCreationIcon fontSize="large" /> Movie Con</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav">
                            <a href="" className="navLinks mx-2">Bug Busters</a>
                            <a href="" className="navLinks mx-2">Mentors</a>
                            <a href="" className="navLinks mx-2">COC VJTI</a>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
