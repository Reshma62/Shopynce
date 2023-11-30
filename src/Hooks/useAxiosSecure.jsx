import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";
const axiosSecure = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: "https://shopynce.vercel.app/api/v1",
});

const useAxiosSecure = (contentType) => {
  const navigate = useNavigate();
  const { logOUtUser } = useAuthContext();
  axios.interceptors.request.use(
    function (config) {
      // Ensure that Content-Type is set only for FormData
      const token = localStorage.getItem("access-token");
      // console.log('request stopped by interceptors', token)
      config.headers.authorization = `Bearer ${token}`;
      if (contentType === "multipart/form-data") {
        config.headers["Content-Type"] = contentType;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
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
