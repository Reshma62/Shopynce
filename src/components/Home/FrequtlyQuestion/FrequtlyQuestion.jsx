import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FrequtlyQuestion = () => {
  return (
    <Container>
      <SectionTitle title={"Frequently asked quesition"} />
      <Accordion expanded sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> What is Shopynce?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Shopynce is an advanced inventory management system crafted to
            streamline your business processes. It enables efficient stock
            tracking, order management, and overall business optimization.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can Shopynce benefit my business?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Shopynce provides a centralized solution for accurate inventory
            tracking, reducing errors and improving order fulfillment. It
            empowers businesses to make informed decisions, minimize stockouts,
            and maximize profits.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is Shopynce suitable for small businesses?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Absolutely! Shopynce is scalable and adaptable, making it perfect
            for small to large businesses. Whether you're a startup or an
            expanding enterprise, our system can grow with your business needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How user-friendly is Shopynce?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Shopynce is designed with a user-friendly interface. It comes with
            comprehensive documentation and customer support to ensure a smooth
            experience for all users.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Can I integrate Shopynce with my existing e-commerce platform?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Yes, Shopynce seamlessly integrates with various e-commerce
            platforms. This allows you to synchronize your inventory
            effortlessly and maintain consistency across all your sales
            channels.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is my data secure with Shopynce?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "#5F1E2E", color: "white" }}>
          <Typography>
            Security is our top priority. Shopynce employs robust encryption
            protocols and follows industry best practices to ensure the
            confidentiality and integrity of your data. Your business
            information is secure with us.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FrequtlyQuestion;
