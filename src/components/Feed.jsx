import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar } from "./index.js";
import { Videos } from "./index.js";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const Feed = () => {

    const [ selectedCategory, setSelectedCategory ] = useState("New");
    const [ videos, setVideos ] = useState([]);
    

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
            setVideos(data.items)
        });
    }, [selectedCategory]);

    return (
        <Stack sx={ { flexDirection: { sx: "column", md: "row"}}}>
            <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2}}}>
                <Sidebar 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}>

                </Sidebar>

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff"}}>
                  Copyright Youtube Clone 2022
                </Typography>
                </Box>

                <Box p={2} sx={{
                    overflowY: "auto", height: "90vh", flex: 2
                }}>
                    <Typography variant="h4" 
                    fontWeight="bold" marginBottom={2} sx={{
                        color: "white"
                    }}>
                   {selectedCategory}  <span style={{
                        color: "#fc1503"
                    }}>Videos</span>
                    </Typography>

                    <Videos videos={videos} />
                </Box>
        </Stack>
    );
};


export default Feed;