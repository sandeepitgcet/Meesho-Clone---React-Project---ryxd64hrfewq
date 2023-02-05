import { createSlice } from "@reduxjs/toolkit";

let initialStateData = {
    allProducts:[],
    filteredProducts:[]

}

export const productSlice = createSlice({
    name:'products',
    initialState:initialStateData,
    reducers:{
        setProducts: (state,action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },
        setFilteredProducts : (state,action) => {
            state.filteredProducts = action.payload;
        }
    }
})

export const {setProducts, setFilteredProducts} = productSlice.actions

export default productSlice.reducer