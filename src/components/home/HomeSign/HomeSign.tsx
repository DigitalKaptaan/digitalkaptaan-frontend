import React from "react";
import styles from "@/styles/homesign.module.css";

const HomeSign = () => {
  return (
    <>
      <div className={styles.page_container}>
        <section className={styles.work_with_us}>
          <div className={styles.container}>
            <h1>Join us</h1>
            <p>Where your ambition meets opportunity!</p>
            <div className={styles.bg_form}>
              <form className={styles.email_form}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address..."
                  autoComplete="email"
                />
                <button type="submit">Get Started</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeSign;
