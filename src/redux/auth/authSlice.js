import { createSlice } from '@reduxjs/toolkit';
import { login, signup, logout, current } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = true;
        state.error = null;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(current.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.isLoading = false;
        state.token = '';
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = initialState.user;
        state.token = '';
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
