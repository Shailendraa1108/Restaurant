import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

function Footer() {
    return (
        <Box sx={{ textAlign: "center", p: 3, bgcolor: "#1A1A19", color: "white" }}>
            <Box sx={{
                my: 3,
                "& svg": {
                    mr: 2,
                    cursor: "pointer",
                    fontSize: "60px"
                },
                "& svg:hover": {
                    transform:"translateX(5px)",
                    transition: "All 400ms",
                    color:"goldenrod",
                }


            }}>
                <InstagramIcon />
                <TwitterIcon />
                <GitHubIcon />
                <YouTubeIcon />
            </Box>
            <Typography sx={{
                "@media (max-width:600px)": {
                    fontSize: "1rem"
                }

            }}>
                All Right reserve @copy: Techfotify.com
            </Typography>
        </Box>
    )
}

export default Footer
