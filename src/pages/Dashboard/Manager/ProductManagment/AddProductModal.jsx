import ModalFrom from "./ModalFrom";
import {
  Typography,
  DialogActions,
  DialogContent,
  Dialog,
  Button,
  DialogTitle,
} from "@mui/material";
const AddProductModal = ({ handleClose, open, setOpen }) => {
  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth={"lg"} fullWidth>
        <DialogTitle id="responsive-dialog-title">
          <Typography
            fontWeight={600}
            variant="h3"
            color="primary"
            textAlign={"center"}
          >
            Add Product
          </Typography>
        </DialogTitle>
        <DialogContent>
          <ModalFrom setOpen={setOpen} />
        </DialogContent>
        <DialogActions>
          <Button sx={{ bgcolor: "#fc8028" }} onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddProductModal;
