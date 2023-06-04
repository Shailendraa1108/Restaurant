import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link, NavLink } from 'react-router-dom';
import '../../Styles/NavigationMenu.css'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    function handleToglebarMenu() {
        setMobileOpen(!mobileOpen)
    }
    const drawer = (
        <Box onClick={handleToglebarMenu}>
            <Typography color="goldenrod" varient="h6" component="div" sx={{ flexGrow: 1, my: 2, textAlign:"center" }}>
                <FastfoodIcon />&nbsp;
                my resturant
            </Typography>
            <Divider />
            <ul className='Menunaviagation-bar'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
            </ul>

        </Box>
    )
    return (
        <>
            <Box >
                <AppBar sx={{ bgcolor: "black" }} component={"nav"}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label='open-drawer'
                            edge="start"
                            sx={{
                                mr: 2,
                                display: { sm: "none" }
                            }}
                            onClick={handleToglebarMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography color="goldenrod" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <FastfoodIcon />
                            my resturant
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className='Navigation-bar'>
                                <li>
                                    <NavLink  activeClassName="active"     to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/menu">Menu</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>


                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleToglebarMenu}
                        sx={{
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: "240px"
                            }
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                
            <Toolbar />
            </Box>

        </>
    )
}

export default Header