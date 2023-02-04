import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { Form, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext, THEME_COLOR } from '../App';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Address',
  'Payment',
  'Summary'
];

const Address = ({activeStep, setActiveStep, formData, setFormData}) => {
  const addressChangeHandler = (e) => {
    setFormData({...formData, address:e.target.value});
  }
  return (
    <Box padding={1} display="flex" flexDirection={'column'} rowGap="20px">
      <Typography variant='h4'>{steps[activeStep]}</Typography>
      <TextField placeholder='Enter Addresss' value={formData.address} onChange={addressChangeHandler} />
      <Button  variant='contained'  onClick={()=>setActiveStep(activeStep+1)} sx={{backgroundColor:THEME_COLOR}}>Deliver to this Address</Button>
    </Box>
  )
}

const Payment = ({activeStep, setActiveStep, formData, setFormData}) => {
  return (
    <Box padding={1} display="flex" flexDirection={'column'} rowGap="20px">
      <Typography variant='h4'>{steps[activeStep]}</Typography>
      <FormControl>
        <InputLabel id="paymentLabel">Select Payment</InputLabel>
        <Select
          labelId="paymentLabel"
          value={formData.payment}
          label="Select Payment"
          onChange={(e)=>setFormData({...formData, payment:e.target.value})}
        >
          <MenuItem value='Cash on Delivery'>Cash On Delivery</MenuItem>
        </Select>
      </FormControl>
      
      <Button variant='contained' onClick={()=>setActiveStep(activeStep+1)} sx={{backgroundColor:THEME_COLOR}}>Continue</Button>
    </Box>
  )
}

const Summary = ({activeStep, formData, product}) => {
  const navigate = useNavigate();
  const placeOrderHandle = () => {
      alert("Order Placed");
      navigate('/')
  }
  return (
    <Box padding={1} display="flex" flexDirection={'column'} rowGap="20px" alignItems={'center'}>
      <Typography variant='h4'>{steps[activeStep]}</Typography>
      <Typography variant='h5'>{product.title}</Typography>
      <img src={product.image} alt="" style={{objectFit:'fill', height:'500px', width:'500px'}}/>
      <Box sx={{margin:'20px'}}>
        <Typography variant='h6'>Category:</Typography>
        <Typography variant='p'>{product.category}</Typography>
      </Box>
      <Box sx={{margin:'20px'}}>
        <Typography variant='h6'>Address:</Typography>
        <Typography variant='p'>{formData.address}</Typography>
      </Box>
      <Box sx={{margin:'20px'}}>
        <Typography variant='h6'>Payment:</Typography>
        <Typography variant='p'>{formData.payment}</Typography>
      </Box>
      <Button variant='contained' sx={{backgroundColor:THEME_COLOR}} onClick={placeOrderHandle}>Place Order</Button>
    </Box>
  )
}

const Checkout = () => {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({address:'', payment:''});
    useEffect(()=>{
        if(!user){
            navigate('/login')
        }
        
        console.log(location)
    },[user])

    const changeStepHandler = (index) => {
        setActiveStep(index)
    }

  return (
    <Box padding={2} display="flex" flexDirection={'column'} rowGap={"50px"}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} onClick={() => changeStepHandler(index)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Form>
          {
            activeStep === 0 ? 
              <Address activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData}/> :
              activeStep === 1 ?
                <Payment activeStep={activeStep} setActiveStep={setActiveStep} formData={formData} setFormData={setFormData}/> :
                <Summary activeStep={activeStep} formData={formData} product={location.state}/>
          }
        </Form>
        
    </Box>
  )
}

export default Checkout