import AspectRatio from "@mui/joy/AspectRatio";
import React from "react";
import Image from "../../images/Logo.png";
import Nifa from "../../images/NIFA.jpg";
import { Grid } from "@mui/material";

const Jumbotron = () => (
  <>
  <AspectRatio objectFit="contain" maxHeight="100px" justifyContent="flex-end" variant="plain">
    <Grid container direction="row">
      <Grid item>
        <img src={Image} alt="A beautiful landscape." />
      </Grid>
      <Grid item>
        <img src={Nifa} alt="A beautiful landscape." />
      </Grid>
    </Grid>
  </AspectRatio>

  </>
  
);

export default Jumbotron;
