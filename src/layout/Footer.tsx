import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

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
                <div style={{ position: "relative", width: 40, height: 40 }}>
                  <Image
                    src="/digitalkaptaan_white_logo.svg"
                    alt="digitalkaptaan_logo"
                    fill
                    priority
                  />
                </div>
                <h4 className={styles.logoname}>Digital Kaptaan</h4>
              </div>

              <div className={styles.contact}>
                <h3>Call us</h3>
                <Link
                  href={`tel:${contact.countryCode}${contact.phoneNumber}`}
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  {contact.phoneNumber}
                </Link>
                <p
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  {contact.address}
                </p>
                <p
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
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
                        <Link
                          href={link.url}
                          {...(link.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {link.label}
                        </Link>
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
