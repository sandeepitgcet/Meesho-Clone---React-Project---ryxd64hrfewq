import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button,TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { AuthContext, THEME_COLOR } from '../App';
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
  const [isLoading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContext)
  
  console.log("Login Component");
  
 useEffect(()=>{
  if(user.uid){
    navigate('/')
  }
 },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value)
    const response = await signIn(emailRef.current.value, passwordRef.current.value)
    console.log(response);
    if(response.isError){
      return;
    }else{
      setUser(response)
      navigate('/')
    }
  }
  return (
      <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
        <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>LOGIN</Typography>
        <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
            
            <TextField fullWidth label="Email" id='email' name='email' inputRef={emailRef} />
            <TextField fullWidth label="Password" id='password' type={'password'} name='password' inputRef={passwordRef} />
            <LoginButton variant='contained' type='submit'>Login</LoginButton>
          
        </Form>
        <Typography variant='body1'>Create an Account <Link to={'/signup'}>Sign Up</Link></Typography>
      </Box>
  )
}
