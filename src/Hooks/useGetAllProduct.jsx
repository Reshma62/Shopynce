import useAuthContext from "./useAuthContext";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useGetAllProduct = () => {
  const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["getAllProduct"],

    queryFn: async () => {
      const response = await axios.get(
        `/manager/get-all-product?email=${user?.email}`
      );
      return response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetAllProduct;
