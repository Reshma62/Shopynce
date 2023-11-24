import { Typography, Link } from "@mui/material";
const Copyright = ({ copyright }) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...copyright}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
