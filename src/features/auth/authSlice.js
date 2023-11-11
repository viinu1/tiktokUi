import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as httpRequest from '~/api/httpRequest';
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;
const initialState = {
    loading: false,
    userInfo: '', // for user object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
};

export const LoginUser = createAsyncThunk('login', async (data, { rejectWithValue }) => {
    try {
        const result = await httpRequest.post('auth/login', data);
        return result;
    } catch (error) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.userToken = localStorage.getItem('userToken');
        },
        addUser: (state, action) => {
            state.userInfo = localStorage.getItem('userInfo');
        },
        logout: (state, action) => {
            state.userToken = null;
            localStorage.clear();
        },
    },
    extraReducers: {
        // Login user
        [LoginUser.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [LoginUser.fulfilled]: (state, { payload: { data, meta, message } }) => {
            state.loading = false;
            state.success = true; // registration successful
            state.userInfo = data;
            state.userToken = meta.token;

            if (message) {
                state.error = message;
            } else {
                localStorage.setItem('userToken', meta.token);
                localStorage.setItem('userInfo', JSON.stringify(data));
            }
        },
        [LoginUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
