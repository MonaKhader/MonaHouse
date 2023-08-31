import React , { useContext ,useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import image from "../../Utils/images/logo.png";
import AuthContext from '../../Components/Context/AuthContext';
import "../Navbar/style.css";
import { hover } from "@testing-library/user-event/dist/hover";

function NavBar() {
  const { isAuth, setIsAuth, logout } = useContext(AuthContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const [error, setError] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleabout = () => {
    navigate("/about-us");
  };

  const handlehousese = () => {
    navigate("/houses");
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const handlregister = () => {
    navigate("/register");
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleout = () => {
    try {
      logout();
      navigate("/");
    } catch (err) {
      setError('Internal server Error');
    }
  };

  return (
    <AppBar sx={{ bgcolor: "#fff", height: "80px",color:"#413E4A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#413E4A",
              textDecoration: "none",
            }}
          >
            <img src={image} className="img" />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#413E4A",
              textDecoration: "none",
            }}
          >
            <img src={image} />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <Button
              onClick={handlehousese}
              sx={{ my: 2, color: "#413E4A", display: "block", mr:5 }}
            >
              Housese
            </Button>
            <Button
              onClick={handleabout}
              sx={{ my: 2, color: "#413E4A", display: "block" }}
            >
              About us
            </Button>
          
          </Box >
          {isAuth === false ? (
            <>
              <Box sx={{
                display: { xs: "none", md: "block", lg:'block', sm: 'block' },
              }}>
             
                <Button
                  onClick={handlelogin}
                  sx={{
                    marginRight: 2,
                    color: "#2A5555",
                    bgcolor: "white",
                    fontWeight: "500",
                  "&:hover":{
                    color: "#2A5555",
                    bgcolor: "white",
                  }                  }}
                >
                  LOGIN
                </Button>

                <Button
                 onClick={handlregister}
                 
                  sx={{
                    color:"#fff",
                    marginRight: 2,
                    fontWeight: "500",
                    backgroundColor:"#8FB9B5",
                    "&:hover":{
                      color:"#fff",
                      bgcolor: "#8FB9B5"
                    }  
                    
                  }}
                >
                  SIGNUP
                </Button>
              </Box>
            </>
          ) : (
            <>
              <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                className="profileicon"
              >
                <AccountCircle/>
                {/* <Typography textAlign="center" color='#8FB9B5'> Hi,Mona</Typography> */}
              </IconButton>
               <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile} className="MenuItem">Profile</MenuItem>
                <MenuItem onClick={handleout} className="logout">Log out </MenuItem>
              </Menu>
            </div> 
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;