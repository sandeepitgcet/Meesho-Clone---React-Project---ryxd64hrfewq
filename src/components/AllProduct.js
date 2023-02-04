import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchProduct from '../hooks/useFetchProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, setProducts } from './../services/redux/productSlice'

const AllProduct = ({allProducts, isLoading}) => {

    const navigate = useNavigate();
    
    const openProductHandler = (product) => {
        console.log(product);
        // setSearchParams({id:product.id})
        navigate({
            pathname:"/product/"+product.id,
        });
    }
  return (
    <Grid container padding={2} >
        {
            allProducts.map((product,index) => (
                <Grid item xs={12} sm={6}  md={4} lg={3} onClick={()=>openProductHandler(product)} key={index} flexDirection='column' container padding='5px 5px 5px 5px'>
                    <Box sx={{border:'1px solid gray', borderRadius:'10px',padding:'10px', cursor:'pointer'}}>
                        <Grid item sx={{display:'grid', placeItems:'center'}}>
                            <img src={product.image} width="150px" height="200" />
                        </Grid>
                        <Grid item>{product.category}</Grid>
                        <Grid item>₹ {product.price}</Grid>
                        <Grid item>{product.rating.rate} Rating</Grid>
                        <Grid item>{product.rating.count} Reviews</Grid>
                    </Box>
                </Grid>
            ))
        }
    {isLoading && <div className='loader'></div>}
    </Grid>
  )
}

export default AllProduct