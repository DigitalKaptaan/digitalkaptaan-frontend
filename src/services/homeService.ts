import { HomeApi } from "@/lib";

export const fetchHomeData = async () => {
  const response = await HomeApi.getHomeData();
  return response.data;
};
