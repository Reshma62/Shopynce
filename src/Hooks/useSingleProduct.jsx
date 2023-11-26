import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useSingleProduct = (id) => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user", id],

    queryFn: async () => {
      const response = axiosSecure.get(`/manager/get-single-product?id=${id}`);
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSingleProduct;
