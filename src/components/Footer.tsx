import styles from './Footer.module.css';

type FooterProps = {
  companyName: string;
  tagline: string;
};

const Footer = ({ companyName, tagline }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.companyName}>{companyName}</p>
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
