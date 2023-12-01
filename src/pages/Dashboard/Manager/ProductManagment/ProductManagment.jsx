import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Delete, ModeEdit, TonalitySharp } from "@mui/icons-material";
import { Typography } from "@mui/material";
import UpdateProductModal from "./UpdateProductModal";
import { useState } from "react";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import Loading from "../../../../components/Shared/Loading/Loading";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
export default function ProductManage() {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState({});
  const { data: products, isLoading, refetch } = useGetAllProduct();
  const axios = useAxiosPublic();
  if (isLoading) {
    return <Loading />;
  }

  const handleClickOpen = (id) => {
    setID(id);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/manager/delete-product/${id}`)
          .then((result) => {
            console.log("result", result.data);
            if (result.data.success) {
              console.log("sucess");
              toast.success(result.data.success);
              refetch();
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
      }
    });
  };
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h5" color="primary" mb={2}>
        All Products list
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: 18 }}> No</TableCell>
              <TableCell sx={{ fontSize: 18 }} align="left">
                Product Name
              </TableCell>
              <TableCell sx={{ fontSize: 18 }} align="left">
                Product Image
              </TableCell>
              <TableCell sx={{ fontSize: 18 }} align="center">
                Product Quantity
              </TableCell>
              <TableCell sx={{ fontSize: 18 }} align="center">
                Sale Count
              </TableCell>
              <TableCell sx={{ fontSize: 18 }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.data?.map((product, index) => (
              <TableRow
                key={product?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{product?.name}</TableCell>
                <TableCell align="left">
                  <Avatar
                    sx={{ width: 56, height: 56, border: "2px solid" }}
                    alt="Cindy Baker"
                    src={` ${product?.product_image}`}
                  />
                </TableCell>
                <TableCell align="center">
                  {product?.quantity == 0 ? "Out Of Stock" : product?.quantity}
                </TableCell>
                <TableCell align="center">{product?.sale_count}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"} justifyContent={"flex-end"} gap={1}>
                    <Delete
                      onClick={() => handleDelete(product._id)}
                      sx={{ color: "red", fontSize: 30, cursor: "pointer" }}
                    />
                    <ModeEdit
                      onClick={() => handleClickOpen(product)}
                      sx={{ fontSize: 30, cursor: "pointer" }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateProductModal
        setOpen={setOpen}
        id={id}
        handleClose={handleClose}
        open={open}
      />
    </Box>
  );
}
