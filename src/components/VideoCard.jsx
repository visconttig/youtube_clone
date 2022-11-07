import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle, Preview } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants.js";
//import youtubeImage from "youtube-preview.jpg";


const VideoCard = ({video: {id: {videoId }, snippet }}) => {

    return (
        <Card sx={{ width: { md: "320px", xs: "100%"}, boxShadow: "none", borderRadius: 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

            <CardMedia 
            component="img"
            image={snippet.thumbnails.high.url || require("../assets/images/youtube-preview.jpg")}
            alt={snippet.title}
            sx={{ width: { md: "358px", xs: "100%" }, height: 180 }} />
            </Link>
            <CardContent sx={{backgroundColor: "#1e1e1e", height: "106px" }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" 
                    fontWeight="bold"
                    color="#fff"
                     >
                        {snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant="subtitle2" 
                    fontWeight="bold"
                    color="grey"
                     >
                        {snippet.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                        <CheckCircle sx={{fontSize: 12,
                    color:"grey" , ml: "5px"}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};



export default VideoCard;