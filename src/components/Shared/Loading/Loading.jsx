import { RingLoader } from "react-spinners";
import { Box, Container, Typography } from "@mui/material";
const Loading = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="flex justify-center items-center h-screen w-full flex-col">
        {" "}
        <Typography
          variant="h4"
          color="primary"
          fontWeight={700}
          textAlign={"center"}
        >
          Loading...
        </Typography>
        <RingLoader color="#36d7b7" />
      </Box>
    </Container>
  );
};

export default Loading;
