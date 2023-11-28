import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Container from "@mui/material/Container";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const PaymentPrice = () => {
  return (
    <>
      <Container maxWidth="md">
        Hello I am Payment
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Container>
    </>
  );
};

export default PaymentPrice;
