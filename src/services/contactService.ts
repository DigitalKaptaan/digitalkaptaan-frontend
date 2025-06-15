import { ContactFormValues } from "@/hooks/useContact";
import { ContactApi } from "@/lib";

export const fetchContactList = async () => {
  try {
    const response = await ContactApi.getContactListData();
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

export const postContactForm = async (values: ContactFormValues) => {
  try {
    const response = await ContactApi.postCustomerRequest(values);
    if (response.code === 201) {
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
