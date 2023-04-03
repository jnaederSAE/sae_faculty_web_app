import { CircularProgress, Box, Typography } from "@mui/material";

import queryString from "query-string";
import { nanoid } from "nanoid";
import env from "react-dotenv";

const authority = "https://saeus.onelogin.com/oidc/2";
const redirect_uri = "http://localhost:3000/auth";
const response_type = "id_token token";
const scope = "openid profile";

export default function LoginPage() {
  const buildAuthUrl = () => {
    const params = queryString.stringify({
      client_id: env.CLIENT_ID,
      redirect_uri,
      response_type,
      scope,
      state: nanoid(32),
      nonce: nanoid(32),
    });

    const authUrl = `${authority}/auth?${params}`;
    return authUrl;
  };

  window.location = buildAuthUrl();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Typography variant="h6" marginBottom={5}>
          Logging you in...
        </Typography>
        <CircularProgress size={"10vh"} />
      </Box>
    </>
  );
}
