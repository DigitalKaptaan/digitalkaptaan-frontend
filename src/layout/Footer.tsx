import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";

export type FooterNavItem = {
  label: string;
  url: string;
  order: number;
  external?: boolean;
  children: FooterNavItem[];
};

export type FooterNavigation = {
  footer: FooterNavItem[];
  contact: {
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

const Footer = ({ footer, contact }: FooterNavigation) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#2d2640" }}>
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.footer_container}>
            <div className={styles.left_column}>
              <div className={styles.logo}>
                <Image
                  width={100}
                  height={100}
                  src="/white-logo.svg"
                  alt="Terra Logo"
                  className={styles.logo_icon}
                />
              </div>
              <div className={styles.contact}>
                <h3>Call us</h3>
                <a href={`tel:${contact.countryCode}${contact.phoneNumber}`}>
                  {contact.phoneNumber}
                </a>
                <p>{contact.address}</p>
                <p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>

            <div className={styles.footer_wrapper}>
              {footer?.map((section, index) => (
                <div className={styles.footer_column} key={index}>
                  <h3>{section.label}</h3>
                  <ul>
                    {section?.children?.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          {...(link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
