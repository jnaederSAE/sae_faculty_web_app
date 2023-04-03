import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage({ isLoggedIn }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Typography variant="h3">The Home Page</Typography>
      {!isLoggedIn ? (
        <div>
          <Typography>Please Log in</Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>{" "}
        </div>
      ) : (
        ""
      )}
    </Box>
  );
}
