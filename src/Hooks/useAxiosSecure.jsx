import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOUtUser } = useAuthContext();
  axiosSecure.interceptors.request.use(
    function (config) {
      config.headers = {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      };
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
