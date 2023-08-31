import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NotFound from '../../Utils/images/notfound.png';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body2">
        {/* Add your search box here */}
        <Box sx={{ display: 'flex', alignContent:'center',
           mt:40 , ml:20}}>
        </Box>
      </Typography>
    </CardContent>
  </React.Fragment>
);
export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card 
      sx={{
        backgroundImage: `url(${NotFound})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '500px' 
      }}
      >
        {card}</Card>
    </Box>
  );
}

