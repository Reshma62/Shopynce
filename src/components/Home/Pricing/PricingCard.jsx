import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";

const PricingCard = ({ tier }) => {
  return (
    <Card>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
        titleTypographyProps={{
          align: "center",
          color: "primary",
          fontWeight: "bold",
        }}
        action={tier.title === "Pro" ? <StarIcon /> : null}
        subheaderTypographyProps={{
          align: "center",
          color: "secondary",
        }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h3" color="text.primary">
            ${tier.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            /mo
          </Typography>
        </Box>
        <ul>
          {tier.description.map((line) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant={tier.buttonVariant}>
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
