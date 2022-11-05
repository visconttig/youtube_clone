import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./index.js";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";


const ChannelDetail = () => {
    const { id } = useParams();
    const [ channelDetail, setChannelDetail ] = useState(null);
    const [ videos, setVideos ] = useState([]);

    console.log("VIDEOS: ",  videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => { setChannelDetail(data?.items[0])});
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((videos) => { setVideos(videos.items)});
    }, [id])

    return (
        <Box minHeight="95vh" >
            <Box>
                <div style={{
                    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,35,230,1) 27%, rgba(255,0,0,1) 100%)",
                    zIndex: "10",
                    height: "300px"}} />
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" padding="2">
                <Box sx={{ mr: { sm: "100px"}}} />
                    <Videos videos={videos} />
            </Box>
        </Box>
    );
};


export default ChannelDetail;