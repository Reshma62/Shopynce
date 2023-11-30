import { Typography, Link } from "@mui/material";
const Copyright = ({ copyright }) => {
  return (
    <Typography
      py={1}
      bgcolor={"#5F1E2E"}
      variant="body2"
      color="white"
      align="center"
      {...copyright}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://shopynce.web.app">
        Shopynce
      </Link>{" "}
      {new Date().getFullYear()}
      {"."} All rights reserved.
    </Typography>
  );
};

export default Copyright;
