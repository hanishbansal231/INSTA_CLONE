import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstace";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false,
    role: localStorage.getItem('role') ? JSON.parse(localStorage.getItem('role')) : "USER",
}


export const register = createAsyncThunk('', async (data) => {
    try {
        const res = axiosInstance.post('', data);

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});


export default authSlice.reducer;