import React, { Fragment } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Header from '../../components/Header/Header';
import GoogleWrapper from '../../components/GoogleWrapper/GoogleWrapper';

export const Incentives = ({ currentTab, setCurrentTab }) => {
    return (
        <Fragment>
            <Jumbotron/>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <GoogleWrapper type='incentives' />
            <br/>
            <Button component={Link} to="/feedback" variant="contained" color="primary">
                Give Feedback 
            </Button>
        </Fragment>
    )
}

export default Incentives;