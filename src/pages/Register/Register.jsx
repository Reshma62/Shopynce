import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  styled,
  Stack,
} from "@mui/material";
import { HashLoader } from "react-spinners";
import SingUpBg from "../../assets/signUp.jpg";
import toast from "react-hot-toast";
import { LockOutlined, CloudUpload } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { imageUplaod } from "../../api/imgUpload";
import { useEffect, useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
const Register = () => {
  const [loading, setLoading] = useState(false);
  const { createUser, updateUser } = useAuthContext();
  const [imgUrl, setImgUrl] = useState(null);
  const [imgName, setImgName] = useState("");
  const axiosSecure = useAxiosSecure("application/json");
  // const axiosForMultipart = useAxiosSecure("multipart/form-data");
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const getImageUrl = async () => {
      const img = watch("profile_pic");

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
  }, [watch("profile_pic"), watch]);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setLoading(true);
    const imgData = await imageUplaod(data.profile_pic[0]);

    // create user in firebase
    // eslint-disable-next-line no-unused-vars
    if (data.full_name && data.email) {
      // eslint-disable-next-line no-unused-vars
      const user = await createUser(data.email, data.password)
        // eslint-disable-next-line no-unused-vars
        .then(async (result) => {
          await updateUser(data.full_name, imgData)
            .then(async () => {
              reset();
              navigate("/login");
              setLoading(false);
              console.log(result, "result");
              const userInfo = {
                name: result?.user?.displayName,
                email: result?.user?.email,
              };
              axiosSecure
                .post("/user/create-user", userInfo)
                .then((result) => {
                  console.log("result", result.data);
                  toast.success("Congratulations. Registered successfully");
                })
                .catch((err) => {
                  console.log("err", err);
                  setLoading(false);
                });
            })
            .catch((err) => {
              console.log("err", err);
              setLoading(false);
            });
        })
        .catch((err) => {
          console.log("err", err);
          setLoading(false);
          if (err.message.includes("auth/email-already-in-use")) {
            setError("email", {
              type: "manual",
              message: "Email is already in use. Please use a different email.",
            });
          }
        });
    }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${SingUpBg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register to{" "}
            <Typography
              component="span"
              variant="h5"
              color={"primary"}
              fontWeight={"bold"}
            >
              Shopynce
            </Typography>
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, width: "80%" }}
          >
            <TextField
              {...register("full_name", { required: "Name is required" })}
              margin="normal"
              fullWidth
              id="name"
              label="Full Name*"
              name="full_name"
              autoFocus
            />
            {errors.full_name && (
              <Typography color={"red"} variant="body2">
                {errors.full_name.message}
              </Typography>
            )}

            <TextField
              {...register("email", {
                required: "Email is required",
                // eslint-disable-next-line no-useless-escape
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              })}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address*"
              name="email"
              autoComplete="email"
            />
            {errors.email?.type === "required" && (
              <Typography color={"red"} variant="body2">
                {errors.email.message}
              </Typography>
            )}
            {errors.email?.type === "manual" && (
              <Typography color="error" variant="body2">
                {errors.email.message}
              </Typography>
            )}
            {errors.email?.type === "pattern" && (
              <Typography color={"red"} variant="body2">
                Invalid Email address
              </Typography>
            )}
            <TextField
              {...register("password", {
                required: "Password is required",
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
              })}
              margin="normal"
              fullWidth
              name="password"
              label="Password*"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {errors.password?.type === "required" && (
              <Typography color={"red"} variant="body2">
                {errors.password.message}
              </Typography>
            )}
            {errors.password?.type === "pattern" && (
              <Typography color={"red"} variant="body2">
                Must be add upperCase, lowarecase , spicial and number and 6
                digit
              </Typography>
            )}
            <Stack direction="row" spacing={2} mt={2}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
              >
                {imgName ? imgName : "Upload Profile Picture"}

                <VisuallyHiddenInput
                  {...register("profile_pic", {
                    required: "Profile picture is required",
                  })}
                  type="file"
                  name="profile_pic"
                />
              </Button>
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Remy Sharp"
                src={imgUrl}
              />
            </Stack>
            {errors.profile_pic?.type === "required" && (
              <Typography color={"red"} mt={2} variant="body2">
                {errors.profile_pic.message}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? (
                <>
                  <HashLoader color="#36d7b7" />
                </>
              ) : (
                "Register"
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Don't have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;

/* const Register = () => {
  return <div>Hello I am Register</div>;
};

export default Register; */
