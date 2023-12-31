import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { Typography, Button } from "@mui/material";
import useCheckOutQuery from "../../../../Hooks/useCheckOutQuery";
import Loading from "../../../../components/Shared/Loading/Loading";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import NotAdded from "../../../../components/Shared/NotAdded/NotAdded";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import useCartItems from "../../../../Hooks/cart/useCartItems";
import useAuthContext from "../../../../Hooks/useAuthContext";
import DynamicTitle from "../../../../components/Shared/DynamicTitle/DynamicTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
const CheckOut = () => {
  const { data: chekout, isLoading, refetch } = useCheckOutQuery();
  const { data: products, isLoading: productsLoading } = useGetAllProduct();

  const {
    data: cartItems,
    isLoading: cartLoading,
    refetch: cartProductRefetch,
  } = useCartItems();
  const { user } = useAuthContext();
  const { refetch: productRefetch } = useGetAllProduct();
  const axios = useAxiosPublic();
  const pdfRef = useRef();

  if (productsLoading) {
    return <Loading />;
  }

  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("invoice.pdf");
    });
  };
  const handleCheckOut = () => {
    downloadPDF();
    axios
      .post(`/manager/sold-products?email=${user?.email}`)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        console.log(result);
        cartProductRefetch();
        productRefetch();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <DynamicTitle title={"CheckOut"} />
      {products?.data?.length === 0 ? (
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"70vh"}
        >
          <Typography variant="h4" color="primary">
            No check Out Collection found
          </Typography>
        </Stack>
      ) : cartItems?.items?.length === 0 ? (
        <NotAdded />
      ) : (
        <Box sx={{ p: 5 }}>
          <Typography variant="h5" color="primary" mb={2}>
            Total Products {chekout?.length}
          </Typography>
          <TableContainer component={Paper} ref={pdfRef}>
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
                  <TableCell align="center">Sale Count</TableCell>
                  <TableCell align="center">Item Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems?.items?.map((product, index) => (
                  <TableRow
                    key={product._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{product.productId?._id}</TableCell>
                    <TableCell align="left">
                      {product.productId?.name}
                    </TableCell>
                    <TableCell align="left">
                      $ {product.productId?.selling_price}{" "}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          mx: "auto",
                          border: "2px solid gray",
                        }}
                        alt={product.productId?.name}
                        src={` ${product.productId?.product_image}`}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {product.productId?.quantity == 0
                        ? "Out Of Stock"
                        : product.productId?.quantity}
                    </TableCell>
                    <TableCell align="center">
                      ${product.productId?.discount}
                    </TableCell>
                    <TableCell align="center">
                      {product.productId?.sale_count}
                    </TableCell>
                    <TableCell align="center">{product?.quantity}</TableCell>
                    {/* TODO: implement the line dashboard  */}
                    {/*  <TableCell align="center">
                      {product
                        ? product.quantity * product.productId.profitAmount
                        : ""}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{ mt: 3 }}
            onClick={handleCheckOut}
            variant="contained"
            color="primary"
          >
            Get Paid
          </Button>
        </Box>
      )}
    </>
  );
};

export default CheckOut;
