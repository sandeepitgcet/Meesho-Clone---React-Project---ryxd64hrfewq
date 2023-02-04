import { createSlice } from "@reduxjs/toolkit";

let initialStateData = {
    products:[],
}

export const productSlice = createSlice({
    name:'products',
    initialState:initialStateData,
    reducers:{
        setProducts: (state,action) => {
            state.products = action.payload;
        },
        getProduct : (state) => state.products,

    }
})

export const { getProduct, setProducts } = productSlice.actions

export default productSlice.reducer