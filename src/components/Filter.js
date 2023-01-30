import { Grid, Typography } from '@mui/material'
import React from 'react'

const Filter = () => {
  return (
    <Grid container sm={3} md={3} padding={2} >
        <Grid item >
            <Typography variant='h4'>Filter</Typography>
            <Grid item>
                <Typography variant='h6'>Sort By Price</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Category</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Sort By Price</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'>Sort By Rating</Typography>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Filter