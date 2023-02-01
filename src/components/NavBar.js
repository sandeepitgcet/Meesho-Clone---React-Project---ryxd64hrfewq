import React, { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import { auth, signOut, signOutLogin } from "../services/firebase/auth"
import { AuthContext, THEME_COLOR } from "../App";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onLogOutButtonClick = () => {
    signOut();
  };
  console.log(user);
  const changeLogin = () => {
    navigate("/login");
  }
  const logoutHandle = () => {
    signOutLogin(auth)
  }
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: THEME_COLOR,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MEESHO
            </Typography>
          </Link>
          <Button variant="outlined" onClick={changeLogin}>Login</Button>
          <Button variant="outlined" onClick={logoutHandle}>SignOut</Button>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;