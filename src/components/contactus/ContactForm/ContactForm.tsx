import React from "react";
import contact from "@/styles/contactus.module.css";

type FormFieldProps = {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  half?: boolean;
};

const FormField = ({
  label,
  id,
  type = "text",
  placeholder,
  half = false,
}: FormFieldProps) => (
  <div className={half ? contact.form_group_half : contact.form_group}>
    <label htmlFor={id}>{label}</label>
    <input id={id} type={type} placeholder={placeholder} />
  </div>
);

const ContactForm = () => {
  return (
    <section className={contact.form_wrapper}>
      <div className={contact.form_section}>
        <h2 className={contact.form_heading}>Let’s discuss your projects</h2>
        <form className={contact.contact_form}>
          <FormField
            label="First Name"
            id="first-name"
            placeholder="Omar"
            half
          />
          <FormField
            label="Last Name"
            id="last-name"
            placeholder="Faruk"
            half
          />
          <FormField
            label="Mail"
            id="email"
            type="email"
            placeholder="omarfaruk2y2@gmail.com"
            half
          />
          <FormField
            label="Phone"
            id="phone"
            type="tel"
            placeholder="+00 11 222 333 444"
            half
          />
          <FormField
            label="Subject"
            id="subject"
            placeholder="What are you looking for"
          />

          <div className={contact.form_group}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Tell us about your project" />
          </div>

          <div className={contact.form_note}>
            *We won’t spam or publish your email
          </div>

          <div className={contact.form_button}>
            <button className={contact.submit_button} type="submit">
              Submit your request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
