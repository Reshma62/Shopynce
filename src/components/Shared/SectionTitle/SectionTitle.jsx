import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="primary"
        gutterBottom
        fontWeight={600}
      >
        {title}
      </Typography>
      <Typography variant="p" align="center" color="secondary" component="p">
        {subTitle}
      </Typography>
    </Container>
  );
};

export default SectionTitle;
