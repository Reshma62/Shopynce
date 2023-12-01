import { Stack, Typography, Button } from "@mui/material";

import { useState } from "react";
import AddProductModal from "./AddProductModal";
import Loading from "../../../../components/Shared/Loading/Loading";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
const Title = () => {
  const [open, setOpen] = useState(false);
  const { data: products, isLoading } = useGetAllProduct();
  if (isLoading) {
    return <Loading />;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      mt={5}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderTop={"2px solid #5F1E2E"}
      borderBottom={"2px solid #5F1E2E"}
    >
      <Typography variant="h6" color="primary" ml={2} fontWeight={600}>
        Total {products?.data?.length} Product added
      </Typography>
      <Button
        onClick={handleClickOpen}
        color="primary"
        variant="contained"
        sx={{ py: 2, textTransform: "capitalize", fontWeight: "bold" }}
      >
        Add a Product
      </Button>
      <AddProductModal
        setOpen={setOpen}
        handleClose={handleClose}
        open={open}
      />
    </Stack>
  );
};

export default Title;
