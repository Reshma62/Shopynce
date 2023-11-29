import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = (itemsPerPage, currentPage) => {
  const axiosSecure = useAxiosSecure();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_user_info", itemsPerPage, currentPage],

    queryFn: async () => {
      const response = await axiosSecure.get(
        `/admin/all-user-info?page=${currentPage}&size=${itemsPerPage}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllUsers;
