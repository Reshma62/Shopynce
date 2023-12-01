import useAuthContext from "./useAuthContext";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const useGetOwnShop = () => {
  const { user } = useAuthContext();
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_usersID", user?.email],
    queryFn: async () => {
      const response = await axios.get(`/user/shop/${user?.email}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetOwnShop;
