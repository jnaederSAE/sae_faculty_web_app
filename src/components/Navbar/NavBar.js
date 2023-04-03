import logo from "../../imgs/sae_logo_white.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../../slices/authSlice";
import { clearProfile } from "../../slices/profileSlice";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import Image from "mui-image";

export default function NavBar({ isLoggedIn }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearAll());
    dispatch(clearProfile());
  };

  const profile_full_name = useSelector((state) => state.profile.full_name);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton size="large">
                <Image src={logo} width={100} duration={0} />
              </IconButton>
              <Typography variant="h5" component="h5">
                Faculty Web App
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <ButtonGroup>
                {isLoggedIn ? (
                  <>
                    <Button onClick={() => navigate("/")}>Home</Button>
                    <Button onClick={() => navigate("/contact")}>
                      Contact
                    </Button>
                    <Button onClick={() => navigate("/attendance")}>
                      Attendance
                    </Button>
                  </>
                ) : (
                  ""
                )}
              </ButtonGroup>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isLoggedIn ? (
                <>
                  <Typography variant="h6" component="h6" marginRight={2}>
                    {profile_full_name}
                  </Typography>
                  <Button onClick={logout} variant="contained">
                    Logout
                  </Button>
                </>
              ) : (
                <Button onClick={() => navigate("/login")} variant="contained">
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
