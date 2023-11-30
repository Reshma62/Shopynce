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
  Avatar,
} from "@mui/material";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import imgUrl from "../../../../api/imgUrl";
import useAllShop from "../../../../Hooks/getAllshop/useAllShop";
import Loading from "../../../../components/Shared/Loading/Loading";
import DynamicTitle from "../../../../components/Shared/DynamicTitle/DynamicTitle";

const ManageAllShop = () => {
  const axiosSecure = useAxiosSecure();
  const { data: usersData, isLoading } = useAllShop();
  if (isLoading) {
    return <Loading />;
  }
  console.log(usersData);
  const handleEmailSend = (email) => {
    axiosSecure
      .post(`/admin/send-notice?email=${email}`)
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
  return (
    <Box sx={{ px: 10 }}>
      <DynamicTitle title={"Manage Shop"} />
      <Typography variant="h5" color="initial" my={3}>
        All Shops
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Shop name</TableCell>
              <TableCell>Shop logo</TableCell>
              <TableCell>Product Limit</TableCell>
              <TableCell>Shop Description</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData?.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user?.name}</TableCell>
                <TableCell>
                  <Avatar src={`${imgUrl}${user?.shop_logo}`} />
                </TableCell>
                <TableCell>{user?.productLimit}</TableCell>
                <TableCell size="small">{user?.shop_description}</TableCell>
                <TableCell align="center">
                  <Button
                    variant={"contained"}
                    onClick={() => handleEmailSend(user?.email)}
                  >
                    Send Notice
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

export default ManageAllShop;
