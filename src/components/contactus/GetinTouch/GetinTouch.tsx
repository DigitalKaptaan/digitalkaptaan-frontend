import React from "react";
import contact from "@/styles/contactus.module.css";
export type Props = {
  list: {
    _id: string;
    title: string;
    data: string;
    iconPath: string;
    iconContent: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
};

const ContactCard = ({
  Icon,
  title,
  info,
}: {
  Icon: string;
  title: string;
  info: string;
}) => (
  <div className={contact.contact_card}>
    <div
      className={contact.contact_icon}
      dangerouslySetInnerHTML={{ __html: Icon }}
    ></div>
    <div className={contact.contact_title}>{title}</div>
    <div
      className={contact.contact_info}
      dangerouslySetInnerHTML={{ __html: info }}
    />
  </div>
);

const GetinTouch = (props: Props) => {
  const { list } = props;

  return (
    <section className={contact.body_wrapper}>
      <div className={contact.contact_section}>
        <div className={contact.contact_tag}>CONTACT US</div>
        <h2 className={contact.contact_heading}>
          Get In <span>Touch</span>
        </h2>

        <div className={contact.contact_cards}>
          {list.map((item, i) => {
            return (
              <ContactCard
                key={i}
                Icon={item.iconContent}
                title={item.title}
                info={item.data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
