import AspectRatio from '@mui/joy/AspectRatio';
import React from 'react'
import Image from '../../images/Logo.png'

const Jumbotron = () => (
    <AspectRatio objectFit="contain" maxHeight="100px" justifyContent="flex-end">
            <img
                src={Image}
                alt="A beautiful landscape."
            />
    </AspectRatio>
)

export default Jumbotron;