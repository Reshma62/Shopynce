import useGetAllProduct from "../../../Hooks/useGetAllProduct";
import DynamicTitle from "../../../components/Shared/DynamicTitle/DynamicTitle";
import Loading from "../../../components/Shared/Loading/Loading";
import ManagerShop from "./ManagerShop";
import { Box, Typography, Stack, Button } from "@mui/material";
const ManagerDashboard = () => {
  const { data: products, isLoading } = useGetAllProduct();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Box sx={{ px: 8, mt: 10 }}>
      <DynamicTitle title={"Manager Dashboard"} />
      {products?.data?.length === 0 ? (
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"70vh"}
        >
          <Typography variant="h3" color="primary">
            Still not Added Any Product
          </Typography>
        </Stack>
      ) : (
        <>
          <ManagerShop />
        </>
      )}
    </Box>
  );
};

export default ManagerDashboard;
