import useAuthContext from "../useAuthContext";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useSoldProducts = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_sold_products", user],

    queryFn: async () => {
      const response = await axiosSecure.get(
        `/manager/get-sold-products/${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSoldProducts;
