import React from "react";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";

const MyInvoice = ({ handleButtonClick }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isSmallScreen ? "flex-start" : "center",
        width: "90%",
        margin: "0 auto",
        pt: 2,
        gap: isSmallScreen ? 2 : 0,
      }}
    >
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "70%",
          mb: isSmallScreen ? 1 : 0,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          My Invoice
        </Typography>
      </Box>
      <Box
        sx={{
          width: isSmallScreen ? "100%" : "auto",
          display: "flex",
          justifyContent: isSmallScreen ? "flex-start" : "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009e74",
            color: "white",
            "&:hover": {
              backgroundColor: "#007a5c",
            },
            width: isSmallScreen ? "100%" : "auto",
          }}
          onClick={handleButtonClick}
        >
          New Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default MyInvoice;
