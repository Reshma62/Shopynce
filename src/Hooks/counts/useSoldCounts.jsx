import useAuthContext from "../useAuthContext";
import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useSoldCounts = () => {
  const { user } = useAuthContext();
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_sold_count", user],

    queryFn: async () => {
      const response = await axiosPublic.get(
        `/manager/sold-count?email=${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useSoldCounts;
