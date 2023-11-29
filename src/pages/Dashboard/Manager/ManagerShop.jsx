import { Typography, Box, Grid } from "@mui/material";
import SalesChart from "../../../components/Dashboard/Manager/SalesChart";
import Loading from "../../../components/Shared/Loading/Loading";
import SalesHistory from "../../../components/Dashboard/Manager/SalesHistory";
import useCalculateCost from "../../../Hooks/calculateCost/useCalculateCost";
import useSoldProducts from "../../../Hooks/soldProducts/useSoldProducts";

const ManagerShop = () => {
  const { data: calculateCost, isLoading } = useCalculateCost();
  const { data: soldProducts, isLoading: soldProductLoading } =
    useSoldProducts();

  if (isLoading || soldProductLoading) {
    return <Loading />;
  }
  const { totalProductionCost, totalProfit, totalSellingPrice } =
    calculateCost.totals || {};
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} xl={5}>
          <SalesChart productData={soldProducts} />
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Sale:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                $ {totalSellingPrice}
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Invest:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                $ {totalProductionCost}
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={2}>
          <Box sx={{ bgcolor: "#fff", p: 2, borderRadius: 2 }}>
            <Typography variant="h6" color="initial">
              Your Total Profit:
              <Typography
                variant="h5"
                sx={{
                  color: "#fc8028",
                  borderTop: "1px solid #5F1E2E",
                  pt: 1,
                  mt: 2,
                }}
              >
                $ {totalProfit}
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
