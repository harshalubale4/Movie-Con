import React from 'react'
import "./CSS Files/Carousel.css"

const Carousel = () => {
    return (
        <>
            <div id="wholePage">
                <div id="carouselContainer">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner w-100">
                            <div class="carousel-item active movieContainer">
                                <img src="Images/tenet.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5 captionContainer">
                                    <h5 className="captionHeading">TENET</h5>
                                    <p className="caption">One Man's Probability Of Death...Is Another Man's Possibility For A Life</p>
                                </div>
                            </div>
                            <div class="carousel-item movieContainer">
                                <img src="Images/interstellar.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5 captionContainer">
                                    <h5 className="captionHeading ">Interstellar</h5>
                                    <p className="caption">Murphy’s Law Doesn’t Mean That Something Bad Will Happen. It Means That Whatever Can Happen Will
                                        Happen.</p>
                                </div>
                            </div>
                            <div class="carousel-item movieContainer">
                                <img src="Images/500 days of Summer.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5 captionContainer">
                                    <h5 className="captionHeading ">500 Days Of Summer</h5>
                                    <p className="caption">You know what Sucks? Realising that everything you believe in, is incomplete and utter bullshit.</p>
                                </div>
                            </div>
                            <div class="carousel-item movieContainer">
                                <img src="Images/thorRagnarok.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block mb-5 captionContainer">
                                    <h5 className="captionHeading ">Thor Ragnarok</h5>
                                    <p className="caption">We're Not Doing 'Get Help'</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel
