import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useAllShop = () => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_shop"],

    queryFn: async () => {
      const response = await axios.get(`/admin/all-shop`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllShop;
