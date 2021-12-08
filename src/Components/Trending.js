import Card from "./Card"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./CSS Files/Trending.css"
import CustomPagination from "./CustomPagination"

const Trending = () => {
    const [movieData, setMovieData] = useState([])
    const [page, setPage] = useState(1)
    const fetchTrendingMedia = async () => {
        try {
            const axios = require('axios');
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            setMovieData(data.results)
        } catch (e) {
            console.log("We ran into a Problem")
            console.log(e);
        }
    }
    useEffect(() => {
        fetchTrendingMedia();
    }, [page])
    return (
        <>
            <div className="headerContainer text-center">
                <h1 className="text-center header">
                    Trending
                </h1>
            </div>

            <div className="container trendingContainer">
                {
                    movieData && movieData.map((obj) =>
                        <Card
                            key={obj.id}
                            id={obj.id}
                            poster={obj.poster_path}
                            title={obj.title || obj.name}
                            date={obj.first_air_date || obj.release_date}
                            media_type={obj.media_type}
                            vote_average={obj.vote_average}
                        />
                    )
                }
                <CustomPagination setPage={setPage} />
            </div>
        </>
    )
}

export default Trending
