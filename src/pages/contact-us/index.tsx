import React from "react";
import { ContactForm, GetinTouch } from "@/components";
import { useContact } from "@/hooks";

const Index = () => {
  const {
    contactList,
    fetchError,
    isLoading,
    formError,
    formLoading,
    formSuccess,
    handleChange,
    handleSubmit,
    values,
  } = useContact();
  if (isLoading) return <div>Loading home</div>;
  if (fetchError) return <div>Error loading menu</div>;

  return (
    <div>
      <GetinTouch list={contactList.data || []} />
      <ContactForm
        values={values}
        formError={formError}
        formSuccess={formSuccess}
        formLoading={formLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Index;
