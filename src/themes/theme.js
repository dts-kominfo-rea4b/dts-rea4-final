import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;