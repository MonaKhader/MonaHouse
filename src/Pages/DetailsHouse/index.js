import React, { useState, useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Snackbar from "@mui/material/Snackbar";
import Alert  from "@mui/material/Alert";
import PhoneRoundedIcon from "@mui/icons-material/LocalPhone";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import BathroomIcon from "@mui/icons-material/Bathroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AuthContext from '../../Components/Context/AuthContext';
import BathtubIcon from '@mui/icons-material/Bathtub';
import EmailIcon from '@mui/icons-material/Email';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import {Box }from '@mui/material/'
import Button from "@mui/material/Button";

import Loading from "../../Components/Loading";

import "./style.css";

function DetailsHouse() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/MonaKhader/API/houses/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const houseData = await response.json();
        setHouse(houseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHouse();
  }, [id]);

  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/MonaKhader/API/houses/${id}`
    );
    const item = await response.json();
    fetch(
      "https://my-json-server.typicode.com/MonaKhader/API/favorites",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    )
      .then((response) => {
        if (response.ok) {
          setIsFavorite(true);
          setOpenSnackbar(true);
        } else {
        }
      })
      .catch((error) => {
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Container  className="root">
      {loading ? (
        <Loading />
      ) : (
        <Grid container>
          <Box className='hero'>
             <Typography variant="h1" className="title" fontSize={30} textTransform={'capitalize'}>
              {house.title}
            </Typography>
            <div className="descBtn">
              <Button
                className="btn"
                sx={{
                  marginRight: 2,
                  color: "white",
                  bgcolor: "#8FB9B5",
                  fontWeight: "500",
                  width: 190,
                  "&:hover": {
                    backgroundColor: "#8FB9B5",
                    color: "white",
                  },
                }}
              >

                
                         {isFavorite ? (
              <FavoriteIcon style={{ color: "#2A5555" }} />
            ) : (
           <>  {isAuth && ( <FavoriteIcon style={{ color: "white" }} className="favorite" onClick={() => addToFavorite(id)} />   )} </> 
            )} add to Favorite
              </Button>
            </div></Box>
          <Grid xs="12" sm="12" md="12" lg="12" className="imgSection">
            <div className="imageBox">
              <img src={house.image} alt="house" />
            </div>
          </Grid>

          <Grid xs="12" sm="12" md="12" lg="8">
              <div className="Location">
                <LocationOnRoundedIcon  className="icon" style={{color :'#2A5555'}}/>
                <Typography variant="p" className="num">
                 {house.city}
                </Typography>
              </div>
             
           
           
            <Typography className="descDetails"  style={{ width:"85%" , marginTop:"30px"}}>{house.description}</Typography>

          
          </Grid>
          <Grid xs="12" sm="12" md="12" lg="4">
          <Typography variant="h5" className="priceDetails" style={{marginTop:"30px", marginBottom:"10px"}}>
              <span>${house.price} / Month</span>
            </Typography>
            <Box className="detailsCardBox">
          <Typography variant="body2" color="#909090" className="detailsCard">
            <LocalHotelIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
             {house.bedroom}bd
          </Typography>

          <Typography variant="body2" color="#909090" className="detailsCard">
            <BathtubIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
            {house.bathrooms}ba
          </Typography>
          <Typography variant="body2" color="#909090" className="detailsCard">
            <AccountBalanceIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
       {house.area}M
          </Typography></Box>
            <div className="descAddress">
              <div className="name">
                <Typography>
                  <AccountCircleIcon style={{ color: "#2A5555" }} />
                </Typography>
                <Typography variant="body"  ml={3} color={"#7D7D7D"}>
                  Mona Ibrabim Khader   
                </Typography>
              </div>
              <div className="name">
                <Typography>
                  <EmailIcon   style={{ color: "#2A5555" }}/>
                </Typography>
                <Typography variant="body" ml={1} color={"#7D7D7D"}>
               monakhader@gmail.com
                </Typography>
              </div>
              <div className="name">
                <Typography sx={{color:"#2A5555"}}>
                  <PhoneRoundedIcon   style={{ color: "#2A5555" }}/> 
                </Typography>
                <Typography variant="body"  ml={5} color={"#7D7D7D"}>
                  +972 56-797-5422
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          House added to favorites successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default DetailsHouse;
