import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_user_info"],

    queryFn: async () => {
      const response = await axiosSecure.get(`/admin/all-user-info`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllUsers;
