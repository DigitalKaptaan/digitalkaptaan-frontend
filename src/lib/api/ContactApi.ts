import { errorHandler, responseHandler } from "@/utils";
import ApiClient from "../axiosInstance";
import { URLS } from "../urls";

const ContactApi = {
  getContactListData: async () => {
    try {
      const response = await ApiClient.get(URLS.CONTACT.GETCONTACTLIST);
      return responseHandler(response);
    } catch (error) {
      console.log("Contact List Data error", error);
      return errorHandler(error);
    }
  },

  postCustomerRequest: async (body: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await ApiClient.post(
        URLS.CONTACT.POSTCUSTOMERREQUEST,
        body
      );
      return responseHandler(response);
    } catch (error) {
      console.log("Contact List Data error", error);
      return errorHandler(error);
    }
  },
};

export default ContactApi;
