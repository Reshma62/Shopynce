import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetUserQuery = (user) => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user", user],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = axiosSecure.get(`/auth/get-user?email=${user?.email}`);
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
