import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    idToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
    clearAll: (state) => {
      state.idToken = null;
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, setIdToken, clearAll } = authSlice.actions;

export default authSlice.reducer;
