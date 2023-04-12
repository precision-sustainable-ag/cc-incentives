import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import GoogleWrapper from '../../components/GoogleWrapper/GoogleWrapper';

export const Feedback = ({ currentTab, setCurrentTab }) => {
    return (
        <Fragment>
            <Jumbotron/>
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <GoogleWrapper type='form' />
        </Fragment>
    )
}

Feedback.propTypes = {
    currentTab: PropTypes.number,
    setCurrentTab: PropTypes.func,
}

export default Feedback;