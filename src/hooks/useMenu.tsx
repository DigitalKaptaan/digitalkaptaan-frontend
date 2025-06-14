import useSWR from "swr";
import { fetchNavMenu } from "@/services/menuService";

const useMenu = () => {
  const { data, error, isLoading } = useSWR("menu", fetchNavMenu);

  return {
    menu: data,
    isLoading,
    error,
  };
};

export default useMenu;
