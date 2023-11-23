import { createTheme, ThemeProvider } from "@mui/material/styles";
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#5F1E2E",
    },
    secondary: {
      main: "#169A8D",
    },
  },
});
const ThemeProviders = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
