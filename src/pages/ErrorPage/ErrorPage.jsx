import { Container, Avatar, Box, Typography, Button } from "@mui/material";

const NotFoundSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "6xl",

            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "full",
              padding: (theme) => theme.spacing(8),
            }}
          >
            <Box
              sx={{
                display: {
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "block",
                },
              }}
            >
              <Avatar
                src="https://i.postimg.cc/qqVRfZbf/pexels-tim-gouw-52608.jpg"
                alt=""
                sx={{
                  objectFit: "cover",
                  width: "full",
                  height: "h-34",
                  lg: { height: "h-64" },
                }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                display: "inline-block",

                fontSize: { xs: "7xl", xl: "9xl", lg: "9xl" },
              }}
            >
              404
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: (theme) => theme.spacing(4),
                fontSize: { xs: "2xl", lg: "4xl" },
                fontWeight: "semibold",
              }}
            >
              Oops! Something went wrong!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: (theme) => theme.spacing(5),
                fontSize: "xs",
              }}
            >
              Sorry! We are unable to find the page that you are looking for...
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                href="/"
                variant="contained"
                sx={{
                  px: 4,
                  py: 3,
                  mb: { xs: 8, lg: 0 },
                  mr: { xs: 0, lg: 4 },
                  fontSize: "base",
                  fontWeight: "medium",
                  textTransform: "uppercase",
                }}
              >
                Back to Home
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFoundSection;
