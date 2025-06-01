import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const HomeApi = {
  getHomeData: async () => {
    try {
      const response = await ApiClient.get(URLS.HOME.GETHOMEDATA);
      console.log("Home Data response", response);
      return responseHandler(response);
    } catch (error) {
      console.log("Home Data error", error);
      return errorHandler(error);
    }
  },
};

export default HomeApi;
