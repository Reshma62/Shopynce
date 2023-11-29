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
} from "@mui/material";
import toast from "react-hot-toast";
import Loading from "../../../../components/Shared/Loading/Loading";

import useAllUsers from "../../../../Hooks/useAllUsers";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const UsersInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersData, isLoading } = useAllUsers();
  if (isLoading) {
    return <Loading />;
  }
  const handleEmailSend = (email) => {
    console.log(email);
    axiosSecure
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
    <Box sx={{}}>
      <Typography variant="h5" color="initial">
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
                  <Button onClick={() => handleEmailSend(user?.email)}>
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
    </Box>
  );
};

export default UsersInfo;
