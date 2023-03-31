import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: null,
    full_name: null,
    first_name: null,
    last_name: null,
  },
  reducers: {
    setProfile: (state, action) => {
      state.email = action.payload.email;
      state.full_name = action.payload.name;
      state.first_name = action.payload.given_name;
      state.last_name = action.payload.family_name;
    },
    clearProfile: (state) => {
      state.email = null;
      state.full_name = null;
      state.first_name = null;
      state.last_name = null;
    },
  },
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;
