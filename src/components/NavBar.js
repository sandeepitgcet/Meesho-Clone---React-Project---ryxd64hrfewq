import React, { useContext, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  InputBase
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';


import { Link } from "react-router-dom";
import { auth, signOut, signOutLogin } from "../services/firebase/auth"
import { AuthContext, THEME_COLOR } from "../App";
import { onAuthStateChanged } from "firebase/auth";
import productsArr from "./productArray";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user, setUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

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

  const searchHandle = (e) => {
    console.log(e.target.value)
    // if(e.target.value){
    //   const data = productsArr.filter((product) => product.title)
    // }else{
      
    // }
    const data = productsArr.filter((product) => product.title)
  }



  const show = location.pathname === '/login' || location.pathname === '/signup'
  
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between'}}>
          <Box display={'flex'}>
            <Link to="/" style={{ textDecoration: "none", color: THEME_COLOR, }} >
              <Typography variant="h6" noWrap sx={{ display: { md: "flex" }, fontFamily: "monospace", fontWeight: 700, color: "inherit",textDecoration: "none",}}>
                MEESHO
              </Typography>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchHandle}
              />
            </Search>
          </Box>
          
          
          <Box>
            {
               user? 
               !show && <Button variant="outlined" color="error" onClick={logoutHandle}>SignOut</Button> :
               !show && <Button variant="outlined" onClick={loginHandle}>Login</Button>
              
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;