import React from 'react'
import { AppBar, IconButton, Typography, Toolbar, Menu, MenuItem  } from '@mui/material';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

import About from '../../views/About/About';
import Incentives from '../../views/Incentives/Incentives';
import Feedback from '../../views/Feedback/Feedback';


const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Cover Crop Incentives Explorer
                </Typography>
            </Toolbar>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {/* <MenuItem onClick={handleClose} containerElement={<Link component={About} to="/" />}>About</MenuItem>
                <MenuItem onClick={handleClose} containerElement={<Link component={Incentives} to="/incentives" />}>Incentives</MenuItem>
                <MenuItem onClick={handleClose} containerElement={<Link component={Feedback} to="/feedback" />}>Feedback</MenuItem> */}

                <MenuItem onClick={handleClose} component={Link} to="/" >About</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/incentives" >Incentives</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/feedback" >Feedback</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Header;