import React from "react";
import Style from "@/styles/OurServices.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  data: {
    headline: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
      button: {
        label: string;
        href: string;
      };
    }[];
  };
};

const feature = (props: Props) => {
  const { data } = props;
  return (
    <div>
      <section className={Style.feature_section}>
        <div className={Style.feature_container}>
          <div className={Style.feature_heading}>
            <h2>{data.headline}</h2>
            <p>{data.description}</p>
          </div>

          <div className={Style.feature_grid}>
            {data.items.map((item, index) => (
              <Link
                href={item.button.href}
                className={Style.feature_card}
                key={index}
              >
                {/* <i className={`${item.icon} ${Style.feature_icon}`}></i> */}
                <Image
                  src={item.icon}
                  width={48}
                  height={48}
                  alt={`Company ${index + 1}`}
                  priority
                  className={`${item.icon} ${Style.feature_icon}`}
                />
                <h3 className={Style.feature_title}>{item.title}</h3>
                <p className={Style.feature_text}>{item.description}</p>
                <span className={Style.feature_link}>{item.button.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default feature;
