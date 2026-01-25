import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description: string;
  items?: string[];
  icon?: ReactNode;
  className?: string;
  href?: string;
};

const ServiceCard = ({ title, description, items, icon, className, href }: ServiceCardProps) => {
  const content = (
    <article className={`${styles.card} ${className ?? ''}`.trim()}>
      <div className={styles.header}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <h3>{title}</h3>
      </div>
      <p className={styles.description}>{description}</p>
      {items && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      className={styles.link}
      to={href}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {content}
    </Link>
  );
};

export default ServiceCard;
