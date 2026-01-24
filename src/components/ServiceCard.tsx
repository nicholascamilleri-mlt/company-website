import styles from './ServiceCard.module.css';

type ServiceCardProps = {
  title: string;
  description: string;
  items?: string[];
};

const ServiceCard = ({ title, description, items }: ServiceCardProps) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
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
