import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useFetchProduct from '../hooks/useFetchProduct';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './../services/redux/productSlice'
import AllProduct from '../components/AllProduct';
import Filter from '../components/Filter';
import Footer from './../components/Footer'

const Home = () => {
    
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        setLoading(true)
        useFetchProduct().then((res)=>{
            dispatch(setProducts(JSON.parse(JSON.stringify(res.data))))
        }).catch((error)=>{
            console.log("error while fetching alll products "+ error);
        }).finally(()=>{
            setLoading(false);
        })

    },[])

    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm={3} md={3}>
                    <Filter />
                </Grid>
                <Grid item xs={12} sm={9} md={9} >
                    <AllProduct/>
                </Grid>
                
            </Grid>
            <Footer />
        </React.Fragment>
    )
}


export default Home