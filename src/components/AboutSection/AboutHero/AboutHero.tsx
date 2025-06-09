import React from 'react';
import about from "@/styles/about.module.css";


const AboutHero = () => {
  return (
<>
    <section className={about.herobanner}>
  <div className={about.about_us_section}>
    <div className={about.about_us_wrapper}>
      <div className={about.about_us_heading}>
        <span className={about.about_us_tag}>ABOUT US</span>
        <h2 className={about.about_us_title}>
          Becoming a part <br />
          of a better <span className={about.highlighted_text}>future</span>
        </h2>
      </div>
      <div className={about.about_us_images}>
        <img className={about.img1} src="/assets/about-01.webp" alt="Team working" />
        <img className={about.img2} src="/assets/about-02.webp" alt="Team at laptop" />
      </div>
      {/* <div className={about.about_us_images}>
        <img src="/assets/about-01.webp" alt="Team working" />
        <img src="/assets/about-02.webp" alt="Team at laptop" />
      </div> */}
    </div>
  </div>
</section>


    </>
  )
}

export default AboutHero
