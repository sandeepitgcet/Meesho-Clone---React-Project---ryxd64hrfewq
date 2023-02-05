import React from 'react'
import { Grid, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllProduct = () => {

    const navigate = useNavigate();
    const allProducts = useSelector((state) => state.products.filteredProducts);
    
    const openProductHandler = (product) => {
        //console.log(product);
        // setSearchParams({id:product.id})
        navigate({
            pathname:"/product/"+product.id,
        });
    }
    console.log("AllProduct component ")
  return (
    <Grid container padding={2} >
        {
            allProducts.length !== 0 ?
                allProducts.map((product,index) => (
                    <Grid item xs={12} sm={6}  md={4} lg={3} onClick={()=>openProductHandler(product)} key={index} flexDirection='column' container padding='5px 5px 5px 5px'>
                        <Box sx={{border:'1px solid gray', borderRadius:'10px',padding:'10px', cursor:'pointer'}}>
                            <Grid item sx={{display:'grid', placeItems:'center'}}>
                                <img src={product.image} width="150px" height="200" />
                            </Grid>
                            <Grid item>{product.title}</Grid>
                            <Grid item>₹ {product.price}</Grid>
                            <Grid item>{product.rating.rate} Rating</Grid>
                            <Grid item>{product.rating.count} Reviews</Grid>
                        </Box>
                    </Grid>
                )) :
                <div className='loader'></div>

        }
    </Grid>
  )
}

export default AllProduct