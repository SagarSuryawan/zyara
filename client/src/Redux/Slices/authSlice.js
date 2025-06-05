import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem('data') || { }
};

const authslice = createSlice({
    name: "authSlicer",
    initialState,
    reducer:{}
})

export const {} = authSlices.actions;
export default authslice.reducer;