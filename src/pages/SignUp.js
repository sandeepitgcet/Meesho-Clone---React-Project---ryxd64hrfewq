import React, { useContext, useState } from 'react';
import NavBar from '../components/NavBar';
import { Button, FormControl,TextField, Typography } from '@mui/material';
import { Box, Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { AuthContext, THEME_COLOR } from '../App';
import styled from '@emotion/styled';
import { Form, Link, useNavigate } from 'react-router-dom';
import { addUser, signUp } from '../services/firebase/auth';

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: THEME_COLOR,
  ':hover':{
    backgroundColor:'green'
  }
}));

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userInput, setUserInput] = useState({fname:'',lname:'', email:'', password:''})
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext)

    if(user.uid){
      navigate('/')
    }
    
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
        //console.log(user);
        const response = await signUp(userInput.email, userInput.password)
        console.log("SignUP DOne"+response.user.uid);

        const addUserResponse  = await addUser(response.user.uid, userInput);
        console.log("User Add to DB "+addUserResponse)
        if(response.isError){
          //handleClick(true);
          return;
        }else{
          // setTimeout(()=>{
          //   handleClick(false);
          // },3000)
          setUser(response)
          navigate('/')
          
        }
    }
    
  return (
    <React.Fragment>
    <NavBar />
      <Box padding={2} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
      <Typography variant='h4' color={THEME_COLOR} sx={{display:'grid', placeItems:'center'}}>SIGN UP</Typography>
      <Form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', rowGap:'10px' }}>
          <TextField fullWidth label="First Name" value={user.fname} onChange={(e)=>setUserInput({...user, fname:e.target.value})}/>
          <TextField fullWidth label="Last Name" value={user.lname} onChange={(e)=>setUserInput({...user, lname:e.target.value})}/>
          <TextField fullWidth label="Email" value={user.email} onChange={(e)=>setUserInput({...user, email:e.target.value})}/>
          <TextField fullWidth label="Password" type={'password'} value={user.password} onChange={(e)=>setUserInput({...user, password:e.target.value})}/>
          <SignUpButton variant='contained' type='submit'>SIGN UP</SignUpButton>
        
      </Form>
      <Typography variant='body1'>All ready have an Account <Link to={'/login'}>Sign In</Link></Typography>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={STATUS} sx={{ width: '100%' }}>
          Login {STATUS=="success"?"success":"failed"}
        </Alert>
      </Snackbar>
      </Box>
    </React.Fragment>
  )
}

export default SignUp