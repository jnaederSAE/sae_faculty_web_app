import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import snackbarReducer from "../slices/snackbarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    snackbar: snackbarReducer,
  },
});
