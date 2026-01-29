import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

type HeaderProps = {
  companyName: string;
  logoImage: string;
  slogan?: string;
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Engineering', path: '/software-development' },
  { label: 'Training', path: '/training' },
  { label: 'Blog', path: '/blog' },
  { label: 'Our Team', path: '/who-we-are' },
  { label: 'Contact', path: '/contact' }
];

const Header = ({ companyName, logoImage, slogan = 'Systems that learn. Teams that grow.' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        {logoImage ? (
          <img className={styles.logoImage} src={logoImage} alt={companyName} />
        ) : (
          <span className={styles.companyName}>{companyName}</span>
        )}
        <span className={styles.slogan} aria-hidden="true">
          {slogan}
        </span>
      </div>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          {menuOpen ? '×' : '☰'}
        </span>
      </button>
      <nav
        id="primary-navigation"
        className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
        aria-label="Primary"
      >
        <div className={styles.navHeader}>
          <span className={styles.navTitle}>Menu</span>
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
