import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useAllProductsCost = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["calculateAllProductsCostAdmin"],

    queryFn: async () => {
      const response = await axiosSecure.get(`/admin/all-products-sell`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllProductsCost;
