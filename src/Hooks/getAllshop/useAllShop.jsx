import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useAllShop = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_shop"],

    queryFn: async () => {
      const response = await axiosSecure.get(`/admin/all-shop`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllShop;
