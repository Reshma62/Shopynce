import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";

const AboutSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 10,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          flex: "1",
          padding: (theme) => theme.spacing(4),
          [(theme) => theme.breakpoints.up("lg")]: {
            padding: (theme) => theme.spacing(6),
          },
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Grid
            item
            sx={{
              width: "46%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 30,
                right: -60,
                zIndex: 100,
                py: 4,
                px: 3,
                backgroundColor: (theme) => theme.palette.background.paper,
                border: (theme) => `4px solid ${theme.palette.primary.main}`,
                borderRadius: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  width: "18rem",
                }}
              >
                Successfully Providing business solutions from 25 years
              </Typography>
            </Box>
            <Avatar
              src="https://i.postimg.cc/rF0MKfBV/pexels-andrea-piacquadio-3760263.jpg"
              alt="aboutimage"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: (theme) => theme.shape.borderRadius,
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "46%",
              [(theme) => theme.breakpoints.up("lg")]: {
                width: "50%",
                paddingLeft: (theme) => theme.spacing(6),
              },
            }}
          >
            <Box
              sx={{
                borderLeft: (theme) =>
                  `4px solid ${theme.palette.primary.main}`,
                paddingLeft: (theme) => theme.spacing(4),
                marginBottom: (theme) => theme.spacing(6),
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  textTransform: "uppercase",
                  color: "primary",
                }}
              >
                Who we are?
              </Typography>
              <Typography
                color={"primary"}
                variant="h1"
                sx={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  [(theme) => theme.breakpoints.up("md")]: {
                    fontSize: "5rem",
                  },
                }}
              >
                About Us
              </Typography>
            </Box>
            <Typography
              sx={{
                marginBottom: (theme) => theme.spacing(6),
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit
              amet. amet. labore et dolore magna aliqua. Ut enim ad minim veniam
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{
                color: (theme) => theme.palette.common.white,
                backgroundColor: (theme) => theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
