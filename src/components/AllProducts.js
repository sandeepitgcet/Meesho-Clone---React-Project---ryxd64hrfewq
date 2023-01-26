import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom';

export default function AllProducts() {
    const [allProducts , setAllProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchData = async () => {
            const responseData = await fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
                .then(response => response.json())
                .then(data => {
                    setAllProducts(data)
                })
        }
        fetchData();
    },[])

    const openProductHandler = (product) => {
        console.log(product);
        navigate("/product");
    }
    
    return (
        <React.Fragment>
            
            <Grid container>
                <Grid item xs={3}> 
                    Filter
                </Grid>
                <Grid item xs={9} sx={{padding:"10px",display:'grid', gridTemplateColumns: 'repeat(4, 1fr)', rowGap:'10px', columnGap:'10px'}}>
                    {
                        allProducts.map((product,index) => (
                            <Grid onClick={()=>openProductHandler(product)} key={index} container flexDirection={'column'} sx={{border:'1px solid gray', borderRadius:'10px',padding:'10px', cursor:'pointer'}}>
                                <Grid item sx={{display:'grid', placeItems:'center'}}>
                                    <img src={product.image} width="150px" height="200"/>
                                </Grid>
                                <Grid item>{product.category}</Grid>
                                <Grid item>₹ {product.price}</Grid>
                                <Grid item>{product.rating.rate} Rating</Grid>
                                <Grid item>{product.rating.count} Reviews</Grid>
                            </Grid>
                        ))
                    }

                </Grid>
            </Grid>

        </React.Fragment>
    )
}
