import React, { useContext, useEffect, useMemo, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Avatar,
} from "@mui/material";

import { Link } from "react-router-dom";
import { auth, signOut, signOutLogin } from "../services/firebase/auth"
import { AuthContext, THEME_COLOR } from "../App";
import { onAuthStateChanged } from "firebase/auth";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate();

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

  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
          <Link to="/" style={{ textDecoration: "none", color: THEME_COLOR, }} >
            <Typography variant="h6" noWrap sx={{ display: { xs: "none", md: "flex" }, fontFamily: "monospace", fontWeight: 700, color: "inherit",textDecoration: "none",}}>
              MEESHO
            </Typography>
          </Link>
          
          <Box>
            {
              !user? 
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