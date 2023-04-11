import React, { Fragment } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Header from '../../components/Header/Header';
import GoogleWrapper from '../../components/GoogleWrapper/GoogleWrapper';

export const Incentives = () => {
    return (
        <Fragment>
            <Jumbotron/>
            <Header/>
            <GoogleWrapper type='incentives' />
        </Fragment>
    )
}

export default Incentives;