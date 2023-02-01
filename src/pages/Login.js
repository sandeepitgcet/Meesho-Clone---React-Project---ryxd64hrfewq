import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, FormControl,TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { AuthContext, THEME_COLOR } from '../App';
import styled from '@emotion/styled';
import { Form, Link, useNavigate, redirect } from 'react-router-dom';
import { auth, signIn } from '../services/firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Home';

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: THEME_COLOR,
  ':hover':{
    backgroundColor:'green'
  }
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState({email:'', password:''})
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContext)
  console.log(user.uid);
  
 useEffect(()=>{
  if(user.uid){
    console.log("redirectng");
    navigate('/')
  }
 },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userInput);
    const response = await signIn(userInput.email, userInput.password)
    console.log(response);
    if(response.isError){
      return;
    }else{
      setUser(response)
      navigate('/')
    }
  }
  return (
    <React.Fragment>
      <NavBar />
      <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
      <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>LOGIN</Typography>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
          
          <TextField fullWidth label="Email" id='email' name='email' value={userInput.email} onChange={(e)=>setUserInput({...userInput, email:e.target.value})}/>
          <TextField fullWidth label="Password" id='password' type={'password'} name='password' value={userInput.password} onChange={(e)=>setUserInput({...userInput, password:e.target.value})}/>
          <LoginButton variant='contained' type='submit'>Login</LoginButton>
        
      </Form>
      <Typography variant='body1'>Create an Account <Link to={'/signup'}>Sign Up</Link></Typography>
      </Box>
    </React.Fragment>
  )
}
