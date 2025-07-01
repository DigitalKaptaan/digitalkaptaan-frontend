import React from "react";
import Style from "@/styles/OurServices.module.css";
import Image from "next/image";
import Link from "next/link";

const ServiceHero = () => {
  return (
    <div>
     <div className={Style.services_section}>
      <div className={Style.container}>
        <p className={Style.small_heading}>OUR SERVICES</p>
        <h2 className={Style.main_heading}>
          Services based <br />
          on <span className={Style.highlight}>strong</span> values
        </h2>

        <div className={Style.video_box}>
          <div className={Style.video_inner}>
            <Image
              src="https://dlterra.droitlab.com/wp-content/uploads/2022/09/video_img.jpg"
              alt="video thumbnail"
              width={900}
              height={500}
              className={Style.video_image}
            />
            <Link
              href="https://www.youtube.com/watch?v=OZRWcCsvOXQ"
              target="_blank"
              rel="noopener noreferrer"
              className={Style.video_icon}
            >
              <i className={Style.play_icon}>&#9658;</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceHero;
