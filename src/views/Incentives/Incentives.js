import React, { Fragment } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Header from '../../components/Header/Header';
import GoogleWrapper from '../../components/GoogleWrapper/GoogleWrapper';

export const Incentives = ({ currentTab, setCurrentTab }) => {
    const navigate = useNavigate();

    const handleNav = () => {
        setCurrentTab(2)
        navigate("/feedback");
    }

    return (
        <Fragment>
            <Jumbotron/>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <GoogleWrapper type='incentives' />
            <br/>
            <Button onClick={handleNav} variant="contained" color="primary">
                Give Feedback 
            </Button>
        </Fragment>
    )
}

export default Incentives;