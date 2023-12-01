import useAxiosPublic from "../useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useAllUsersCount = () => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_users_count_12"],

    queryFn: async () => {
      const response = await axiosPublic.get(`/admin/user-count`);
      return response.data.count;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllUsersCount;
