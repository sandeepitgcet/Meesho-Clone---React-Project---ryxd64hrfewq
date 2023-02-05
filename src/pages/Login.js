import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button,TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { AuthContext, THEME_COLOR } from '../App';
import styled from '@emotion/styled';
import { Form, Link, Navigate, useNavigate } from 'react-router-dom';
import { signIn } from '../services/firebase/auth';
import { setUserCredentials, setUserDetail } from '../services/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

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
  //const {user, setUser} = useContext(AuthContext)
  const user = useSelector(state => state.user.userCredentials);
  const dispatch = useDispatch();
  
  console.log("Login Component");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(emailRef.current.value, passwordRef.current.value)
    const response = await signIn(emailRef.current.value, passwordRef.current.value).then((res)=>{
      setLoading(false);
      dispatch(setUserCredentials(JSON.stringify(res.user)))
      return res;
    }).catch((error) => {
      console.log("Error while loggin in");
      console.log(error);
    })
    
    if(!response.user){
      alert("Wrong credentials");
      return;
    }else{
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
        {isLoading && <div className='loader'></div>}
      </Box>
  )
}
