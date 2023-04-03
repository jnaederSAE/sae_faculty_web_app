import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ContactPage({ courses, setCurrentCourse }) {
  const allCourses = [...courses];

  return (
    <>
      <Box>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography>Course Select</Typography>
            <Select sx={{ color: "white", margin: 2, width: "25%" }}>
              {allCourses.map((course, i) => (
                <MenuItem key={i} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
            <Typography>Is Absent</Typography>
            <Switch />
          </Toolbar>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ color: "white" }} />
          </LocalizationProvider>
        </AppBar>
      </Box>
    </>
  );
}
