import Grid from "@mui/material/Grid";
import ShopCard from "../../../components/Dashboard/Manager/ShopCard";

const ManagerShop = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={4}>
        <ShopCard />
      </Grid>
    </Grid>
  );
};

export default ManagerShop;
