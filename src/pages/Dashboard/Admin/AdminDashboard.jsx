import AdminShop from "./AdminShop/AdminShop";
import { Typography, Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box sx={{ px: 5 }}>
      <Typography variant="h5" color="initial" mt={2} mb={9}>
        Sale Summary
      </Typography>
      <AdminShop />
    </Box>
  );
};

export default AdminDashboard;
