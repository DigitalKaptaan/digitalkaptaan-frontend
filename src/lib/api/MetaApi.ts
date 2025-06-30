import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const MetaApi = {
  getMetaData: async (slug: string) => {
    try {
      const response = await ApiClient.get(`${URLS.META.GETMETA}/${slug}`);
      return responseHandler(response);
    } catch (error) {
      console.log("Home Data error", error);
      return errorHandler(error);
    }
  },
};

export default MetaApi;
