import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useSoldProducts = (perPage, size) => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["sold_products", user?.email, perPage, size],
    // enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/manager/sold-products?email=${user?.email}&perPage=${perPage}&size=${size}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSoldProducts;
