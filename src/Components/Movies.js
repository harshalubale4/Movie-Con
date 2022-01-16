import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card';
import CustomPagination from './CustomPagination';
import useGenre from "../hooks/useGenre"
import "./CSS Files/Movies.css"
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Genres from './Genres';
import { Modal } from '@material-ui/core';
import CircleLoader from "react-spinners/CircleLoader";



const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres);
    const [loading, setLoading] = useState(true);

    const fetchDiscoverMovies = async () => {
        try {
            const axios = require('axios');
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
            setContent(data.results)
            setNumberOfPages(data.total_pages);
            setLoading(false);
        } catch (e) {
            console.log("We ran into a Problem")
            console.log(e);
        }
    }
    useEffect(() => {
        fetchDiscoverMovies();
    }, [page, genreforURL])
    return (
        <>
            <div className="headerContainer text-center">
                <h1 className="text-center header">
                    Movies <LocalMoviesIcon sx={{ fontSize: 40 }} />
                </h1>
            </div>
            <div className="container">
                <Genres
                    type="movie"
                    selectedGenres={selectedGenres}
                    genres={genres}
                    setGenres={setGenres}
                    setSelectedGenres={setSelectedGenres}
                    setPage={setPage}
                />
            </div>

            {
                loading ?
                    <div className="text-center my-5">
                        <CircleLoader color="#9105fc" size={150} loading={loading} />
                    </div>

                    :
                    <div className="container moviesContainer">
                        {
                            content && content.map((obj) =>
                                <Card
                                    key={obj.id}
                                    id={obj.id}
                                    poster={obj.poster_path}
                                    title={obj.title || obj.name}
                                    date={obj.first_air_date || obj.release_date}
                                    media_type="movie"
                                    vote_average={obj.vote_average}
                                />
                            )
                        }
                        {
                            numberOfPages > 1 && (
                                <CustomPagination setPage={setPage} numberOfPages={500} />)
                        }
                    </div>

            }



            {/* <Modal /> */}
        </>
    )
}

export default Movies
