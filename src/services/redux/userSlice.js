import { createSlice } from "@reduxjs/toolkit";

let initialStateData = {
    userDetails:{fname:'',lname:'', email:'', password:''},
    userCredentials: {}
}

export const userSlice = createSlice({
    name:'user',
    initialState:initialStateData,
    reducers:{
        setUserDetail: (state,action) => {
            state.userDetails = action.payload;
        },
        setUserCredentials : (state,action) => {
            state.userCredentials = action.payload;
        }
    }
})

export const { setUserDetail, setUserCredentials } = userSlice.actions

export default userSlice.reducer