import React, { Fragment } from 'react'
import Header from '../../components/Header/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import GoogleWrapper from '../../components/GoogleWrapper/GoogleWrapper';

export const Feedback = () => {
    return (
        <Fragment>
            <Jumbotron/>
            <Header/>
            <GoogleWrapper type='form' />
        </Fragment>
    )
}

export default Feedback;