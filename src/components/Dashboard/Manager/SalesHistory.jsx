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
  Grid,
  Button,
  Pagination,
} from "@mui/material";
import Loading from "../../Shared/Loading/Loading";
import moment from "moment";
import { useState } from "react";
import useSoldProducts from "../../../Hooks/soldProducts/useSoldProducts";

import useSoldCounts from "../../../Hooks/counts/useSoldCounts";

const SalesHistory = () => {
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [asc, setAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useSoldCounts();

  const count = data?.count;
  const totalPages = Math.ceil(count / itemsPerPage);

  const { data: soldProducts, isLoading: soldProductLoading } = useSoldProducts(
    currentPage,
    itemsPerPage,
    asc
  );

  if (soldProductLoading) {
    return <Loading />;
  }
  console.log("soldProducts===>", soldProducts);
  return (
    <Box>
      <Grid container spacing={2} justifyContent={"space-between"} my={5}>
        <Typography variant="h4">Sale Summary</Typography>
        <Button onClick={() => setAsc(!asc)} variant="contained">
          Sort by date
        </Button>
      </Grid>

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
                  {moment(product.sale_date).format("MMMM Do, YYYY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage + 1}
          onChange={(event, newPage) => {
            setCurrentPage(newPage - 1);
            // Optionally trigger refetch here if needed
            // refetch();
          }}
        />
      </Box>
    </Box>
  );
};

export default SalesHistory;
