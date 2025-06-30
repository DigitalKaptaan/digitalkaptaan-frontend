import React from "react";
import about from "@/styles/about.module.css";

type Props = {
  data: {
    id: string;
    title: string;
    description: string;
  }[];
};

const AboutDetails = ({ data }: Props) => {
  return (
    <div className={about.optimize_section}>
      <div className={about.optimize_wrapper}>
        <div className={about.optimize_features}>
          {data.map(({ description, id, title }, i) => {
            return (
              <div className={about.optimize_item} key={Number(id)}>
                <span className={about.optimize_number}>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
