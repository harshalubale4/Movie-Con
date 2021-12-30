import React from 'react'

const CarouselInner = ({ title, imageSrc, caption }) => {
    return (
        <>
            <div className="carousel-item movieContainer">
                <img src={imageSrc} className="d-block w-100 myImage" alt="..." />
                <div className="carousel-caption d-none d-md-block mb-5 captionContainer">
                    <h5 className="captionHeading ">{title}</h5>
                    <p className="caption">{caption}</p>
                </div>
            </div>
        </>
    )
}

export default CarouselInner
