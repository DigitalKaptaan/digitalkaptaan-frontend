import React from "react";
import contact from "@/styles/contactus.module.css";
import { useContact } from "@/hooks";

const FormField = ({
  label,
  id,
  type = "text",
  placeholder,
  half = false,
  value,
  name,
  onChange,
  autoComplete,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  half?: boolean;
  value: string;
  name: string;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={half ? contact.form_group_half : contact.form_group}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  </div>
);

const ContactForm = () => {
  const {
    formError,
    formLoading,
    formSuccess,
    handleChange,
    handleSubmit,
    values,
  } = useContact();
  return (
    <section className={contact.form_wrapper}>
      <div className={contact.form_section}>
        <h2 className={contact.form_heading}>Let’s discuss your projects</h2>

        <form className={contact.contact_form} onSubmit={handleSubmit}>
          <FormField
            label="First Name"
            id="first-name"
            placeholder="Digital"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            half
            autoComplete="none"
          />
          <FormField
            label="Last Name"
            id="last-name"
            placeholder="Kaptaan"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            half
            autoComplete="none"
          />
          <FormField
            label="Mail"
            id="email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            value={values.email}
            onChange={handleChange}
            half
            autoComplete="none"
          />
          <FormField
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 870-070-0000"
            value={values.phone || ""}
            onChange={handleChange}
            half
            autoComplete="none"
          />
          <FormField
            label="Subject"
            id="subject"
            name="subject"
            placeholder="What are you looking for"
            value={values.subject}
            onChange={handleChange}
            autoComplete="none"
          />

          <div className={contact.form_group}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              value={values.message}
              onChange={handleChange}
              autoComplete="none"
            />
          </div>

          <div className={contact.form_note}>
            *We won’t spam or publish your email
          </div>

          {formError && (
            <div className={contact.error_message}>{formError}</div>
          )}
          {formSuccess && (
            <div className={contact.success_message}>
              Thank you! We received your message.
            </div>
          )}

          <div className={contact.form_button}>
            <button
              className={contact.submit_button}
              type="submit"
              disabled={formLoading}
            >
              {formLoading ? "Submitting..." : "Submit your request"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
