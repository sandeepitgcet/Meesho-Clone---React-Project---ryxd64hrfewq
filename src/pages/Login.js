import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Button, FormControl,TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { THEME_COLOR } from '../App';
import styled from '@emotion/styled';
import { Form, Link, useNavigate } from 'react-router-dom';
import { signIn } from '../services/firebase/auth';

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: THEME_COLOR,
  ':hover':{
    backgroundColor:'green'
  }
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({email:'', password:''})
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const response = await signIn(user.email, user.password)
    console.log(response);
    if(response.isError){
      return;
    }else{
      navigate(-1)
    }
  }
  return (
    <React.Fragment>
      <NavBar />
      <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
      <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>LOGIN</Typography>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
          
          <TextField fullWidth label="Email" id='email' name='email' value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
          <TextField fullWidth label="Password" id='password' type={'password'} name='password' value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
          <LoginButton variant='contained' type='submit'>Login</LoginButton>
        
      </Form>
      <Typography variant='body1'>Create an Account <Link to={'/signup'}>Sign Up</Link></Typography>
      </Box>
    </React.Fragment>
  )
}
