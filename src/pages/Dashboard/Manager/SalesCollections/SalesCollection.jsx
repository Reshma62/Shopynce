import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography, Button } from "@mui/material";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import Loading from "../../../../components/Shared/Loading/Loading";
import imgUrl from "../../../../api/imgUrl";
import SearchProducts from "./SearchProducts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import NotAdded from "../../../../components/Shared/NotAdded/NotAdded";
import useAuthContext from "../../../../Hooks/useAuthContext";
const SalesCollection = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { data: products, isLoading, refetch } = useGetAllProduct();

  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, watch } = useForm();
  const [searched, setSearched] = useState([]);

  // useEffect to update 'searched' when 'products' changes
  useEffect(() => {
    if (products) {
      setSearched(products?.data);
    }
  }, [products]);

  useEffect(() => {
    const searchInput = watch("id");
    if (searchInput?.length === 0) {
      refetch();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("id"), watch]);

  const handleCheckOut = (product) => {
    const cartCollection = {
      email: user?.email,
      productId: product._id,
      quantity: 1,
    };
    axiosSecure
      .post(`/manager/add-to-cart`, cartCollection)
      .then((result) => {
        if (result.data.error) {
          toast("Already added to checkout page");
        } else {
          toast.success("Successfully added to checkout page");
        }
        navigate("/dashboard/checkout");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const onsubmit = (data) => {
    if (data.id) {
      const filteredData = searched?.filter((item) => item._id === data.id);
      setSearched(filteredData);
    } else {
      refetch();
    }
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {searched.length === 0 ? (
        <NotAdded />
      ) : (
        <Box sx={{ p: 5 }}>
          <SearchProducts search={handleSubmit(onsubmit)} register={register} />
          <Typography variant="h5" color="primary" mb={2}>
            Total Products {products?.data?.length}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> No</TableCell>
                  <TableCell align="left">Product ID</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="left">Selling Price</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">discount</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searched?.map((product, index) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{product._id}</TableCell>
                    <TableCell align="left">{product.name}</TableCell>
                    <TableCell align="left">
                      $ {product.selling_price}{" "}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          mx: "auto",
                          border: "2px solid gray",
                        }}
                        alt={product.name}
                        src={`${imgUrl}${product.product_image}`}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {product?.quantity == 0
                        ? "Out Of Stock"
                        : product?.quantity}
                    </TableCell>
                    <TableCell align="center">${product.discount}</TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleCheckOut(product)}
                        variant="contained"
                        color="primary"
                      >
                        CheckOut
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default SalesCollection;
