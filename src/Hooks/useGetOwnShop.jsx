import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const useGetOwnShop = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_usersID", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/user/shop/${user?.email}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetOwnShop;
