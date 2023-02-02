import React from 'react'
import AllProduct from '../components/AllProduct';
import Footer from '../components/Footer';
import { Grid } from '@mui/material';
import Filter from '../components/Filter';

export default function Home() {
    
    
    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm={3} md={3}>
                    <Filter  />
                </Grid>
                <Grid item xs={12} sm={9} md={9} >
                    <AllProduct />
                </Grid>
                
            </Grid>
            <Footer />
        </React.Fragment>
    )
}
