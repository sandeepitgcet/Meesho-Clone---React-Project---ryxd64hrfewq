import { Grid, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import React, { useState } from 'react'

const Filter = ({allProducts , setAllProducts}) => {
    const [sortBy, setSortBy] = useState('');
    const sortByHandle = (e) => {
        setSortBy(e.target.value)
        const data = [...allProducts]
        switch(e.target.value){
            case '0': data.sort((a,b) => Number(a.price)>Number(b.price)?1:-1);break;
            case '1' : data.sort((a,b) => Number(a.price)<Number(b.price)?1:-1);break;
            case '2': data.sort((a,b) => Number(a.rating.rate)<Number(b.rating.rate)?1:-1);break;
        }
        setAllProducts(data);
    }
  return (
    <Box padding={2} width="100%" >
        <Typography variant='h4'>Filters</Typography>
        <Box sx={{display:'flex', flexDirection:'column', rowGap:'5px'}}>
            <Typography variant='h6'>Sort By:</Typography>
            <FormControl fullWidth>
                <InputLabel id="sortBy">Select Sort By</InputLabel>
                <Select
                labelId="sortBy"
                value={sortBy}
                label="Select Sort By"
                onChange={sortByHandle}
                >
                    <MenuItem value='0'>Price Low to High</MenuItem>
                    <MenuItem value='1'>Price High to Low</MenuItem>
                    <MenuItem value='2'>Rating</MenuItem>
                </Select>
            </FormControl>
            
        </Box>
    </Box>
  )
}

export default Filter