import React from "react";
import styles from "@/styles/Footer.module.css";
import Image from "next/image";

const footerData = [
  {
    heading: "About Us",
    links: [
      { label: "About Agency", href: "#" },
      { label: "About Business", href: "#" },
      { label: "Our Service", href: "#" },
      { label: "Service Details", href: "#" },
    ],
  },
  {
    heading: "Workflow",
    links: [
      { label: "Portfolio 2 Column", href: "#" },
      { label: "Portfolio 3 Column", href: "#" },
      { label: "Portfolio Masonry", href: "#" },
      { label: "Portfolio Details", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Help & Support",
    links: [
      { label: "Support", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Log In", href: "#" },
      { label: "Sign Up", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#2d2640" }}>
      <div className="container">
        <footer className={styles.footer}>
          <div className={styles.footer_container}>
            {/* Logo and Contact */}
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
                <p>925-465-3762</p>
                <p>2627 Park Street, San Francisco, CA</p>
                <p>
                  <a href="mailto:support@droitlab.com">support@droitlab.com</a>
                </p>
              </div>
            </div>

            {/* Dynamic Columns */}
            <div className={styles.footer_wrapper}>
              {footerData.map((section, index) => (
                <div className={styles.footer_column} key={index}>
                  <h3>{section.heading}</h3>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href}>{link.label}</a>
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
