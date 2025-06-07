import React from "react";
import styles from "@/styles/homesign.module.css";

const HomeSign = () => {
  return (
    <>
      <div className={styles.page_container}>
        <section className={styles.work_with_us}>
          <div className={styles.container}>
            <h1>Ready to work with us!</h1>
            <p>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt
              dolore magna aliqua quis nostrud exerc dolores eos qui ratione
            </p>
            <div className={styles.bg_form}>
            <form className={styles.email_form}>
              <input type="email" placeholder="Enter your email address..." />
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
