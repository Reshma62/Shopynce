import {
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  Button,
  DialogTitle,
} from "@mui/material";
import UpdateModalForm from "./UpdateModalForm";

const UpdateProductModal = ({ handleClose, open, id, setOpen }) => {
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
        <UpdateModalForm setOpen={setOpen} id={id} />
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
