import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const PricingCard = ({ tier }) => {
  const [subsPlan, setSubsPlan] = useState({});
  const navigate = useNavigate();
  const handleInfoPayment = (plan) => {
    console.log("navigate");
    navigate("/dashboard/payment", { state: plan, replace: true });
  };
  return (
    <Card>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
        titleTypographyProps={{ align: "center" }}
        action={tier.title === "Pro" ? <Star /> : null}
        subheaderTypographyProps={{
          align: "center",
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
        <Button
          onClick={() => handleInfoPayment(tier)}
          fullWidth
          variant={tier.buttonVariant}
        >
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
