import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name:"login",
    initialState:false,
    reducers:{
        login:(state) => !state,
        logout:(state) => !state
    },
    
})