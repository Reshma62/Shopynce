import {
  DialogContentText,
  TextField,
  Container,
  Stack,
  Typography,
  Button,
  styled,
  Avatar,
  Box,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthContext from "../../../../Hooks/useAuthContext";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import Loading from "../../../../components/Shared/Loading/Loading";
import { imageUplaod } from "../../../../api/imgUpload";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
const ModalFrom = ({ setOpen }) => {
  const axiosPublic = useAxiosPublic();
  const [imgUrl, setImgUrl] = useState(null);
  const [imgName, setImgName] = useState("");
  const { refetch, isLoading } = useGetAllProduct();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  // console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const getImageUrl = async () => {
      const img = watch("product_image");

      if (img instanceof FileList && img.length > 0) {
        try {
          const imageUrl = URL.createObjectURL(img[0]);
          setImgUrl(imageUrl);
          setImgName(img[0].name);
        } catch (error) {
          console.error("Error creating object URL:", error);
        }
      } else {
        setImgUrl(null);
        setImgName(null);
      }
    };

    getImageUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("product_image"), watch]);
  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const img = data?.product_image[0];
    const imgData = await imageUplaod(data.product_image[0]);
    console.log("imgData", imgData);
    const productInformation = {
      name: data.product_name,
      location: data.product_location,
      product_description: data.product_desc,
      product_image: imgData,
      quantity: data.quantity,
      production_cost: data.production_cost,
      profit: data.profit,
      discount: data.discount,
    };

    axiosPublic
      .post(`/manager/add-product?email=${user?.email}`, productInformation)
      .then((result) => {
        console.log("result", result.data);
        if (result.data.success) {
          toast.success(result.data.success);
          reset();
          setOpen(false);
          refetch();
        }
      })
      .catch((err) => {
        console.log("err", err.response.data.error);
        if (err.response.data.error) {
          toast.error(err.response.data.error + " Can not more product");
          navigate("/dashboard/subscriptions");
          reset();
        }
      });
  };
  return (
    <DialogContentText>
      <Container sx={{ border: "2px solid #ddd", pb: 5, mt: 10, pt: 5 }}>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Stack
              width="100%"
              direction="row"
              justifyContent="space-between"
              gap={3}
            >
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("product_name", {
                    required: "Product name is required",
                  })}
                  id="outlined-ProductName-input"
                  label="Product Name"
                  type="text"
                  fullWidth
                />
                {errors.product_name && (
                  <Typography color={"red"} variant="body2">
                    {errors.product_name.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("product_location", {
                    required: "Product Location is required",
                  })}
                  fullWidth
                  label="Product Location"
                  id="product_location"
                />
                {errors.product_location && (
                  <Typography color={"red"} variant="body2">
                    {errors.product_location.message}
                  </Typography>
                )}
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="space-between" gap={3}>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("quantity", {
                    required: "Product Quantity is required required",
                  })}
                  id="outlined-quant-input"
                  label="Quantity"
                  fullWidth
                />
                {errors.quantity && (
                  <Typography color={"red"} variant="body2">
                    {errors.quantity.message}
                  </Typography>
                )}
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("production_cost", {
                    required: "Production Cost value is required",
                  })}
                  id="outlined-read-only-input"
                  label="Production Cost"
                  fullWidth
                />
                {errors.production_cost && (
                  <Typography color={"red"} variant="body2">
                    {errors.production_cost.message}
                  </Typography>
                )}
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="space-between" gap={3}>
              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("profit", {
                    required: "profit margin is required required",
                  })}
                  id="outlined-profit-input"
                  label="Profit"
                  fullWidth
                />
                {errors.quantity && (
                  <Typography color={"red"} variant="body2">
                    {errors.profit.message}
                  </Typography>
                )}
              </Box>

              <Box sx={{ width: "100%", mb: 2 }}>
                <TextField
                  {...register("discount", {
                    required: "Discount is required",
                  })}
                  id="outlined-discount-input"
                  label="Discount"
                  fullWidth
                />
                {errors.discount && (
                  <Typography color={"red"} variant="body2">
                    {errors.discount.message}
                  </Typography>
                )}
              </Box>
            </Stack>

            <TextField
              {...register("product_desc", {
                required: "Product details is required",
              })}
              variant="outlined"
              fullWidth
              multiline
              label="Product description"
              minRows={4}
              size="small"
            />
            {errors.product_desc && (
              <Typography color={"red"} variant="body2">
                {errors.product_desc.message}
              </Typography>
            )}
            <Stack direction={"row"} gap={3} sx={{ mt: 2 }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
              >
                {imgName ? imgName : "Upload Product Image"}
                <VisuallyHiddenInput
                  {...register("product_image", {
                    required: "Product Image is required",
                  })}
                  name="product_image"
                  type="file"
                />
              </Button>
              {errors.product_image && (
                <Typography color={"red"} variant="body2">
                  {errors.product_image.message}
                </Typography>
              )}
              <Avatar
                sx={{ width: 70, height: 70, border: "2px solid #5F1E2E" }}
                alt="Product logo"
                src={imgUrl}
              />
            </Stack>
          </div>
          <Button
            sx={{ mt: 5, color: "white", fontWeight: 500 }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Add product
          </Button>
        </Box>
      </Container>
    </DialogContentText>
  );
};

export default ModalFrom;
