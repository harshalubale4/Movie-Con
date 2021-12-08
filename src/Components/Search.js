import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./CSS Files/Search.css"

const Search = () => {
    return (
        <>
            <div className="searchHeaderContainer text-center">
                <h1 className="text-center header">
                    search <SearchIcon sx={{ fontSize: 40 }} />
                </h1>
            </div>
            <div className="searchInputContainer">
                <input type="text" className="inputField mx-2" placeholder="Search" />
                <SearchIcon style={{
                    fontSize: "2.5rem",
                    color: "white",
                    backgroundColor: "black"
                }} />
            </div>
        </>
    )
}

export default Search
