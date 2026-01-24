import CTAButton from './CTAButton';
import styles from './HeroSection.module.css';

type HeroSectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  kicker: string;
};

const HeroSection = ({ title, description, ctaLabel, ctaHref, kicker }: HeroSectionProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <CTAButton href={ctaHref} label={ctaLabel} />
      </div>
      <div className={styles.panel} aria-hidden="true">
        <div className={styles.panelInner} />
        <div className={styles.panelAccent} />
      </div>
    </section>
  );
};

export default HeroSection;
