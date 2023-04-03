import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import queryString from "query-string";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setProfile } from "../slices/profileSlice";
import { setAccessToken, setIdToken } from "../slices/authSlice";

export default function AuthPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().hash;

  useEffect(() => {
    const { access_token, id_token } = queryString.parse(location);
    const profile = jwtDecode(id_token);

    dispatch(setProfile(profile));
    dispatch(setAccessToken(access_token));
    dispatch(setIdToken(id_token));
    navigate("/contact");
  });
}
