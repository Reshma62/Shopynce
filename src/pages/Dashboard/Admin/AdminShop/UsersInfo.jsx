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
  Button,
  Pagination,
} from "@mui/material";
import toast from "react-hot-toast";
import Loading from "../../../../components/Shared/Loading/Loading";

import useAllUsers from "../../../../Hooks/useAllUsers";
import { useState } from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const UsersInfo = () => {
  const axios = useAxiosPublic();

  const [itemsPerPage, setItemsPerPage] = useState(2);

  const [currentPage, setCurrentPage] = useState(0);

  const count = 5;

  const totalPages = Math.ceil(count / itemsPerPage);
  const { data: usersData, isLoading } = useAllUsers(itemsPerPage, currentPage);
  if (isLoading) {
    return <Loading />;
  }
  const handleEmailSend = (email) => {
    console.log(email);
    axios
      .post(`/admin/send-promotion?email=${email}`)
      .then((result) => {
        console.log("result", result.data);
        if (result?.data?.success) {
          toast.success(result?.data?.success);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  console.log("users data", usersData);
  return (
    <Box sx={{ pb: 10 }}>
      <Typography variant="h5" color="initial" my={3}>
        All users
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell>Shop Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData?.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user?.role}</TableCell>
                <TableCell>
                  {user?.shopId ? user?.shopId?.name : " No Shop"}
                </TableCell>
                <TableCell>
                  <Button
                    variant={`${
                      !user?.shopId && user?.role == "user" ? "contained" : ""
                    }`}
                    onClick={() => handleEmailSend(user?.email)}
                  >
                    {!user?.shopId && user?.role == "user"
                      ? "Become a Shop Owner"
                      : ""}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ mt: 3 }}
        count={totalPages}
        page={currentPage + 1}
        onChange={(event, newPage) => {
          setCurrentPage(newPage - 1);
          // Optionally trigger refetch here if needed
          // refetch();
        }}
      />
    </Box>
  );
};

export default UsersInfo;
