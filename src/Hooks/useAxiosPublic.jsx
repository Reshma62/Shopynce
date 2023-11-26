import axios from "axios";

const useAxios = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return useAxios;
};

export default useAxiosPublic;
