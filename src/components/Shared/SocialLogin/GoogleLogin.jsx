import { useEffect, useState } from "react";
import useAuthContext from "../../../Hooks/useAuthContext";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import useGetUserQuery from "../../../Hooks/useGetUserQuery";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const { signInWithGoogle, setLoading: authLoading } = useAuthContext();

  const { data: userData } = useGetUserQuery(userEmail);
  const userRole = userData?.role;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userRole) {
      authLoading(true);
    } else {
      if (userRole === "admin") {
        navigate("/dashboard");
        authLoading(false);
      } else if (userRole === "manager") {
        navigate("/dashboard");
        authLoading(false);
      } else {
        navigate("/create-shop");
        authLoading(false);
      }
    }
  }, [userEmail, navigate, userData?.role, authLoading, userRole]);
  const handleGoogle = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        setUserEmail(result?.user?.email);
        toast.success("successfully logged in");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
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
