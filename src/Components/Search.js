import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./CSS Files/Search.css"
import "./CSS Files/Movies.css"
import Card from "./Card"
import axios from 'axios';
import CustomPagination from './CustomPagination';
import CircleLoader from "react-spinners/CircleLoader";

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const [content, setContent] = useState([])
    const [numberOfPages, setNumberOfPages] = useState()
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
            );
            setContent(data.results);
            setNumberOfPages(data.total_pages);
            // console.log(data);
            setLoading(false);
        } catch (e) {
            console.log("We ran into Problem")
            console.log(e);

        }
    }

    const onMyClick = () => {
        fetchSearch();
        setLoading(true);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [page])
    return (
        <>
            <div className="searchHeaderContainer text-center">
                <h1 className="text-center header">
                    search <SearchIcon sx={{ fontSize: 40 }} />
                </h1>
            </div>

            <div className="searchInputContainer">
                <input
                    type="text"
                    className="inputField mx-2"
                    id="searchBox"
                    placeholder="Movie/Series Name"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="btn" id="searchButton" onClick={onMyClick}>
                    Search <SearchIcon
                        style={{
                            fontSize: "140%",
                            color: "white"
                        }}
                    />
                </button>
            </div>


            {
                loading ?
                    <div className="text-center my-3">
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
                                    media_type={obj.media_type}
                                    vote_average={obj.vote_average}
                                />
                            )
                        }
                        {
                            searchText && !content && (<h1>No Media Found</h1>)
                        }
                        {
                            numberOfPages > 1 && (
                                <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />)
                        }
                    </div>

            }



        </>
    )
}

export default Search
