import useAuthContext from "../useAuthContext";
import useAxiosSecure from "../useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useCalculateCost = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["calculateSoldProductcost", user],

    queryFn: async () => {
      const response = await axiosSecure.get(
        `/manager/calculate-totals/${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useCalculateCost;
