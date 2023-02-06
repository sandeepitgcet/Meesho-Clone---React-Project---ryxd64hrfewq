import { createSlice } from "@reduxjs/toolkit";

let initialStateData = {
    allProducts:[],
    filteredProducts:[],
    checkoutBag:0
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
        },
        addToBag : (state) => {
            state.checkoutBag = state.checkoutBag+1;
        }
    }
})

export const {setProducts, setFilteredProducts, addToBag} = productSlice.actions

export default productSlice.reducer