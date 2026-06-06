import styles from './Footer.module.css';

type FooterProps = {
  companyName: string;
  tagline: string;
  phoneNumber: string;
  phoneHref: string;
};

const Footer = ({ companyName, tagline, phoneNumber, phoneHref }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.companyName}>{companyName}</p>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.contact}>
          Call <a href={phoneHref}>{phoneNumber}</a>
        </p>
        <p className={styles.tradeName}>
          Teknilabs trades under Geeky Kids (10206319).
        </p>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
