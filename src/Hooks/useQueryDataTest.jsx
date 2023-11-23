import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryDataTest = () => {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = axios.get(
        "https://organic-food-ch8gpuv23-reshma62.vercel.app/products"
      );
      return await response;
    },
  });
  return { isLoading, isError, data, error, refetch };
};

export default useQueryDataTest;
