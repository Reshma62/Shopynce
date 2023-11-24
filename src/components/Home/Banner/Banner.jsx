import { Container, Typography, Grid, Button } from "@mui/material";
import BannerImg from "../../../assets/banner.jpg";
const Banner = () => {
  return (
    <Grid
      container
      alignItems={"center"}
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BannerImg})`,
        height: "60vh",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems={"center"}>
          <Grid item xs={8}>
            <Typography variant="h2" color="white">
              We Provide Great Value For Business
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body1" color="white">
              Success is most important part of life and it is determination of
              having achieved and accomplished aim with lots of failure
              enthusiam.
            </Typography>
            <Button
              sx={{ my: 3, fontWeight: 500 }}
              variant="contained"
              color="secondary"
            >
              Create shop
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Banner;
