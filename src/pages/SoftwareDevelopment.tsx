import SectionLayout from '../components/SectionLayout';
import styles from './SoftwareDevelopment.module.css';

const SoftwareDevelopment = () => {
  return (
    <main>
      <SectionLayout
        title="Software Development"
        subtitle="Product engineering and delivery support that blends thoughtful architecture with steady execution."
      >
        <div className={styles.primaryPanel}>
          <p className={styles.primaryTone}>Reliable, delivery-focused, scalable.</p>
          <ul className={styles.featureList}>
            <li>
              <span className={styles.featureTitle}>🧭 Discovery to deployment</span>
              <span className={styles.featureBody}>
                Full lifecycle delivery from product definition through launch and iteration.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>⚙️ Modern web platforms (React, Java, Cloud)</span>
              <span className={styles.featureBody}>
                Stable stacks chosen for performance, security, and long-term maintainability.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>🚀 MVP and platform development</span>
              <span className={styles.featureBody}>
                Rapid MVP delivery with a clear path to product and platform scale.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>🔗 Integration and automation</span>
              <span className={styles.featureBody}>
                Connect systems, APIs, and workflows to reduce manual effort and risk.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>✅ Operational readiness</span>
              <span className={styles.featureBody}>
                Observability, documentation, and handover support for steady operations.
              </span>
            </li>
          </ul>
        </div>
      </SectionLayout>
    </main>
  );
};

export default SoftwareDevelopment;
