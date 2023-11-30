import DynamicTitle from "../../../components/Shared/DynamicTitle/DynamicTitle";
import AdminShop from "./AdminShop/AdminShop";
import { Typography, Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box sx={{ px: 5 }}>
      <DynamicTitle title={"Admin Dashboard"} />
      <Typography variant="h5" color="initial" mt={2} mb={9}>
        Sale Summary
      </Typography>
      <AdminShop />
    </Box>
  );
};

export default AdminDashboard;
