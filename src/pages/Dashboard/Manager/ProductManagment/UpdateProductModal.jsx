import {
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  Button,
  DialogTitle,
} from "@mui/material";
import UpdateModalForm from "./UpdateModalForm";
import useSingleProduct from "../../../../Hooks/useSingleProduct";
import Loading from "../../../../components/Shared/Loading/Loading";

const UpdateProductModal = ({ handleClose, open, id }) => {
  /*  const { data: singleData, isLoading } = useSingleProduct(id);
  if (isLoading) {
    return <Loading />;
  } */
  const singleData = {};
  return (
    <Dialog open={open} onClose={handleClose} maxWidth={"lg"} fullWidth>
      <DialogTitle id="responsive-dialog-title">
        <Typography
          fontWeight={600}
          variant="h3"
          color="primary"
          textAlign={"center"}
        >
          Update Product
        </Typography>
      </DialogTitle>
      <DialogContent>
        <UpdateModalForm singleData={singleData} id={id} />
      </DialogContent>
      <DialogActions>
        <Button sx={{ bgcolor: "#fc8028" }} onClick={handleClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateProductModal;
