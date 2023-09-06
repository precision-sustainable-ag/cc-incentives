import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import GoogleWrapper from "../../components/GoogleWrapper/GoogleWrapper";
import { Typography } from "@mui/material";

export const Feedback = ({ currentTab, setCurrentTab }) => {
  return (
    <Fragment>
      <Jumbotron />
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <GoogleWrapper type="form" />
      <Typography variant="body2">
        This work is supported by the Agriculture and Food Research Initiative’s
        Sustainable Agricultural Systems Coordinated Agricultural Projects
        [award no. 2019-68012-29818] and Water Coordinated Agriculture Projects
        [award no. 2018-68011-28372] from the United States Department of
        Agriculture (USDA) National Institute of Food and Agriculture.
      </Typography>
    </Fragment>
  );
};

Feedback.propTypes = {
  currentTab: PropTypes.number,
  setCurrentTab: PropTypes.func,
};

export default Feedback;
