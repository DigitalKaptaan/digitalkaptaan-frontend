import React from 'react';
import about from '@/styles/about.module.css';


const AboutDetails = () => {
  return (
    <>
    
    <div className={about.optimize_section}>
  <div className={about.optimize_wrapper}>
    <div className={about.optimize_top}>
      <div className={about.optimize_heading}>
        <h2>We optimize you to<br />grow and understand<br />your business</h2>
      </div>
      <div className={about.optimize_para}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
    <div className={about.optimize_features}>
      <div className={about.optimize_item}>
        <span className={about.optimize_number}>01</span>
        <h3>Branded <br />eCommerce</h3>
        <p>Our eCommerce design starts and ends with a best-in-class experience strategy that builds brands and drives transactions.</p>
      </div>
      <div className={about.optimize_item}>
        <span className={about.optimize_number}>02</span>
        <h3>Digital <br />Experiences</h3>
        <p>Through a deep understanding of our audience’s makeup and motivations, we design digital experiences that connect with people.</p>
      </div>
      <div className={about.optimize_item}>
        <span className={about.optimize_number}>03</span>
        <h3>Branding <br />Strategy</h3>
        <p>We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression.</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default AboutDetails
