import React from 'react'
import "./CSS Files/Card.css"
import { img_300, unavailable } from "../config/config"

const Card = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    let newDate = `${date[8]}${date[9]}-${date[5]}${date[6]}-${date[0]}${date[1]}${date[2]}${date[3]}`
    return (
        <>
            <div className="cardContainer">
                <img src={poster ? `${img_300}/${poster}` : unavailable} alt="title" className="img-fluid" />
                <div className="text-center my-2 movieHeader">
                    {title}
                </div>
                <div className="textContainer">
                    <span>{media_type}</span>
                    <span>{vote_average}</span>
                    <span>{newDate}</span>
                </div>
            </div>

            {/* <h1 className="cardBody text-center">
                {title}
                {date}
            </h1>
            <img src={poster ? `${img_300}/${poster}` : unavailable} alt="title" /> */}
        </>
    )
}

export default Card
