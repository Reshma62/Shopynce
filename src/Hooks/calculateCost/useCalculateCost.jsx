import useAuthContext from "../useAuthContext";
import useAxiosPublic from "../useAxiosPublic";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useCalculateCost = () => {
  const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["calculateSoldProductcost", user],

    queryFn: async () => {
      const response = await axios.get(
        `/manager/calculate-totals/${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCalculateCost;
