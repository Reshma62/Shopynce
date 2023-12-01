import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useCheckOutQuery = () => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["checkout"],

    queryFn: async () => {
      const response = await axios.get(`/manager/get-checkout`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCheckOutQuery;
