import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import useAxiosPublic from "./useAxiosPublic";

const useGetUserQuery = (user) => {
  const axiosPublic = useAxiosPublic();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["get_user", user],

    queryFn: async () => {
      const response = await axiosPublic.get(`/auth/get-user?email=${user}`);
      return response.data;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useGetUserQuery;
