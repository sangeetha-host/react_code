import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
    name: "counter",
    initialState:0,
    reducers: {
        increment: (state) => state += 1,
        decrement: (state) => state -= 1,
        incrementByAmount: (state, action) => state += action.payload
    },

})
export const { increment, decrement, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer