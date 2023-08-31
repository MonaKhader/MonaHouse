import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BathtubIcon from '@mui/icons-material/Bathtub';

import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { HOUSES } from "../../Utils/routes.constant";
import AuthContext from "../../Components/Context/AuthContext";
import "./style.css";

export default function CardComponent({ house }) {
  const { isAuth } = useContext(AuthContext);
  const { id, image, title, city, price, bedroom, bathrooms ,area} = house;

  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const addToFavorite = async (id) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/MonaKhader/API/houses${id}`
    );
    const item = await response.json();
    fetch("https://my-json-server.typicode.com/MonaKhader/API/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.ok) {
          setIsFavorite(true);
          setOpenSnackbar(true);
        }
      })
      .catch((error) => {
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <Card sx={{width:350, margin: "10px" }}>
      <CardMedia sx={{ height: 350 }} image={image} title="Image House" />
      <CardContent className="CardContent">
        <Box className="CardContentTitle">
          <Typography
            gutterBottom
            style={{ fontSize: "20px" }}
          >
            {title}
          </Typography>
          <Typography
            gutterBottom
            style={{ fontSize: "20px" , color:"#2A5555" }}
          >
            ${price}
          </Typography>
        </Box>

        <Box className="detailsCardBox">
          <Typography variant="body2" color="#909090" className="detailsCard">
            <LocalHotelIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
             {bedroom}bd
          </Typography>

          <Typography variant="body2" color="#909090" className="detailsCard">
            <BathtubIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
            {bathrooms}ba
          </Typography>
          <Typography variant="body2" color="#909090" className="detailsCard">
            <AccountBalanceIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
       {area}M
          </Typography>
          <Typography variant="body2" color="#909090" className="detailsCard">
            <LocationOnIcon
              style={{ fontSize: "15px", marginRight: "3px", color: "#2A5555" }}
            />
            {city}
          </Typography>
        </Box>
      </CardContent>

      <CardActions className="cardActions">
        <Link
          to={`${HOUSES}/${id}`}
          className="detailsLink"
        >
         More Details
        </Link>

        <>
          {isAuth && (
            <Button style={{ padding: "1px", color: "#000" }}>
              {isFavorite ? (
                <FavoriteIcon style={{ color: "#8FB9B5", fontSize: "30px" }} />
              ) : (
                <FavoriteBorderIcon
                  className="favorite"
                  onClick={addToFavorite}
                  style={{ fontSize: "30px", color: "#ABABAB" }}
                />
              )}
            </Button>
          )}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="success">
              House added to favorites successfully!
            </Alert>
          </Snackbar>
        </>
      </CardActions>
    </Card>
  );
}
