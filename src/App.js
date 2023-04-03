import "./App.css";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AttendancePage from "./pages/AttendancePage";
import NavBar from "./components/Navbar/NavBar";
import SnackbarMessage from "./components/SnackbarMessage";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#307fe2",
    },
    secondary: {
      main: "#292929",
    },
  },
});

function App() {
  const isLoggedIn = useSelector((state) => state.auth.accessToken !== null);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar isLoggedIn={isLoggedIn} />
        <SnackbarMessage />
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
