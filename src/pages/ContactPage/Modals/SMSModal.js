import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { snackBarMessage } from "../../../slices/snackbarSlice";
import { useDispatch } from "react-redux";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  padding: 2,
};

export default function SMSModal({ student, handleModalClose }) {
  const dispatch = useDispatch();

  const sendText = () => {
    dispatch(
      snackBarMessage(
        `Sent text to ${student.first_name} ${student.last_name} - (${student.phone})`
      )
    );
  };

  return (
    <>
      <Box sx={style}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <IconButton
              color="error"
              onClick={handleModalClose}
              sx={{ float: "right", padding: 0 }}
            >
              <CancelIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h6">{`${student.first_name} ${student.last_name}`}</Typography>
          </Box>
        </Box>
        <TextField
          label="To"
          sx={{ width: "75%", marginTop: 1 }}
          defaultValue={student.phone}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          multiline
          sx={{ width: "75%", marginTop: 1 }}
          rows={5}
          label="Message"
        />
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={() => {
            sendText();
            handleModalClose();
          }}
        >
          Send SMS
        </Button>
      </Box>
    </>
  );
}
