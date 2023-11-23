import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUserQuery = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = axios.get("");
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
