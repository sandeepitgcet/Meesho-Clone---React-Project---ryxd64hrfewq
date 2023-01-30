import React from 'react'
import NavBar from './NavBar';
import AllProduct from './AllProduct';
import Footer from './Footer';
import { Grid } from '@mui/material';
import Filter from './Filter';

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
