import CTAButton from './CTAButton';
import styles from './ConsultationOffer.module.css';

type ConsultationOfferProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const ConsultationOffer = ({
  title = 'Book a free 30-minute consultancy session',
  description = 'Get expert guidance on your next move, from strategy to delivery. We will outline clear next steps and share practical options tailored to your goals.',
  ctaLabel = 'Claim the free session',
  ctaHref = '/contact',
  className
}: ConsultationOfferProps) => {
  return (
    <div className={`${styles.offer} ${className ?? ''}`.trim()}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Complimentary consultation</p>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <CTAButton label={ctaLabel} href={ctaHref} />
    </div>
  );
};

export default ConsultationOffer;
