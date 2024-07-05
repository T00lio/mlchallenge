import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Primary color
    },
    secondary: {
      main: "#6c757d", // Secondary color
    },
    error: {
      main: "#dc3545", // Error color
    },
    background: {
      default: "#f8f9fa", // Background color
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Custom border radius for buttons
          textTransform: "none", // Prevent uppercase transformation
          padding: "10px 20px", // Custom padding
        },
        containedPrimary: {
          backgroundColor: "#007bff",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Custom AppBar background color
          color: "#000000", // Custom AppBar text color
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "16px", // Custom margin for all typography
        },
      },
    },
  },
});

export default theme;
