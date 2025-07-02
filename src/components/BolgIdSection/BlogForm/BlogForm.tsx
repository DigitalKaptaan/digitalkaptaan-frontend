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
              name="name"
              type="text"
              className={Id.form_input}
              placeholder="Your Name *"
              autoComplete="name"
              required
            />
            <input
              name="email"
              type="email"
              className={Id.form_input}
              placeholder="Your Email *"
              autoComplete="email"
              required
            />
          </div>
          <textarea
            name="comment"
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
