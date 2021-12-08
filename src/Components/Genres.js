import { Chip } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import "./CSS Files/Genres.css"

const Genres = ({
    selectedGenres,
    type,
    genres,
    setGenres,
    setSelectedGenres,
    setPage
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    }


    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            setGenres(data.genres)
        }
        catch (e) {
            console.log("We ran into a Problem")
            console.log(e);
        }
    }

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="chipContainer container">
                {selectedGenres && selectedGenres.map((genre) =>
                    <Chip label={genre.name}
                        style={{
                            color: 'black',
                            backgroundColor: "wite",
                            border: "2px solid black",
                            fontSize: "0.9em",
                            margin: "0.5rem"
                        }}
                        clickable
                        onDelete={() => handleRemove(genre)}
                        key={genre.id}
                    />
                )}
                {genres && genres.map((genre) =>
                    <Chip label={genre.name}
                        style={{
                            color: 'white',
                            backgroundColor: "black",
                            border: "1.5px solid white",
                            fontSize: "0.9em",
                            margin: "0.5rem"
                        }}
                        clickable
                        onClick={() => handleAdd(genre)}
                        key={genre.id}
                    />
                )}

            </div>
        </>
    )
}

export default Genres
