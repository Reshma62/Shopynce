import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import Loading from "../../Shared/Loading/Loading";
import moment from "moment";
import { useState } from "react";
import useSoldProducts from "../../../Hooks/soldProducts/useSoldProducts";

const SalesHistory = () => {
  const [count, setCount] = useState(8);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);
  const { data: soldProducts, isLoading: soldProductLoading } =
    useSoldProducts();

  const pages = [];

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (soldProductLoading) {
    return <Loading />;
  }
  // console.log("soldProducts===>", soldProducts);
  return (
    <Box>
      <Typography variant="h4">Sale Summary</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Sale Quantity</TableCell>
              <TableCell> Profit</TableCell>
              <TableCell>Selling Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {soldProducts?.map((product, index) => (
              <TableRow key={product._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product?.productId?.name}</TableCell>
                <TableCell>{product?.quantity}</TableCell>

                <TableCell>
                  $ {product.quantity * product?.productId?.profitAmount}
                </TableCell>
                <TableCell>
                  {moment(product.createdAt).format("MMMM Do, YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-end mt-6">
        <div className="flex flex-wrap gap-3">
          <button onClick={handlePrev} className="btn btn-ghost ">
            prev
          </button>
          {pages.map((page, index) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`btn btn-primary ${
                page === currentPage
                  ? "bg-primaryColor"
                  : "bg-slate-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={handleNext} className="btn btn-ghost ">
            Next
          </button>
        </div>
      </div>
    </Box>
  );
};

export default SalesHistory;
