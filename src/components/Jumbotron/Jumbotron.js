import { Grid } from '@mui/material';
import React from 'react'
import Image from '../../images/Corn.jpg'

export const Jumbotron = () => (
        <Grid sx={{
                backgroundImage: `url(${Image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: '#fff',
                height: '180px',
                position: 'relative',
                zIndex: -2,
            }}
        />
)

export default Jumbotron;