import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetUserQuery = (user) => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user", user],
    enabled: !!user,
    queryFn: async () => {
      const response = await axiosSecure.get(`/auth/get-user?email=${user}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
