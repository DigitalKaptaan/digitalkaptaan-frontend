import { HomeApi } from "@/lib";

export const fetchHomeData = async () => {
  try {
    const response = await HomeApi.getHomeData();
    if (response.code === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error: unknown) {
    let message = "Unknown error";

    if (typeof error === "object" && error !== null && "response" in error) {
      const err = error as { response?: { data?: { message?: string } } };
      message = err.response?.data?.message || "Unknown error";
    } else if (error instanceof Error) {
      message = error.message;
    }

    throw new Error(`Home API failed: ${message}`);
  }
};
