import { HomeApi } from "@/lib";

export const fetchHomeData = async () => {
  try {
    const response = await HomeApi.getHomeData();
    if (response.code === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error: any) {
    const message =
      error?.response?.data?.message || error.message || "Unknown error";
    throw new Error(`Home API failed: ${message}`);
  }
};
