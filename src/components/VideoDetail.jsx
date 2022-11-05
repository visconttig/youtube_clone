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
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => 
        setVideoDetail(data?.items[0])
        ).catch((error) => (console.log({error})));

        fetchFromAPI(`videos?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => 
            setVideos(data.items)
        )
        .catch((error) => {
            console.error("Error fetching data...", {error})
        });

    }, [id])

    // testing
    useEffect(() => {
        console.log("VIDEOS: " , videos);
    }, [videos]);


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
                        <Stack direction="row" justifyContent="space-between" 
                        sx={{color: "#fff"}} py={1} px={2}>
                            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                                <Typography variant={{sm: "subtitle1", md: "h6"}} color="#fff">
                                    {videoDetail?.snippet?.channelTitle}
                                    <CheckCircle sx={{fontSize: "12px", color: "grey", ml: "5px"}} />
                                </Typography>
                            </Link>
                            <Stack direction="row" gap="20px" alignItems="center">
                                <Typography variant="body1" sx={{opacity: "0.7"}}>
                                    {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant="body1" sx={{opacity: "0.7"}}>
                                    {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>
            </Stack>
            <Box px={2} py={{md: "1", xs: "5"}} justifyContent="center">
                {videos ? (<Videos videos={videos} />) : "" }
            </Box>

        </Box>
    );
};

export default VideoDetail;