import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useAllProducts = () => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getAllProducts_admin"],

    queryFn: async () => {
      const response = await axios.get(`/admin/products`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllProducts;
