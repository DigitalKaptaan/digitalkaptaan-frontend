import React from "react";
import contact from "@/styles/contactus.module.css";

const ContactForm = () => {
  return (
    <>
      <section className={contact.form_wrapper}>
        <div className={contact.form_section}>
          <h2 className={contact.form_heading}>Let’s discuss your projects</h2>
          <form className={contact.contact_form}>
            <div className={contact.form_group_half}>
              <label>First Name</label>
              <input type="text" placeholder="Omar" />
            </div>
            <div className={contact.form_group_half}>
              <label>Last Name</label>
              <input type="text" placeholder="Faruk" />
            </div>
            <div className={contact.form_group_half}>
              <label>Mail</label>
              <input type="email" placeholder="omarfaruk2y2@gmail.com" />
            </div>
            <div className={contact.form_group_half}>
              <label>Phone</label>
              <input type="tel" placeholder="+00 11 222 333 444" />
            </div>
            <div className={contact.form_group}>
              <label>Subject</label>
              <input type="text" placeholder="What are you looking for" />
            </div>
            <div className={contact.form_group}>
              <label>Message</label>
              <textarea
                placeholder="Tell us about your project"
                defaultValue={""}
              />
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
    </>
  );
};

export default ContactForm;
