import React, { useState } from 'react';
import { Button,TextField, Typography } from '@mui/material';
import { Box, Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { THEME_COLOR } from '../App';
import styled from '@emotion/styled';
import { Form, Link, useNavigate, useRouteError } from 'react-router-dom';
import { addUser, auth, signUp } from '../services/firebase/auth';
import { useSelector } from 'react-redux';

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: THEME_COLOR,
  ':hover':{
    backgroundColor:'green'
  }
}));


const SignUp = () => {
  
    const [userInput,setUserInput] = useState({});
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const user = useSelector(state=>state.user.userCredentials)
    
    const [open, setOpen] = React.useState(false);
    const [STATUS, setSTATUS] = useState("error");
  
    const handleClick = (isError) => {
      setOpen(true);
      setSTATUS(isError?"error":"success")
      
    };

  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);
        const response = await signUp(userInput).then(()=>{
          setLoading(false);
        })
        console.log(response)
        if(!response?.user){
          navigate('/')
        }else{
          alert("ERROR");
        }
    }
    
  return (
    <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
      <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>SIGN UP</Typography>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
          <TextField fullWidth label="First Name" type={'text'} onChange={(e)=>setUserInput({...userInput, fname:e.target.value})} />
          <TextField fullWidth label="Last Name" type={'text'} onChange={(e)=>setUserInput({...userInput, lname:e.target.value})} />
          <TextField fullWidth label="Email" type={'email'} onChange={(e)=>setUserInput({...userInput, email:e.target.value})} />
          <TextField fullWidth label="Password" type={'password'}  onChange={(e)=>setUserInput({...userInput, password:e.target.value})}  />
          <SignUpButton variant='contained' type='submit'>SIGN UP</SignUpButton>
        
      </Form>
      <Typography variant='body1'>All ready have an Account <Link to={'/login'}>Sign In</Link></Typography>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={STATUS} sx={{ width: '100%' }}>
          Login {STATUS=="success"?"success":"failed"}
        </Alert>
      </Snackbar>
      { isLoading && <div className='loader'></div>}
    </Box>
  )
}

export default SignUp