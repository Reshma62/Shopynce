import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = (itemsPerPage, currentPage) => {
  const axios = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_all_user_info_s", itemsPerPage, currentPage],

    queryFn: async () => {
      const response = await axios.get(
        `/admin/all-user-info?page=${currentPage}&size=${itemsPerPage}`
      );
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useAllUsers;
