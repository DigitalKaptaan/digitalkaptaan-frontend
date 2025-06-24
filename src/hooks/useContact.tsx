import { postContactForm } from "@/services";
import { useState } from "react";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const useContact = () => {
  // const {
  //   data: contactList,
  //   error: fetchError,
  //   isLoading,
  // } = useSWR("contactList", fetchContactList);

  const [values, setValues] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(false);
    setFormLoading(true);

    try {
      await postContactForm(values);
      setFormSuccess(true);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setFormError(err.message || "Failed to submit form");
      } else {
        setFormError("Failed to submit form");
      }
    } finally {
      setFormLoading(false);
    }
  };

  return {
    values,
    formLoading,
    formError,
    formSuccess,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
