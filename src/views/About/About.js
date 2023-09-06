import React, { Fragment } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

export const About = ({ currentTab, setCurrentTab }) => {
  const navigate = useNavigate();

  const handleNav = () => {
    setCurrentTab(1);
    navigate("/incentives");
  };

  return (
    <Fragment>
      <Jumbotron />
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item container alignItems="center" justifyContent="center">
          <Typography variant="h5">
            <br />
            Welcome to the Cover Crops Incentives Explorer Tool!
            <br />
          </Typography>
          <Typography variant="body2">
            <br />
            Across the United States, there are many programs supporting the
            adoption of cover crops. This tool presents some of those programs,
            available at the federal and state levels, and summarizes their main
            characteristics. For the programs at the state level, we focused on
            the states where our Social Science Team at the University of
            Georgia has been conducting interviews to learn about farmers’
            opinions on conservation practices. The tool is divided into four
            sheets (accessed by clicking on the tabs at the bottom of the page):{" "}
            <br /> <br />
          </Typography>

          <Grid
            item
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Typography variant="h5">Federal Programs:</Typography>
              <Typography variant="body2">
                - Environmental Quality Incentives Program (EQIP) <br />
                - Conservation Stewardship Program (CSP) <br />
                - Pandemic Cover Crop Incentive (CCCP) <br /> <br />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Northeastern State Programs:</Typography>
              <Typography variant="body2">
                - Maryland <br />
                - Pennsylvania <br />
                - Vermont <br /> <br />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Southeastern State Programs:</Typography>
              <Typography variant="body2">
                - Georgia <br />
                - North Carolina <br />
                - South Carolina <br /> <br />
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">Midwestern State Programs:</Typography>
              <Typography variant="body2">
                - Iowa <br />
                - Missouri <br />
                - Ohio <br /> <br />
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2">
            The information used to create this tool is linked at the bottom of
            each column. In addition, we reported our perceived strengths and
            limitations regarding the programs. The first line in each sheet
            reports the last time the content was updated. Be mindful that
            requirements and deadlines often change from year to year. 
            <br />
            <br />
            <strong>Note:</strong> This list is not comprehensive of programs
            available at the county level or those promoted by private,
            non-governmental, or non-profit entities. Some of the programs in
            the tool sponsor a variety of practices, but for the scope of this
            work, we only focused on their support for cover crop adoption.
            <br />
            <br />
          </Typography>

          <Typography variant="body2">
            This work is supported by the Agriculture and Food Research
            Initiative’s Sustainable Agricultural Systems Coordinated
            Agricultural Projects [award no. 2019-68012-29818] and Water
            Coordinated Agriculture Projects [award no. 2018-68011-28372] from
            the United States Department of Agriculture (USDA) National
            Institute of Food and Agriculture.
          </Typography>
        </Grid>

        <Grid item>
          <Button onClick={handleNav} variant="contained" color="primary">
            View Incentives
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

About.propTypes = {
  currentTab: PropTypes.number,
  setCurrentTab: PropTypes.func,
};

export default About;
