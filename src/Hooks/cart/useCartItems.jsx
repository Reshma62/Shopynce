import useAuthContext from "../useAuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useCartItems = () => {
  const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_cart_items", user],

    queryFn: async () => {
      const response = await axios.get(
        `/manager/get-cart-items?email=${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCartItems;
