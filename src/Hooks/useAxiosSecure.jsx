import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = (contentType) => {
  const navigate = useNavigate();
  const { logOUtUser } = useAuthContext();
  axiosSecure.interceptors.request.use(
    function (config) {
      if (config.data instanceof FormData) {
        // If it's FormData, set Content-Type to multipart/form-data
        config.headers = {
          headers: {
            "Content-Type": contentType,
          },
        };
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      const statusCode = error.status;
      if (statusCode === 401 || statusCode === 403 || statusCode === 404) {
        navigate("/login");
        await logOUtUser();
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
