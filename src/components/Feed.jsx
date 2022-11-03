import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar } from "./index.js";
const Feed = () => {
    return (
        <Stack sx={ { flexDirection: { sx: "column", md: "row"}}}>
            <Box sx={{ height: { sx: "auto", md: "92vh"}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2}}}>
                <Sidebar>

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
                   New  <span style={{
                        color: "#fc1503"
                    }}>Videos</span>
                    </Typography>
                </Box>
        </Stack>
    );
};


export default Feed;