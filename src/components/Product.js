import { Button, Typography, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { styled } from '@mui/material/styles';
import { Box, height } from '@mui/system';
import { THEME_COLOR } from './../App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const Image = styled('img')({
    width: '100%',
  });

export default function Product() {
    console.log("Product component");
    const [product,setProduct] = useState({});
    const location = useLocation();
    const params = useParams();
    useEffect(()=>{
        console.log(params);
        fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/'+params.id).then(
            response => response.json()
        ).then((data) => {
            console.log(data);
            setProduct(JSON.parse(JSON.stringify(data)));
            console.log(product);
        })
    },[])
    
  return (
    <React.Fragment>
        <NavBar />
        <Box sx={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(550px, 1fr))'}}>
            <Box sx={{ display: 'flex', justifyContent:'center', padding:'50px', height:'500px'}}>
                {/* <Card variant="outlined" sx={{ maxWidth: 345 }}><img src={product.image} height="500" style={{objectFit:"fill"}}/></Card> */}
                <Image sx={{objectFit:'fill'}} src={product.image} alt="" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'column', rowGap:'20px', margin:'20px'}}>
                <Typography variant='h5'>{product.title}</Typography>
                <Typography variant='h4'>{'₹'+product.price}</Typography>
                <Box sx={{ display:'flex', justifyContent:'space-evenly'}}>
                    <Button variant="outlined"><ShoppingCartIcon></ShoppingCartIcon> Add to Bag</Button>
                    <Button variant="contained" sx={{backgroundColor:`${THEME_COLOR}` , ":hover":{backgroundColor:`${THEME_COLOR}`, opacity:'.8'}}}>
                        <KeyboardDoubleArrowRightOutlinedIcon></KeyboardDoubleArrowRightOutlinedIcon>
                        Buy Now
                    </Button>
                </Box>
                <Box sx={{margin:'20px'}}>
                    <Typography variant='h6'>Category:</Typography>
                    <Typography variant='p'>{product.category}</Typography>
                </Box>
                <Box sx={{margin:'20px'}}>
                    <Typography variant='h6'>Description:</Typography>
                    <Typography variant='p'>{product.description}</Typography>
                </Box>
                <Box sx={{margin:'20px'}}>
                    <Typography variant='h6'>Rating:</Typography>
                    <Rating name="read-only" value={Number(product.rating?.rate)} readOnly />
                </Box>
                
            </Box>
        </Box>
    </React.Fragment>
  )
}
