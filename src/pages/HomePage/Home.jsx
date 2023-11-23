import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

const Home = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color={"sec"}>
            My Material-UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField label="Username" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Container>
  );
};

export default Home;
