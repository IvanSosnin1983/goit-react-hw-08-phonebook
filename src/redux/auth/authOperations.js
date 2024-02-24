import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupRequest,
  loginRequest,
  logoutRequest,
  currentRequest,
} from '../../api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, thunkApi) => {
    try {
      const data = await signupRequest(body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkApi) => {
  try {
    const data = await loginRequest(body);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const data = await logoutRequest();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    try {
      const { auth } = thunkApi.getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const { auth } = thunkApi.getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
