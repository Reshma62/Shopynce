import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdminInfo = (user) => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_admin_info"],

    queryFn: async () => {
      const response = await axiosSecure.get(
        `/admin/admin-info?email=${user?.email}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAdminInfo;
