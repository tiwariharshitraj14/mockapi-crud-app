import { configureStore } from "@reduxjs/toolkit";
import userDetails from '../features/userDetailSlice'
const store = configureStore({
  reducer: {
    user: userDetails,
  },
});

export default store;
