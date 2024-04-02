import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "whitesmoke",
            dark: "#0066CC",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 600,
          height: "50vh",
          borderRadius: 1,
          bgcolor: "primary.main",
        }}
      />
    </ThemeProvider>
  );
}
