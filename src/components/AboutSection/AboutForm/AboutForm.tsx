import React from 'react';
import styles from '@/styles/about.module.css';


const AboutForm = () => {
  return (
    <>
    
    <section className={styles.newsletter_section}>
  <div className={styles.newsletter_content}>
    <p className={styles.small_text}>Get in touch with us</p>
    <h2>Subscribe to our Newsletter</h2>

    <form className={styles.newsletter_form}>
      <input type="text" placeholder="Full name*" required />
      <input type="email" placeholder="Email Address*" required />
      <button type="submit">Subscribe</button>
    </form>

    <p className={styles.note}>We won’t spam you. Keep you updated</p>
  </div>
</section>


    </>
  )
}

export default AboutForm
