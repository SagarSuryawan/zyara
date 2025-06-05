import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice";

const store = configureStore({
    reducer:{
        auth: authSliceReducer
    },
    devTools:true
})

export default store;
// This code sets up a Redux store using Redux Toolkit's configureStore function.
// The store is configured with an empty reducer object and enables Redux DevTools for debugging.