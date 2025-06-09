import React from 'react';
import about from "@/styles/about.module.css";
import Image from 'next/image';

const AboutMembor = () => {
  return (
    <>
    
    <section className={about.team_section}>
  <div className={about.team_wrapper}>
    <div className={about.team_heading}>
      <h2>Meet our excellent team</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but<br />
        the majority have suffered alteration in some form,
      </p>
    </div>
    <div className={about.team_cards}>
      {/* Card 1 */}
      <div className={about.team_card}>
        <div className={`${about.team_image} ${about.bg_pink}`}>
          <Image src="/assets/img-1.png" height={250} width={250} alt="Lee Bowman" />
        </div>
        <h3>Lee Bowman</h3>
        <p>Head of Product</p>
        <div className={about.team_socials}>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
      {/* Card 2 */}
      <div className={about.team_card}>
        <div className={`${about.team_image} ${about.bg_green}`}>
          <Image src="/assets/img-2.png" height={250} width={250} alt="Maurice Owen" />
        </div>
        <h3>Maurice Owen</h3>
        <p>Engineering manager</p>
        <div className={about.team_socials}>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
      {/* Card 3 */}
      <div className={about.team_card}>
        <div className={`${about.team_image} ${about.bg_lightvoi}`}>
          <Image src="/assets/img-3.png" height={250} width={250} alt="Bradley Duncan" />
        </div>
        <div>
        <h3>Bradley Duncan</h3>
        <p>Lead UX Consultant</p>
        </div>
        <div className={about.team_socials}>
          <i className="fab fa-facebook-f" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default AboutMembor
