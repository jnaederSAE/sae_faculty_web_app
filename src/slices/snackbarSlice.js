import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    isSnackBarOpen: false,
    snackBarMessage: "",
    snackBarSeverity: "success",
  },
  reducers: {
    isSnackBarOpen: (state, action) => {
      state.isSnackBarOpen = action.payload;
    },
    snackBarMessage: (state, action) => {
      state.isSnackBarOpen = true;
      state.snackBarMessage = action.payload;
    },
    snackBarSeverity: (state, action) => {
      state.snackBarSeverity = action.payload;
    },
    closeSnackBar: (state) => {
      state.isSnackBarOpen = false;
    },
  },
});

export const {
  isSnackBarOpen,
  snackBarMessage,
  snackBarSeverity,
  closeSnackBar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
