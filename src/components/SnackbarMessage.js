import { Alert, Snackbar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeSnackBar } from "../slices/snackbarSlice";

export default function SnackBarMessage() {
  const dispatch = useDispatch();
  const snackbarIsOpen = useSelector((state) => state.snackbar.isSnackBarOpen);
  const snackbarMessage = useSelector(
    (state) => state.snackbar.snackBarMessage
  );
  const snackbarSeverity = useSelector(
    (state) => state.snackbar.snackBarSeverity
  );
  return (
    <>
      <Snackbar
        open={snackbarIsOpen}
        autoHideDuration={5000}
        onClose={() => dispatch(closeSnackBar())}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
