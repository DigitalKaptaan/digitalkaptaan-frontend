import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const NavApi = {
  getNavMenu: async (slug: string) => {
    try {
      const response = await ApiClient.get(`${URLS.MENU.GETMENU}/${slug}`);

      return responseHandler(response);
    } catch (error) {
      console.log("Nav Menu error", error);
      return errorHandler(error);
    }
  },
};

export default NavApi;
