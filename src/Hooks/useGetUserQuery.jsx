import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

import useAxiosPublic from "./useAxiosPublic";
import useAuthContext from "./useAuthContext";

const useGetUserQuery = (userPre) => {
  const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user_singl", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const response = await axios.get(`/auth/get-user?email=${user?.email}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
