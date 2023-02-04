import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom';

const AllProduct = () => {
    const [allProducts , setAllProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        setLoading(true)
        const fetchData = async () => {
            const responseData = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
                .then(response => response.json()).finally(()=>{
                    setLoading(false);
                })
            setAllProducts(responseData)

        }
        fetchData();
    },[])

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