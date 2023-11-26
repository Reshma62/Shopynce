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
import { Delete, ModeEdit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import UpdateProductModal from "./UpdateProductModal";
import { useState } from "react";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import Loading from "../../../../components/Shared/Loading/Loading";
import imgUrl from "../../../../api/imgUrl";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

export default function ProductManage() {
  const [open, setOpen] = useState(false);
  const [id, setID] = useState(false);
  const { data: products, isLoading } = useGetAllProduct();

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
            {products?.data?.map((product) => (
              <TableRow
                key={product?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {0}
                </TableCell>
                <TableCell align="left">{product?.name}</TableCell>
                <TableCell align="left">
                  <Avatar
                    sx={{ width: 56, height: 56, border: "2px solid" }}
                    alt="Cindy Baker"
                    src={`${imgUrl}${product?.product_image}`}
                  />
                </TableCell>
                <TableCell align="center">{product?.quantity}</TableCell>
                <TableCell align="center">{product?.sale_count}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"} justifyContent={"flex-end"} gap={1}>
                    <Delete sx={{ color: "red", fontSize: 30 }} />
                    <ModeEdit
                      onClick={() => handleClickOpen(product?._id)}
                      sx={{ fontSize: 30, cursor: "pointer" }}
                    />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UpdateProductModal id={id} handleClose={handleClose} open={open} />
    </Box>
  );
}
