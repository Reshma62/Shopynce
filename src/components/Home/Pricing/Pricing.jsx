import { Box, Grid, Container } from "@mui/material";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PricingCard from "./PricingCard";

const tiers = [
  {
    title: "Basic",
    price: "10",
    description: ["200 product added"],
    buttonText: "Buy now",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "20",
    description: ["450 product added"],
    buttonText: "Buy Now",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "50",
    description: ["1500 product added"],
    buttonText: "Buy Now",
    buttonVariant: "outlined",
  },
];

const Pricing = () => {
  return (
    <Box sx={{ bgcolor: "#fffcf2", pb: 10 }}>
      {/* Hero unit */}
      <SectionTitle
        title={"Pricing"}
        subTitle="Quickly build an effective pricing table for your potential customers
        with this layout. It's built with default MUI components with
        little customization."
      />
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <PricingCard tier={tier} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
