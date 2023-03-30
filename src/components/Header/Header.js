import React from 'react'
// import {AppBar, IconButton, Typography, Toolbar, Menu, MenuItem } from '@mui/core'
import { AppBar, IconButton, Typography, Toolbar, Menu, MenuItem  } from '@mui/material';
// import { Link } from 'react-router-dom'
// import GoogleWrapper from '../GoogleWrapper/GoogleWrapper';
// import { makeStyles } from '@mui/core/styles';
// import MenuIcon from '@mui/icons/Menu';

// const useStyles = makeStyles({
//     menuButton: {
//       align: 'right'
//     },
//   });

export default function Header() {
    // const classes = useStyles();
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <AppBar position="static">
            <Toolbar>
                {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}> */}
                {/* <MenuIcon /> */}
                {/* </IconButton> */}
                <Typography variant="h6">
                    Cover Crop Incentives
                </Typography>
            </Toolbar>

            {/* <GoogleWrapper /> */}



            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose} containerElement={<Link component={Home} to="/" />}>Home</MenuItem>
                <MenuItem onClick={handleClose} containerElement={<Link component={About} to="/about" />}>About</MenuItem>
                <MenuItem onClick={handleClose} containerElement={<Link component={DeviceCommands} to="/device-commands" />}>Device Commands</MenuItem> */}

                {/* <MenuItem onClick={handleClose} component={Link} to="/" >Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/about" >About</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/device-commands" >Device Commands</MenuItem>
            </Menu> */}
        </AppBar>
    )
}