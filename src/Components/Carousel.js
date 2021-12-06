import React from 'react'
import "./CSS Files/Carousel.css"

const Carousel = () => {
    return (
        <>
            <div id="wholePage">
                <div id="carouselContainer">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner w-100">
                            <div class="carousel-item active movieContainer">
                                <img src="Images/tenet.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5">
                                    <h5>TENET</h5>
                                    <p>One Man's Probability Of Death...Is Another Man's Possibility For A Life</p>
                                </div>
                            </div>
                            <div class="carousel-item movieContainer">
                                <img src="Images/interstellar.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5">
                                    <h5>Interstellar</h5>
                                    <p>Murphy’s Law Doesn’t Mean That Something Bad Will Happen. It Means That Whatever Can Happen Will
                                        Happen.</p>
                                </div>
                            </div>
                            <div class="carousel-item movieContainer">
                                <img src="Images/500 days of Summer.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5">
                                    <h5>500 Days Of Summer</h5>
                                    <p>You know what Sucks? Realising that everything you believe in, is incomplete and utter bullshit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel
