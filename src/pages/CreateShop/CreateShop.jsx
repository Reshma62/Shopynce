import {
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
import useAuthContext from "../../Hooks/useAuthContext";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DynamicTitle from "../../components/Shared/DynamicTitle/DynamicTitle";
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
const CreateShop = () => {
  const axiosSecure = useAxiosSecure("multipart/form-data");
  const [imgUrl, setImgUrl] = useState(null);
  const [imgName, setImgName] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const getImageUrl = async () => {
      const img = watch("shop_logo");

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
  }, [watch("shop_logo"), watch]);

  const onSubmit = async (data) => {
    const shopInformation = {
      name: data.shop_name,
      location: data.shop_location,
      shop_description: data.shop_desc,
      shop_logo: data.shop_logo[0],
      email: data.user_email,
      userName: data.user_name,
    };

    axiosSecure
      .post("/user/create-shop", shopInformation)
      .then((result) => {
        console.log("result", result);
        toast.success("Congratulations. Your new shop has been created");
        navigate("/dashboard");
        reset();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ border: "2px solid #ddd", pb: 5, mt: 10, pt: 5 }}
    >
      <DynamicTitle title={"Create Shop"} />
      <Typography
        fontWeight={600}
        variant="h3"
        color="primary"
        textAlign={"center"}
        pb={5}
      >
        Create your Own Shop
      </Typography>
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
                {...register("shop_name", {
                  required: "Shop name is required",
                })}
                id="outlined-shopName-input"
                label="Shop Name"
                type="text"
                fullWidth
              />
              {errors.shop_name && (
                <Typography color={"red"} variant="body2">
                  {errors.shop_name.message}
                </Typography>
              )}
            </Box>
            <Box sx={{ width: "100%", mb: 2 }}>
              <TextField
                {...register("shop_location", {
                  required: "Shop Location is required",
                })}
                fullWidth
                label="Shop Location"
                id="shop_location"
              />
              {errors.shop_location && (
                <Typography color={"red"} variant="body2">
                  {errors.shop_location.message}
                </Typography>
              )}
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between" gap={3}>
            <Box sx={{ width: "100%", mb: 2 }}>
              <TextField
                {...register("user_email", {
                  required: "Email is required",
                })}
                id="outlined-read-only-input"
                label="Email"
                defaultValue={user?.email}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
              {errors.user_email && (
                <Typography color={"red"} variant="body2">
                  {errors.user_email.message}
                </Typography>
              )}
            </Box>
            <Box sx={{ width: "100%", mb: 2 }}>
              <TextField
                {...register("user_name", {
                  required: "Email is required",
                })}
                id="outlined-read-only-input"
                label="Name"
                defaultValue={user?.displayName}
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
              {errors.user_name && (
                <Typography color={"red"} variant="body2">
                  {errors.user_name.message}
                </Typography>
              )}
            </Box>
          </Stack>

          <TextField
            {...register("shop_desc", {
              required: "Shop details is required",
            })}
            variant="outlined"
            fullWidth
            multiline
            label="Shop description"
            minRows={4}
            size="small"
          />
          {errors.shop_desc && (
            <Typography color={"red"} variant="body2">
              {errors.shop_desc.message}
            </Typography>
          )}
          <Stack direction={"row"} gap={3} sx={{ mt: 2 }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
            >
              {imgName ? imgName : "Upload shop logo"}
              <VisuallyHiddenInput
                {...register("shop_logo", {
                  required: "Shop Logo is required",
                })}
                name="shop_logo"
                type="file"
              />
            </Button>
            {errors.shop_logo && (
              <Typography color={"red"} variant="body2">
                {errors.shop_logo.message}
              </Typography>
            )}
            <Avatar
              sx={{ width: 70, height: 70, border: "2px solid #5F1E2E" }}
              alt="Shop logo"
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
          create Shop
        </Button>
      </Box>
    </Container>
  );
};

export default CreateShop;
