import { ContactApi } from "@/lib";

export const fetchContactData = async () => {
  try {
    const response = await ContactApi.getContactListData();

    if (response.code !== 200 || !response.data?.data) {
      return {
        contactData: null,
        contactHasError: true,
      };
    }

    return {
      contactData: response.data.data,
      contactHasError: false,
    };
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return {
      contactData: null,
      contactHasError: true,
    };
  }
};
