import { fetchHomeData } from "@/services/homeService";
import useSWR from "swr";


const useHomePage = () => {
  const { data, error, isLoading } = useSWR("home", fetchHomeData);

  return {
    home: data,
    isLoading,
    error,
  };
};

export default useHomePage;
