import React from 'react'

const CarouselInner = ({ title, imageSrc, caption }) => {
    return (
        <>
            <div class="carousel-item movieContainer">
                <img src={imageSrc} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block mb-5 captionContainer">
                    <h5 className="captionHeading ">{title}</h5>
                    <p className="caption">{caption}</p>
                </div>
            </div>
        </>
    )
}

export default CarouselInner
