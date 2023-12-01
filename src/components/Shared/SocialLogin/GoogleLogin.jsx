import { useEffect, useState } from "react";
import useAuthContext from "../../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import useGetUserQuery from "../../../Hooks/useGetUserQuery";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { signInWithGoogle, setLoading: authLoading } = useAuthContext();
  const axios = useAxiosPublic();
  const { data: userData } = useGetUserQuery();
  const userRole = userData?.role;
  const navigate = useNavigate();

  const handleGoogle = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        setUserEmail(result?.user?.email);

        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axios
          .post("/user/create-user", userInfo)
          .then((result) => {
            toast.success("successfully logged in");
            navigate(
              userRole === "admin" || userRole === "manager"
                ? "dashboard"
                : "/create-shop"
            );
          })
          .catch((err) => {
            console.log("err", err);
            setLoading(false);
          });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        authLoading(false);
        toast.error("failed to log in " + err.message);
      });
  };
  return (
    <div>
      <Button sx={{ mt: 2 }} onClick={handleGoogle} variant="contained">
        {loading ? (
          <>
            <HashLoader color="#36d7b7" />
          </>
        ) : (
          "Login With Google"
        )}
      </Button>
    </div>
  );
};

export default GoogleLogin;
