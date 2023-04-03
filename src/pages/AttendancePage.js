import underConstructionImage from "../imgs/under-construction.png";
import { Box, Typography } from "@mui/material";
import Image from "mui-image";

export default function AttendancePage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <Typography variant="h2">Under Construction...</Typography>
        <Image src={underConstructionImage} width={200} duration={0} />
      </Box>
    </>
  );
}
