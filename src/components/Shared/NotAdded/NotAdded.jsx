import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AddProductModal from "../../../pages/Dashboard/Manager/ProductManagment/AddProductModal";
import Loading from "../Loading/Loading";
import useGetAllProduct from "../../../Hooks/useGetAllProduct";
import { useState } from "react";
const NotAdded = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"70vh"}
    >
      <Typography variant="h4" color="initial" mb={2}>
        No Product Found
      </Typography>
      <Button onClick={handleClickOpen} variant="contained" color="primary">
        Add A Product
      </Button>
      <AddProductModal
        setOpen={setOpen}
        handleClose={handleClose}
        open={open}
      />
    </Stack>
  );
};

export default NotAdded;
