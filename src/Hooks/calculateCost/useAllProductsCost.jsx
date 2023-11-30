import useAxiosPublic from "../useAxiosPublic";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useAllProductsCost = () => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["calculateAllProductsCostAdmin"],

    queryFn: async () => {
      const response = await axios.get(`/admin/all-products-sell`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllProductsCost;
