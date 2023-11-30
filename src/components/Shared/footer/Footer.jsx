import { Grid, Container, Typography, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },

  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Avatar src={Logo} sx={{ width: 200, height: "auto" }} />
            <Typography variant="subtitle2" color="initial">
              Start your inventory management journey with Shopynce.Explore the
              powerful features that make Shopynce a must-have for
              businesses.Find the perfect plan for your business needs.
            </Typography>
          </Grid>
          <Grid item lg={8}>
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link to="#" variant="subtitle1" color="text.secondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
