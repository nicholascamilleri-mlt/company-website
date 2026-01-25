import type { ReactNode } from 'react';
import styles from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description: string;
  items?: string[];
  icon?: ReactNode;
  className?: string;
};

const ServiceCard = ({ title, description, items, icon, className }: ServiceCardProps) => {
  return (
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
};

export default ServiceCard;
