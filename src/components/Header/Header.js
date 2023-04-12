import React from 'react'
import { AppBar, Toolbar, Tabs, Tab, Grid  } from '@mui/material';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = ({ currentTab, setCurrentTab }) => {
    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    };

    return (
        <nav>
            <AppBar position="static" color="primary" flexGrow={1}>
                <Toolbar>
                <Grid justify={"space-between"} container  direction="column" alignItems="center" justifyContent="center">
                    <Grid xs={4} item>
                        <Grid container justify={"center"}>
                            <Tabs 
                                value={currentTab} 
                                onChange={handleChange} 
                                aria-label="basic tabs example"
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#FFF",
                                        textColor: "#FFF"
                                    }
                                }}
                            >
                                <Tab label="About" component={Link} to="/" sx={{ color: (theme) => theme.palette.text.primary, '&.Mui-selected': { color: (theme) => theme.palette.background.paper } }} />
                                <Tab label="Incentives" component={Link} to="/incentives" sx={{ color: (theme) => theme.palette.text.primary, '&.Mui-selected': { color: (theme) => theme.palette.background.paper } }} />
                                <Tab label="Feedback" component={Link} to="/feedback" selected textColor="#FFF" sx={{ color: (theme) => theme.palette.text.primary, '&.Mui-selected': { color: (theme) => theme.palette.background.paper } }} />
                            </Tabs>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                </Toolbar>
            </AppBar>
        </nav>
    );
};

Header.propTypes = {
    currentTab: PropTypes.number,
    setCurrentTab: PropTypes.func,
}

export default Header;