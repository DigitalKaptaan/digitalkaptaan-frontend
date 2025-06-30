import React from "react";
import contact from "@/styles/contactus.module.css";
export type Props = {
  data: {
    _id: string;
    address: string;
    addressHeader: string;
    addressIcon: string;
    countryCode: string;
    phoneNumber: string;
    phoneHeader: string;
    phoneIcon: string;
    email: string;
    emailHeader: string;
    emailIcon: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
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
    <div className={contact.contact_info}>{info}</div>
  </div>
);

const GetinTouch = (props: Props) => {
  const { data } = props;

  return (
    <section className={contact.body_wrapper}>
      <div className={contact.contact_section}>
        <div className={contact.contact_tag}>CONTACT US</div>
        <h2 className={contact.contact_heading}>
          Get In <span>Touch</span>
        </h2>

        <div className={contact.contact_cards}>
          <ContactCard
            Icon={data.addressIcon}
            title={data.addressHeader}
            info={data.address}
          />
          <ContactCard
            Icon={data.phoneIcon}
            title={data.phoneHeader}
            info={data.phoneNumber}
          />
          <ContactCard
            Icon={data.emailIcon}
            title={data.emailHeader}
            info={data.email}
          />
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
