import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstace";
import toast from 'react-hot-toast';

const initialState = {
    userDetails: null,
    userData: [],
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false,
    role: localStorage.getItem('role') ? JSON.parse(localStorage.getItem('role')) : "USER",
}


export const sendOtp = createAsyncThunk('/user/send-otp', async (data) => {
    try {
        const res = axiosInstance.post('user/send-otp', data);

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'otp send failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

export const registerAccount = createAsyncThunk('/user/register', async (data) => {
    try {
        const res = axiosInstance.post('user/register', data);

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Register failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

export const loginAccount = createAsyncThunk('/user/login', async (data) => {
    try {
        const res = axiosInstance.post('user/login', data);

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Register failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

export const singleUser = createAsyncThunk('/user/single-user', async () => {
    try {
        const res = axiosInstance.get('user/single-user');

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Register failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

export const forgotPassword = createAsyncThunk('/user/forgot-password', async (data) => {
    try {
        const res = axiosInstance.post('user/forgot-password-token', { value: data });

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Forgot Password Failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

export const resetPassword = createAsyncThunk('/user/forgot-password', async (data) => {
    try {
        const res = axiosInstance.post('user/reset-password', data);

        toast.promise(res, {
            loading: 'Loading...',
            success: (data) => {
                return data?.data?.message
            },
            error: 'Forgot Password Failed'
        });

        return (await res)?.data;
    } catch (error) {
        console.log(error);
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action?.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAccount.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action?.payload?.data;
            state.role = action?.payload?.data?.role;
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('user', JSON.stringify(action?.payload?.data));
            localStorage.setItem('role', JSON.stringify(action?.payload?.data?.role));
        })
            .addCase(singleUser.fulfilled, (state, action) => {
                state.userData = action?.payload?.data
            })
    }
});

export const { setUserDetails } = authSlice.actions;
export default authSlice.reducer;