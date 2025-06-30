import React from "react";
import Id from "@/styles/id.module.css";

const BlogForm = () => {
  return (
    <div>
      <section className={Id.comment_section}>
        <h2 className={Id.comment_title}>Leave a Reply</h2>
        <p className={Id.comment_note}>
          Your email address will not be published. Required fields are marked{" "}
          <span>*</span>
        </p>
        <form className={Id.comment_form}>
          <div className={Id.form_row}>
            <input
              type="text"
              className={Id.form_input}
              placeholder="Your Name *"
              required
            />
            <input
              type="email"
              className={Id.form_input}
              placeholder="Your Email *"
              required
            />
          </div>
          <textarea
            className={Id.form_textarea}
            placeholder="Comment"
            required
            defaultValue={""}
          />
          <button type="submit" className={Id.form_button}>
            Post Comment
          </button>
        </form>
      </section>
    </div>
  );
};

export default BlogForm;
