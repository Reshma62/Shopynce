import useAxiosPublic from "../useAxiosPublic";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useGetAllShopIds = () => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_shop_ids"],

    queryFn: async () => {
      const response = await axios.get(`/user/all-shop`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetAllShopIds;
