import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const footerData = {
    Information: [
      { title: "About Us", url: "/about" },
      { title: "About Zip", url: "/zip" },
      { title: "Privacy Policy", url: "/privacy" },
      { title: "Search", url: "/search" },
      { title: "Terms", url: "/terms" },
      { title: "Orders and Returns", url: "/returns" },
      { title: "Contact Us", url: "/contact" },
      { title: "Advanced Search", url: "/advanced-search" },
      { title: "Newsletter Subscription", url: "/newsletter" },
    ],
    "PC Parts": [
      { title: "CPUs", url: "/cpus" },
      { title: "Add On Cards", url: "/cards" },
      { title: "Hard Drives (Internal)", url: "/drives" },
      { title: "Graphic Cards", url: "/graphics" },
      { title: "Keyboards / Mice", url: "/keyboards" },
      { title: "Cases / Power Supplies / Cooling", url: "/cases" },
      { title: "RAM (Memory)", url: "/ram" },
      { title: "Software", url: "/software" },
      { title: "Speakers / Headsets", url: "/speakers" },
      { title: "Motherboards", url: "/motherboards" },
    ],
    "Desktop PCs": [
      { title: "Custom PCs", url: "/custom-pcs" },
      { title: "Servers", url: "/servers" },
      { title: "MSI All-In-One PCs", url: "/msi-pcs" },
      { title: "HP/Compaq PCs", url: "/hp-pcs" },
      { title: "ASUS PCs", url: "/asus-pcs" },
      { title: "Tecs PCs", url: "/tecs-pcs" },
    ],
    Laptops: [
      { title: "Evryday Use Notebooks", url: "/notebooks" },
      { title: "MSI Workstation Series", url: "/msi-workstation" },
      { title: "MSI Gaming Series", url: "/msi-gaming" },
      { title: "Tablets and Pads", url: "/tablets" },
      { title: "Netbooks", url: "/netbooks" },
      { title: "Infinity Gaming Notebooks", url: "/infinity-gaming" },
    ],
  };

  const address = {
    title: "Address: 1234 Street Adress City Address, 1234",
    phone: "Phones: (00) 1234 5678",
    hours: "We are open: Monday-Thursday: 9:00 AM - 5:30 PM",
    friday: "Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 11:00 AM - 5:00 PM",
    email: "E-mail: shop@email.com",
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.newsletter_content}>
          <div className={styles.newsletter_text}>
            <h2>Sign Up To Our Newsletter.</h2>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div className={styles.newsletter_form}>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className={styles.footer_content}>
        <div className={styles.footer_columns}>
          {Object.entries(footerData).map(([category, items]) => (
            <div key={category} className={styles.footer_column}>
              <h3>{category}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.footer_column}>
            <h3>Address</h3>
            <div className={styles.address_info}>
              <p>{address.title}</p>
              <p>{address.phone}</p>
              <p>{address.hours}</p>
              <p>{address.friday}</p>
              <p>{address.saturday}</p>
              <p>{address.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.social_links}>
          <img src="/assets/icon/paypal.svg" alt="PayPal" />
        </div>

        <div className={styles.payment_methods}>
          <img src="/assets/icon/payment01.svg" alt="Visa" />
          <img src="/assets/icon/payment02.svg" alt="Mastercard" />
          <img src="/assets/icon/payment03.svg" alt="Discover" />
          <img src="/assets/icon/payment04.svg" alt="American Express" />
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2020 Shop Pty. Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
