import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";
import useAuthContext from "./useAuthContext";

const useGetUserQuery = (userEmail) => {
  // const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user_singl", userEmail],
    // enabled: !!userEmail,
    queryFn: async () => {
      const response = await axios.get(`/auth/get-user?email=${userEmail}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
