import "./navbar.css";
import logo from "../../imgs/sae_logo_white.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../../slices/authSlice";
import { clearProfile } from "../../slices/profileSlice";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(clearAll());
    dispatch(clearProfile());
  };

  const profile_full_name = useSelector((state) => state.profile.full_name);
  return (
    <>
      <div className="navbar_header">
        <div className="navbar_top_half">
          <img
            src={logo}
            alt="SAE Logo"
            className="sae_logo"
            onClick={() => navigate("/")}
          />
          <h3 className="header_title">Faculty Web App</h3>
          <div className="user_container">
            {profile_full_name ? (
              <>
                <h3>{profile_full_name}</h3>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
        </div>
        <hr />
        <div className="navbar_bottom_half">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </>
  );
}
