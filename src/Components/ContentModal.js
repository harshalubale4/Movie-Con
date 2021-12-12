import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';
import {
    img_500,
    unavailable,
    unavailableLandscape,
} from "../config/config"
import "./CSS Files/ContentModal.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import ModalCarousel from "./ModalCarousel.js"
import { styled } from '@mui/system';
import "./CSS Files/Card.css"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "90%",
        height: "80%",
        backgroundColor: "black",
        border: "4px solid white",
        borderRadius: "20px",
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
        opacity: "100"
    },
}));


export default function ContentModal({ children, media_type, id }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setContent(data);
        // console.log(data);
    };


    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, []);

    const BootstrapButton = styled(Button)({
        fontSize: "1.2rem",
        letterSpacing: "0.1rem",
        border: '1px solid',
        lineHeight: 1.5,
        '&:hover': {
            backgroundColor: 'white',
            borderColor: 'black',
            color: "black",
            fontWeight: "900",
        },
    });

    return (
        <>
            <div
                className="cardContainer"
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                // BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >


                <Fade in={open}>
                    {content && (
                        <div className={classes.paper}>
                            <div className="content">
                                <img
                                    src={
                                        content.poster_path
                                            ? `${img_500}/${content.poster_path}`
                                            : unavailable
                                    }
                                    alt={content.name || content.title}
                                    className="imagePortrait"
                                />
                                <img
                                    src={
                                        content.backdrop_path
                                            ? `${img_500}/${content.backdrop_path}`
                                            : unavailableLandscape
                                    }
                                    alt={content.name || content.title}
                                    className="imageLandscape"
                                />
                                <div className="contentAbout">
                                    <div className="movieTitle">
                                        {content.name || content.title} (
                                        {(
                                            content.first_air_date ||
                                            content.release_date ||
                                            "-----"
                                        ).substring(0, 4)}
                                        )
                                    </div>
                                    {content.tagline && (
                                        <i className="tagLine">{content.tagline}</i>
                                    )}
                                    <span className="movieDescription">
                                        {content.overview}
                                    </span>

                                    <div>
                                        <ModalCarousel id={id} media_type={media_type} />
                                    </div>
                                    <div className="text-center container px-3">
                                        <BootstrapButton
                                            variant="contained"
                                            className="rounded p-1 ps-2"
                                            startIcon={<YouTubeIcon />}
                                            href={`https://www.youtube.com/watch?v=${video}`}
                                            target="__blank"
                                        >
                                            Trailer
                                        </BootstrapButton>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </Fade>
            </Modal>
        </>
    );
}