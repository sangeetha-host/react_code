import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const savedCounter = localStorage.getItem("counter");

export const store=configureStore({
   
    reducer:{
        counter:CounterSlice
    },
    preloadedState: {
        counter: savedCounter ? JSON.parse(savedCounter) : 0,
      },
      

})
store.subscribe(() => { const state = store.getState();
    localStorage.setItem("counter", JSON.stringify(state.counter));
  });