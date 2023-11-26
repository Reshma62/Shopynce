import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
const NotAdded = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"70vh"}
    >
      <Typography variant="h4" color="initial" mb={2}>
        No Product Found
      </Typography>
      <Button variant="contained" color="primary">
        Add A Product
      </Button>
    </Stack>
  );
};

export default NotAdded;
