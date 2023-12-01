import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useSingleProduct = (id) => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_usersID_single", id],

    queryFn: async () => {
      const response = axios.get(`/manager/get-single-product?id=${id}`);
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSingleProduct;
