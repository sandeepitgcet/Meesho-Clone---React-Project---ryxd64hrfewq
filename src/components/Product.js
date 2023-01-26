import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import NavBar from './NavBar';

export default function Product() {
    const [product,setProduct] = useState({});
    const location = useLocation();
    const params = useParams();
    useEffect(()=>{
        fetch('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/'+params.id).then(
            response => response.json()
        ).then((data) => {
            setProduct(data);
        })
    },[])
  return (
    <React.Fragment>
        <NavBar />
        <Grid container item lg={12} >
            <Grid item lg={6} sm={12}>
                <img src={product.image} />
            </Grid>
            <Grid item lg={6} sm={12}>
                <Grid container>
                    <h3>{product.title}</h3>
                </Grid>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}
