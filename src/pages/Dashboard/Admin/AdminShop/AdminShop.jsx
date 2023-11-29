import { Typography, Box, Grid } from "@mui/material";

import SalesChart from "../../../../components/Dashboard/Manager/SalesChart";
import useAllProducts from "../../../../Hooks/useAllProducts";
import Loading from "../../../../components/Shared/Loading/Loading";
import useAdminInfo from "../../../../Hooks/useAdminInfo";
import UsersInfo from "./UsersInfo";
import useAuthContext from "../../../../Hooks/useAuthContext";
import AdminCharts from "../../../../components/Dashboard/Admin/AdminCharts";

const AdminShop = () => {
  const { user } = useAuthContext();
  const { data: products, isLoading } = useAllProducts();
  const { data: adminInfo } = useAdminInfo(user);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Grid container spacing={5}>
        <AdminCharts productData={products} />
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Income:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                ${adminInfo?.income}
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Products:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                {products?.length} pices
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total sales:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                pices
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <UsersInfo />
    </>
  );
};

export default AdminShop;
