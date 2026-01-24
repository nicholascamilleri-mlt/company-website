import type { ReactNode } from 'react';
import styles from './SectionLayout.module.css';

type SectionLayoutProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const SectionLayout = ({ title, subtitle, children }: SectionLayoutProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default SectionLayout;
