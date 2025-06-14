"use client";
import React from "react";
import styles from "@/styles/service.module.css";
import Image from "next/image";
import Link from "next/link";

type ServiceData = {
  _id: string;
  title: string;
  image: string;
  buttons: {
    label: string;
    link: string;
    _id: string;
  }[];
  points: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  type: string;
  data: ServiceData[];
};

const ServiceCard = ({
  item,
  reverse,
}: {
  item: ServiceData;
  reverse: boolean;
}) => {
  return (
    <section className={styles.serviceSection}>
      <div className={`${styles.serviceBox} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={item.image}
            alt={item.title}
            width={700}
            height={450}
            className={styles.image}
            priority
          />
          <div className={`${styles.cornerDecor} ${styles.bottomRight}`} />
        </div>
        <div className={styles.textWrapper}>
          <h2>{item.title}</h2>
          {item.points?.length > 0 && (
            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          {item.buttons?.[0] && (
            <Link href={item.buttons[0].link}>
              <span>{item.buttons[0].label} →</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ data }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <ServiceCard
          key={item._id || index}
          item={item}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ServiceSection;
