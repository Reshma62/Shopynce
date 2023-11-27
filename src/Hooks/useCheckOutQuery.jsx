import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useCheckOutQuery = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["checkout"],

    queryFn: async () => {
      const response = await axiosSecure.get(`/manager/get-checkout`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCheckOutQuery;
