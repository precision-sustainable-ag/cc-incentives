import React, { Fragment } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Header from "../../components/Header/Header";
import GoogleWrapper from "../../components/GoogleWrapper/GoogleWrapper";

export const Incentives = ({ currentTab, setCurrentTab }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    setCurrentTab(2);
    navigate("/feedback");
  };

  return (
    <Fragment>
      <Jumbotron />
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <GoogleWrapper type="incentives" />
      <br />

      <Typography variant="body2">
        This work is supported by the Agriculture and Food Research Initiative’s
        Sustainable Agricultural Systems Coordinated Agricultural Projects
        [award no. 2019-68012-29818] and Water Coordinated Agriculture Projects
        [award no. 2018-68011-28372] from the United States Department of
        Agriculture (USDA) National Institute of Food and Agriculture.
      </Typography>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Button onClick={handleNav} variant="contained" color="primary">
          Give Feedback
        </Button>
      </Grid>
    </Fragment>
  );
};

Incentives.propTypes = {
  currentTab: PropTypes.number,
  setCurrentTab: PropTypes.func,
};

export default Incentives;
