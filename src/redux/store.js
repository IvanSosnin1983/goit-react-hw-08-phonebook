import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
import authReducer from './auth/authSlice';

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactReducer,
// });

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactReducer,
  },
});
