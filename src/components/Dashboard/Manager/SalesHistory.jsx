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
import useSoldProducts from "../../../Hooks/useSoldProducts";
import moment from "moment";
import { useState } from "react";

const SalesHistory = () => {
  const [count, setCount] = useState(8);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(0);

  const { data: soldProduct, isLoading } = useSoldProducts(
    currentPage,
    itemsPerPage
  );

  console.log("soldProduct", soldProduct);
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
  if (isLoading) {
    return <Loading />;
  }
  const allPaidProducts = [].concat(
    ...soldProduct.map((obj) => obj.checkOutsProductId)
  );
  const totalPages = Math.ceil(allPaidProducts?.length / itemsPerPage);
  const pages = [...Array(totalPages).keys()];

  console.log(allPaidProducts);
  return (
    <Box>
      <Typography variant="h4">Sale Summary</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Selling Date</TableCell>
              <TableCell>Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPaidProducts?.map((product, index) => (
              <TableRow key={product.createdAt + 12}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {moment(product.createdAt).format("MMMM Do, YYYY")}
                </TableCell>
                <TableCell>$ {product.profitAmount}</TableCell>
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
