import React from 'react'
import NavBar from '../components/NavBar';
import AllProduct from '../components/AllProduct';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import Filter from '../components/Filter';

export default function Home() {
    
    
    return (
        <React.Fragment>
            <NavBar />
            <Grid container>
                <Filter  />
                <AllProduct />
            </Grid>
            <Footer />
        </React.Fragment>
    )
}
