import { postContactForm } from "@/lib/server";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const useContact = () => {
  const [values, setValues] = useState<ContactFormValues>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formLoading, setFormLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation function
  const validate = (values: ContactFormValues) => {
    const errors: Record<string, string> = {};

    if (!values.firstName.trim()) errors.firstName = "First name is required";
    if (!values.lastName.trim()) errors.lastName = "Last name is required";

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(values.phone)) {
      errors.phone = "Invalid phone number";
    }

    if (!values.subject.trim()) errors.subject = "Subject is required";
    if (!values.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      toast.error(Object.values(errors)[0]); // show first validation error
      return;
    }

    setFormLoading(true);

    try {
      await postContactForm(values);
      toast.success("Message sent successfully!");
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to submit form";
      toast.error(errorMessage);
    } finally {
      setFormLoading(false);
    }
  };

  return {
    values,
    formLoading,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
