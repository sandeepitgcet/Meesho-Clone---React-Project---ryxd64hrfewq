import React, { useContext, useEffect, useMemo, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import { auth, signOut, signOutLogin } from "../services/firebase/auth"
import { AuthContext, THEME_COLOR } from "../App";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const [USER, setUSER] = useState({});

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const loginHandle = () => {
    navigate("/login");
  }
  const logoutHandle = async () => {
    await signOutLogin(auth)
  }
  useEffect(()=>{
    
    onAuthStateChanged(auth, (userr) => {
        setUSER(userr);

    })
  },[user])
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: THEME_COLOR, }} >
            <Typography variant="h6" noWrap sx={{ display: { xs: "none", md: "flex" }, fontFamily: "monospace", fontWeight: 700, color: "inherit",textDecoration: "none",}}>
              MEESHO
            </Typography>
          </Link>
          <Box>
            {
              !USER?.uid ? 
              <Button variant="outlined" onClick={loginHandle}>Login</Button> :
              <Button variant="outlined" color="error" onClick={logoutHandle}>SignOut</Button>
            }
          </Box>
          
          
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;