import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

type HeaderProps = {
  companyName: string;
  logoText: string;
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Training', path: '/training' },
  { label: 'Software Development', path: '/software-development' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Contact', path: '/contact' }
];

const Header = ({ companyName, logoText }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logoText}>{logoText}</span>
        <span className={styles.companyName}>{companyName}</span>
      </div>
      <nav className={styles.nav} aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
