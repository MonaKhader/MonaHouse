
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import About from '../../Utils/images/about.png';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './style.css';
import { Box } from '@mui/material';

export default function MediaCard() {
    const image = About;
    return (
        <Card sx={{ display: 'flex' ,boxShadow :'none',height:550,marginBottom:5, marginTop:10}}>
            <CardMedia
                component="img"
                sx={{ width:400 , marginRight:5 ,marginLeft:7}}
                image={image}
            />
            <CardContent  className='CardContent'>
                <Typography variant="h2" component="div"
                sx={{fontWeight:1000, color:'#8FB9B5'}}
                >
                    About Us
                </Typography>
                <Typography  sx={{color:'#413E4A', fontSize:40}}>
                Whether your Buying Or Renting, We can Help you move forward.
                </Typography>


                <div className='Aboutus'>
                <div className='Buy'>
                    <h1>Buy A house </h1>
                    <Typography component="div">Find your place with an immersive photo experience and the most listing,incloding things you won’t find anywhere else.</Typography>
        
                </div>
                <div className='Rent'>
                    <h1> Rent A house</h1>
                    <Typography component="div">We are creating a seamless online experience from shopping on the largest rental network,
                        to applaying, to paying rent.
                    </Typography>
                  
                </div>
                </div>
            </CardContent>
        </Card>
    );
}