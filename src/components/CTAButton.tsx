import { Link } from 'react-router-dom';
import styles from './CTAButton.module.css';

type CTAButtonProps = {
  label: string;
  href?: string;
  asButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const CTAButton = ({ label, href = '#', asButton = false, type = 'button' }: CTAButtonProps) => {
  if (asButton) {
    return (
      <button className={styles.button} type={type}>
        {label}
      </button>
    );
  }

  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a className={styles.button} href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className={styles.button} to={href}>
      {label}
    </Link>
  );
};

export default CTAButton;
