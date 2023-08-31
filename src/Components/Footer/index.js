import React from "react";
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@mui/material";



function Footer() {


    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/about-us");
    };

    const handleHome = () => {
      navigate("/");
    };


    const handleTwitterClick = () => {
      const twitterLink = 'https://twitter.com/home';
      window.open(twitterLink, '_blank');
    };

    const handleEmailClick = () => {
      const emailLink = 'https://mail.google.com/mail/u/0/#inbox';
      window.open(emailLink, '_blank');
    };

    const handleLinkedClick = () => {
      const Link = 'https://www.linkedin.com/messaging/thread/new/';
      window.open(Link, '_blank');
    };



  return (
    <Box
    component="footer" sx={{p: 4, bgcolor: "#DDEBEB", marginTop:' 40px' ,width:"100%",height:20}} >
    <Container maxWidth="lg">
      
      <Grid container  sx={{display:'flex',justifyContent:'space-between'}}>

      <Box sx={{width:150 , display:"flex",justifyContent:"space-between"}}>
          <Link color="#2A5555" onClick={handleHome} sx={{cursor:"pointer",fontSize:20 ,textDecoration:"none"}}>
          Home
          </Link>
          <Link  color="#2A5555" onClick={handleClick} sx={{cursor:"pointer",fontSize:20,textDecoration:"none"}}>
          About Us
          </Link>
          </Box>
        
        <Typography variant="body2" color="#2A5555" onClick={handleClick}>
          &copy;2023 copyright By Mona-khader
          </Typography>
        
         <Box  className="links" >
          <Link  sx={{color: "#2A5555"}} onClick={handleTwitterClick} >
            <InstagramIcon />
          </Link>
          <Link
            sx={{ pl: 1, pr: 1,color: "#2A5555" }}
            onClick={handleEmailClick}
          >
            <WhatsAppIcon  />
          </Link>
          <Link  sx={{color: "#2A5555"}} onClick={handleLinkedClick} > 
            <LinkedInIcon />
          </Link>
          </Box>
      </Grid>
    </Container>
  </Box>
  );
}

export default Footer;
