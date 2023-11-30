import DynamicTitle from "../../../components/Shared/DynamicTitle/DynamicTitle";
import ManagerShop from "./ManagerShop";
import { Container, Box, Typography } from "@mui/material";
const ManagerDashboard = () => {
  return (
    <Box sx={{ px: 8 }}>
      <DynamicTitle title={"Manager Dashboard"} />
      <Box>
        <Typography variant="h5" color="primary" my={2}>
          Sales Summary
        </Typography>
      </Box>
      <ManagerShop />
    </Box>
  );
};

export default ManagerDashboard;
