import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import CardContainer from "../../Components/CardContainer";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import "./style.css";

function Landing() {
  const [houses, setHouses] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [Recently,  setOtherSection] = useState([]);
  const navigate = useNavigate();

  const handleinput = () => {
    navigate("/houses");
  };

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/MonaKhader/API/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouses(data);
      })
      .catch((error) => {
      });
  }, []);

  useEffect(() => {
    const priceThreshold = 300;
    const filteredHouses = houses.filter((house) => house.price < priceThreshold);
    const firstSection = filteredHouses.slice(0,3);  
    setBestSellers(firstSection);
    const secondSection = filteredHouses.slice(4,7); 
   
    setOtherSection(secondSection);
  }, [houses]);
  return (
    <>
      <Box className="header" sx={{ width: "100%" }}>
        <Grid container className="divhero">
          <Grid item xs={12} md={12}>
           
            <Typography
              variant="h4"
              className="herotext"
              paddingBottom={"0.5em"}
              fontWeight={"bolder"}
              fontSize={50}
            >
             Choose your dream house with Us
            </Typography>
          </Grid>

          <Grid item xs={0}sm={9} md={5} lg={6}>
            <TextField
              onClick={handleinput}
              className="herosearch"
              variant="outlined"
              placeholder="search about house"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
          Recently Added
          </Typography>
          <CardContainer houses={Recently} className="card" />
        </div>

        <div className="housesSection">
          <Typography variant="h4" className="sectionTitle">
            Best Sellers
          </Typography>
          <CardContainer houses={bestSellers} className="card" />
        </div>
      </Container>
    </>
  );
}

export default Landing;
