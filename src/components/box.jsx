import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";

export default function BoxSx({ children }) {
  return (
    <Box
      sx={{
        width: 600,
        height: "50vh",
        borderRadius: 1,
        bgcolor: "whitesmoke",
        overflow: "scroll",
      }}
    >
      {children}
    </Box>
  );
}
