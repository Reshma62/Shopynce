import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useGetAllProduct = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: async () => {
      const response = axiosSecure.get(`/manager/get-all-product`);
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetAllProduct;
