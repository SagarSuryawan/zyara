import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem('data') || { }
};

const authSlice = createSlice({
    name: "authSlicer",
    initialState,
    reducer:{}
})

export const {} = authSlice.actions;
export default authSlice.reducer;