import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice'
import userProfile from '../features/userProfile';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    userProfile: userProfile

  },
});
