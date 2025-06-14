import React from "react";
import contact from "@/styles/contactus.module.css";
import { ContactIcon, LocationIcon, MailIcon } from "@/assets";

const ContactCard = ({
  Icon,
  title,
  info,
}: {
  Icon: React.ElementType;
  title: string;
  info: string;
}) => (
  <div className={contact.contact_card}>
    <div className={contact.contact_icon}>
      <Icon />
    </div>
    <div className={contact.contact_title}>{title}</div>
    <div
      className={contact.contact_info}
      dangerouslySetInnerHTML={{ __html: info }}
    />
  </div>
);

const GetinTouch = () => {
  return (
    <section className={contact.body_wrapper}>
      <div className={contact.contact_section}>
        <div className={contact.contact_tag}>CONTACT US</div>
        <h2 className={contact.contact_heading}>
          Get In <span>Touch</span>
        </h2>

        <div className={contact.contact_cards}>
          <ContactCard
            Icon={LocationIcon}
            title="Store Location"
            info={`915 Hilldale Lane Maryville, TN<br/>37803, United States`}
          />
          <ContactCard
            Icon={ContactIcon}
            title="Phone Contact"
            info={`+91 386-454-0624 (Toll Free)<br/>+91 386-433-9096`}
          />
          <ContactCard
            Icon={MailIcon}
            title="Email Contact"
            info={`contact.dealer@example.com<br/>servicecenter@domain.com`}
          />
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
