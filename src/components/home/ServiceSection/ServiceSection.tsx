"use client";
import React from "react";
import styles from "@/styles/service.module.css";
import Image from "next/image";
import Link from "next/link";

type ServiceData = {
  title: string;
  description: string[];
  buttons?: {
    label: string;
    url: string;
  }[];
  imageUrl: string;
};

type Props = {
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
            src={item.imageUrl}
            alt={item.title}
            width={700}
            height={450}
            className={styles.image}
            priority
          />
          {/* <div className={`${styles.cornerDecor} ${styles.bottomRight}`} /> */}
        </div>
        <div className={styles.textWrapper}>
          <h2>{item.title}</h2>
          {item.description?.length > 0 && (
            <ul>
              {item.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {item.buttons?.length ? (
            <div className={styles.buttonWrapper}>
              {item.buttons.map((btn, i) => (
                <Link key={i} href={btn.url}>
                  <span className={styles.linkButton}>{btn.label} →</span>
                </Link>
              ))}
            </div>
          ) : null}
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
          key={item.title || index}
          item={item}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ServiceSection;
