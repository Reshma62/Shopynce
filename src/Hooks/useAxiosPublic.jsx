import axios from "axios";

const useAxios = axios.create({
  // baseURL: "http://localhost:8000/api/v1",
  baseURL: "https://shopynce.vercel.app/api/v1",
});

const useAxiosPublic = () => {
  return useAxios;
};

export default useAxiosPublic;
