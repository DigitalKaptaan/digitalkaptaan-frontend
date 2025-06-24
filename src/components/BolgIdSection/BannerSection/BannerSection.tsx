import React from "react";
import Id from "@/styles/id.module.css";
import { formatDate } from "@/utils";

type Props = {
  title: string;
  date: string;
};

const BannerSection = (props: Props) => {
  const { date, title } = props;
  return (
    <div>
      <section className={Id.hero_banner}>
        <div className={Id.hero_content}>
          <h1>{title}</h1>
          <div className={Id.meta_info}>
            <span>📅 {formatDate(new Date(date))}</span>
            {/* <span>👤 Ter@Admin</span> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
