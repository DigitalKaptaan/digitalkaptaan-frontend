"use client";
import React from "react";
import styles from "@/styles/service.module.css";
import Image from "next/image";

const serviceData = [
  {
    image: "/assets/service1.png",
    alt: "Working on computer",
    heading: (
      <>
        We will provide best <br />
        solution to grow up <br />
        your business
      </>
    ),
    paragraph:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc dolores eos qui ratione",
    list: null,
    reverse: false,
    corner: "topLeft",
  },
  {
    image: "/assets/service2.png",
    alt: "Team discussion",
    heading: "Why you will choose our service first",
    paragraph: null,
    list: [
      <>
        ✅ Your experts come with <strong>proven track records</strong> to make your working relationship
      </>,
      <>
        ✅ <strong>Hire 600+</strong> (exhaustively vetted) top-performing marketers
      </>,
    ],
    reverse: true,
    corner: "bottomRight",
  },
];

const ServiceSection = () => {
  return (
    <>
      {serviceData.map((item, index) => (
        <section key={index} className={styles.serviceSection}>
          <div
            className={`${styles.serviceBox} ${
              item.reverse ? styles.reverse : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                width={700}
                height={450}
                alt={item.alt}
                className={styles.image}
              />
              <div
                className={`${styles.cornerDecor} ${
                  styles[item.corner]
                }`}
              />
            </div>
            <div className={styles.textWrapper}>
              <h2>{item.heading}</h2>
              {item.paragraph && <p>{item.paragraph}</p>}
              {item.list && (
                <ul>
                  {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              <a href="#">
                Learn More <span>→</span>
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ServiceSection;
