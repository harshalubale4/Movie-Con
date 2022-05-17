import React from 'react'
import "./CSS Files/Carousel.css"
import MovieInfo from "./Carousel Components/MovieInfo.js"
import CarouselInner from './Carousel Components/CarouselInner'

const Carousel = () => {

    return (
        <>
            <div id="wholePage">
                <div id="carouselContainer">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner w-100">
                            <div className="carousel-item active movieContainer">
                                <img src="https://res.cloudinary.com/dqg4yv2bd/image/upload/c_fill/v1652788491/Movie%20Con/gifted_wcfbmo.jpg" className="d-block bgImage w-100 myImage" alt="..." />
                                <div className="carousel-caption d-none d-md-block mb-5 captionContainer">
                                    <h5 className="captionHeading">Gifted</h5>
                                    <p className="caption">We've discussed this ad nauseum.</p>
                                </div>
                            </div>
                            {
                                MovieInfo.map((elem) => {
                                    return (
                                        <CarouselInner title={elem.title} imageSrc={elem.imageSrc} caption={elem.caption} />
                                    )
                                })
                            }
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel
