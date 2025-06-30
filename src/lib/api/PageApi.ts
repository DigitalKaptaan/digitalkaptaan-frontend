import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const PageApi = {
  getPageData: async (slug: string) => {
    try {
      const response = await ApiClient.get(`${URLS.PAGE.GETPAGEDATA}/${slug}`);
      return responseHandler(response);
    } catch (error) {
      console.log("Home Data error", error);
      return errorHandler(error);
    }
  },
};

export default PageApi;
