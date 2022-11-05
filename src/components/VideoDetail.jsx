import React from "react";
import {useState, useEffect} from "react";
import {json, Link, useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography, Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

import {Videos} from "./index.js";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const VideoDetail = () => {
    const {id} = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => (
        setVideoDetail(data.items[0])
        ))
        .then((data) => {
            console.log("DATA: ", data);
        });

    }, [id])

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row"}} >
                <Box flex={1}>
                    <Box sx={{width: "100%", postition: "sticky", top: "86px"}} >
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
                        className="react-player" controls={true} />
                        <Typography color="#fff" variant="h5"
                        fontWeight="bold" padding={2}>
                          { videoDetail?.snippet?.title && (videoDetail?.snippet?.title)}
                        </Typography>
                    </Box>
                </Box>
            </Stack>

        </Box>
    );
};

export default VideoDetail;