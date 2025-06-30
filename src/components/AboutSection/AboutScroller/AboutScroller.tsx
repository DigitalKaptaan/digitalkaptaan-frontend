import React from "react";
import CountUp from "react-countup";
import about from "@/styles/about.module.css";

type Props = {
  data: { label: string; value: number; color: string; suffix: string }[];
};

const AboutScroller = ({ data }: Props) => {
  return (
    <section className={about.statsSection}>
      {data.map((item, index) => (
        <div key={index} className={about.stat}>
          <h2 className={`${about.value} ${about[item.color]}`}>
            <CountUp
              end={item.value}
              duration={2}
              suffix={item.suffix}
              enableScrollSpy
              scrollSpyOnce
            />
          </h2>
          <p className={about.label}>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutScroller;
