import React, { useState } from 'react';
import NavBar from './NavBar';
import { Button, FormControl,TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { THEME_COLOR } from './App';
import styled from '@emotion/styled';
import { Form, Link } from 'react-router-dom';

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: THEME_COLOR,
  ':hover':{
    backgroundColor:'green'
  }
}));

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({fname:'',lname:'', email:'', password:''})
    
    const handleSubmit = () => {
        console.log(user);
    }
  return (
    <React.Fragment>
    <NavBar />
      <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
      <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>LOGIN</Typography>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
          <TextField fullWidth label="First Name" value={user.fname} onChange={(e)=>setUser({...user, fname:e.target.value})}/>
          <TextField fullWidth label="Last Name" value={user.lname} onChange={(e)=>setUser({...user, lname:e.target.value})}/>
          <TextField fullWidth label="Email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/>
          <TextField fullWidth label="Password" type={'password'} value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
          <LoginButton variant='contained' type='submit'>Login</LoginButton>
        
      </Form>
      <Typography variant='body1'>All ready have an Account <Link to={'/login'}>Sign In</Link></Typography>
      </Box>
    </React.Fragment>
  )
}

export default SignUp