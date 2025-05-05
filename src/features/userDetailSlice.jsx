import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export default userDetails.reducer;