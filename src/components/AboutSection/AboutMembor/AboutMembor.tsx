import React from "react";
import about from "@/styles/about.module.css";
import Image from "next/image";

type Props = {
  data: {
    title: string;
    description: string;
    members: {
      name: string;
      role: string;
      imageUrl: string;
    }[];
  };
};

const AboutMembor = ({ data }: Props) => {
  const { description, members, title } = data;
  return (
    <>
      <section className={about.team_section}>
        <div className={about.team_wrapper}>
          <div className={about.team_heading}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className={about.team_cards}>
            {members.map(({ imageUrl, name, role }, i) => {
              return (
                <div className={about.team_card} key={i}>
                  <div className={`${about.team_image} ${about.bg_pink}`}>
                    <Image
                      src={imageUrl}
                      height={250}
                      width={250}
                      alt={name}
                      priority
                    />
                  </div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                  {/* <div className={about.team_socials}>
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-linkedin-in" />
                    <i className="fab fa-pinterest-p" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMembor;
