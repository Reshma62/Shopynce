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
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import axios from "axios";
import useGetAllProduct from "../../../../Hooks/useGetAllProduct";

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

const UpdateModalForm = ({ id, setOpen }) => {
  const axiosSecure = useAxiosSecure("multipart/form-data");
  const { refetch } = useGetAllProduct();
  const {
    _id,
    name,
    location,
    product_description,
    product_image,
    quantity,
    production_cost,
    profit,
    discount,
  } = id || {};

  const [imgUrl, setImgUrl] = useState(null);
  const [imgName, setImgName] = useState("");
  // const navigate = useNavigate();
  // const { user } = useAuthContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      product_name: name,
      product_location: location,
      product_desc: product_description,
      product_image,
      quantity,
      production_cost,
      profit,
      discount,
    },
  });

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

  const onSubmit = async (data) => {
    const productInformation = {
      product_name: data.product_name,
      product_location: data.product_location,
      product_desc: data.product_desc,
      product_image: data.product_image[0],
      quantity: data.quantity,
      production_cost: data.production_cost,
      profit: data.profit,
      discount: data.discount,
    };

    console.log("productInformation", productInformation);

    try {
      const result = await axiosSecure.put(
        `/manager/get-single-product/${_id}`,
        productInformation
      );

      console.log("result data", result.data);
      toast.success(
        "Congratulations. Your product has been successfully updated."
      );
      refetch();
      setOpen(false);
    } catch (err) {
      console.log("err", err);
    }
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
                src={imgUrl ? imgUrl : `http://localhost:8000${product_image}`}
              />
            </Stack>
          </div>
          <Button
            sx={{ mt: 5, color: "white", fontWeight: 500 }}
            type="submit"
            variant="contained"
            color="secondary"
          >
            Update product
          </Button>
        </Box>
      </Container>
    </DialogContentText>
  );
};

export default UpdateModalForm;
