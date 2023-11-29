import { Typography, Box, Grid } from "@mui/material";
import SalesChart from "../../../components/Dashboard/Manager/SalesChart";
import useGetAllProduct from "../../../Hooks/useGetAllProduct";
import Loading from "../../../components/Shared/Loading/Loading";
import SalesHistory from "../../../components/Dashboard/Manager/SalesHistory";

const ManagerShop = () => {
  const { data: product, isLoading } = useGetAllProduct();

  if (isLoading) {
    return <Loading />;
  }
  const totalSale = product?.data.reduce((sum, saleCount) => {
    return sum + (saleCount.sale_count || 0);
  }, 0);
  const totalInvestment = product?.data.reduce((sum, invest) => {
    return sum + (parseFloat(invest.production_cost) || 0);
  }, 0);
  // Calculate profit
  const totalProfitAmount = product?.data.reduce((total, p) => {
    const saleCount = p.sale_count || 0;
    const profitAmount = parseFloat(p.profitAmount) || 0;

    return total + saleCount * profitAmount;
  }, 0);
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} xl={5}>
          <SalesChart productData={product?.data} />
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Sale Count:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                {totalSale} pices
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Total Invest:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                $ {totalInvestment}
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Total Profit:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                $ {totalProfitAmount}
              </Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <SalesHistory />
    </>
  );
};

export default ManagerShop;
