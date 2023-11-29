import useAuthContext from "../useAuthContext";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useSoldProducts = (page, size, sort) => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_sold_products", user, page, size, sort],

    queryFn: async () => {
      const response = await axiosSecure.get(
        `/manager/get-sold-products/${
          user?.email
        }?page=${page}&size=${size}&sort=${sort ? "asc" : "desc"}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSoldProducts;
