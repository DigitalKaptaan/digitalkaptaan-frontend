import { NavApi } from "@/lib";

export const fetchNavMenu = async () => {
  const response = await NavApi.getNavMenu();
  return response.data;
};
