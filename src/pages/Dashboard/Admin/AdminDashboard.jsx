import AdminShop from "./AdminShop/AdminShop";
import { Typography, Box } from "@mui/material";

const AdminDashboard = () => {
  return (
    <Box sx={{ px: 5 }}>
      <Typography variant="h5" color="initial">
        Sale Summary
      </Typography>
      <AdminShop />
    </Box>
  );
};

export default AdminDashboard;
