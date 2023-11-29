import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useSoldProductsAll = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["sold_products"],
    // enabled: !!user?.email,
    queryFn: async () => {
      const response = await axiosSecure.get(`/manager/sold-products-all`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSoldProductsAll;
