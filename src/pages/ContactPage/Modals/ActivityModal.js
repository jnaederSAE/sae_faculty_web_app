import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
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

export default function ActivityModal({ student, handleModalClose }) {
  const dispatch = useDispatch();
  const sendActivity = () => {
    dispatch(
      snackBarMessage(
        `Made Nexus Activity Note for ${student.first_name} ${student.last_name}`
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
        <FormControl fullWidth>
          <InputLabel id="type">Type</InputLabel>
          <Select id="type" label="The Type">
            <MenuItem value="1">I'm not sure</MenuItem>
            <MenuItem value="2">What types</MenuItem>
            <MenuItem value="3">Are available</MenuItem>
            <MenuItem value="4">To choose from</MenuItem>
          </Select>
          <TextField
            label="To"
            sx={{ marginTop: 2 }}
            defaultValue={`${student.first_name} ${student.last_name}`}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField label="Subject" sx={{ marginTop: 2 }} />
          <TextField multiline sx={{ marginTop: 1 }} rows={5} label="Body" />
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={() => {
              sendActivity();
              handleModalClose();
            }}
          >
            Make Activity
          </Button>
        </FormControl>
      </Box>
    </>
  );
}
