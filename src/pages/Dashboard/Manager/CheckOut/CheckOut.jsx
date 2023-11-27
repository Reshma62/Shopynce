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
import imgUrl from "../../../../api/imgUrl";
import useCheckOutQuery from "../../../../Hooks/useCheckOutQuery";
import Loading from "../../../../components/Shared/Loading/Loading";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import NotAdded from "../../../../components/Shared/NotAdded/NotAdded";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
const CheckOut = () => {
  const { data: chekout, isLoading, refetch } = useCheckOutQuery();
  const { refetch: productRefetch } = useGetAllProduct();
  const axiosSecure = useAxiosSecure();
  const pdfRef = useRef();
  if (isLoading) {
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

    axiosSecure
      .post("/manager/invoice")
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        refetch();
        productRefetch();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {chekout.length === 0 ? (
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
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chekout?.map((product, index) => (
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
                        src={`${imgUrl}${product.productId?.product_image}`}
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
                    <TableCell align="center"></TableCell>
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
      )}{" "}
    </>
  );
};

export default CheckOut;
