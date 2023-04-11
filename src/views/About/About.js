import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';

import Header from '../../components/Header/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

export const About = () => {
    return (
        <Fragment>
            <Jumbotron/>
            <Header/>
            <Grid container>
                <Grid item>
                    <Typography variant='body1'>
                        <br/>Across the United States, there are many programs supporting the adoption of cover crops. This tool presents some of those programs, available at the federal and state levels, and summarizes their main characteristics. For the programs at the state level, we focused on the states where our Social Science Team at the University of Georgia has been conducting interviews to learn about farmers’ opinions on conservation practices. The tool is divided into five sheets (accessed by clicking on the tabs at the bottom of the page): <br/> <br/>
                    </Typography>
                    <Typography variant='h5'>
                        Federal Programs:
                    </Typography>
                    <Typography variant='body1'>
                        - Environmental Quality Incentives Program (EQIP) <br/>
                        - Conservation Stewardship Program (CSP) <br/>
                        - Pandemic Cover Crop Incentive (CCCP) <br/> <br/>
                    </Typography>
                    <Typography variant='h5'>
                        Northeastern State Programs:
                    </Typography>
                    <Typography variant='body1'>
                        - Maryland <br/>
                        - Pennsylvania <br/>
                        - Vermont <br/> <br/>
                    </Typography>
                    <Typography variant='h5'>
                        Southeastern State Programs:
                    </Typography>
                    <Typography variant='body1'>
                        - Georgia <br/>
                        - North Carolina <br/>
                        - South Carolina <br/> <br/>
                    </Typography>
                    <Typography variant='h5'>
                        Midwestern State Programs:
                    </Typography>
                    <Typography variant='body1'>
                        - Iowa <br/>
                        - Missouri <br/>
                        - Ohio <br/> <br/>
                    </Typography>
                    <Typography variant='body1'>
                        The information used to create this tool is linked at the bottom of each column. In addition, we reported our perceived strengths and limitations regarding the programs.
                        The first line in each sheet reports the last time the content was updated. Be mindful that requirements and deadlines often change from year to year. <br/> <br/>

                        <strong>Note:</strong> This list is not comprehensive of programs available at the county level or those promoted by private, non-governmental, or non-profit entities. Some of the programs in the tool sponsor a variety of practices, but for the scope of this work, we only focused on their support for cover crop adoption.
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
        
    )
}

export default About;