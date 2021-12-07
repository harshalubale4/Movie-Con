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
    return (
        <>
            <h1 className="cardBody text-center">
                {title}
                {date}
            </h1>
            <img src={poster ? `${img_300}/${poster}` : unavailable} alt="title" />
        </>
    )
}

export default Card
