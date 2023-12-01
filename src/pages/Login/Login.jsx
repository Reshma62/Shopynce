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
} from "@mui/material";
import LoginBg from "../../assets/login.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { HashLoader } from "react-spinners";
import { useState } from "react";
import useAuthContext from "../../Hooks/useAuthContext";
import useGetUserQuery from "../../Hooks/useGetUserQuery";
import GoogleLogin from "../../components/Shared/SocialLogin/GoogleLogin";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { logInUser } = useAuthContext();
  const { user, setLoading: userSetLoading } = useAuthContext();
  const { data: userData } = useGetUserQuery(user?.email);
  const userRole = userData?.role;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    logInUser(data.email, data.password)
      // eslint-disable-next-line no-unused-vars
      .then(async (result) => {
        setLoading(false);
        navigate(
          userRole === "admin" || userRole === "manager"
            ? "/dashboard"
            : "/create-shop"
        );
        userSetLoading(false);
        toast.success("Login successful. please wait for redirection");
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", err);
        if (err) {
          setError("password", {
            type: "error",
            message: "Invalid-login-credentials",
          });
        }
      });
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
          backgroundImage: `url(${LoginBg})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
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
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login to{" "}
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
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, width: "80%" }}
          >
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
              autoFocus
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
            {errors.password?.type === "error" && (
              <Typography color={"red"} variant="body2">
                {errors.password.message}
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
                "Login"
              )}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <GoogleLogin />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
