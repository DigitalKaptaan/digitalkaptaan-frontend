import React from "react";
import styles from "@/styles/homesign.module.css";

const HomeSign = () => {
  return (
    <>
      <div className={styles.page_container}>
        <section className={styles.work_with_us}>
          <div className={styles.container}>
            <h2>Ready to work with us!</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc dolores eos qui ratione</p>
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
