import React from 'react'
import "./CSS Files/NavBar.css"

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Movie Con</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="navbar-nav">
                            <a href="" style={{ textDecoration: "none" }}>Movies</a>
                            <a href="" style={{ textDecoration: "none" }}>Tv Show</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
