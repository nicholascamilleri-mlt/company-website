import { FiCpu, FiLayers, FiMap, FiUserCheck } from 'react-icons/fi';
import ConsultationOffer from '../components/ConsultationOffer';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import styles from './Consulting.module.css';

const Consulting = () => {
  return (
    <main>
      <Seo
        title="Consulting | TekNiLabs"
        description="Senior-led technology consulting to align strategy, roadmaps, and delivery for lasting outcomes."
      />
      <SectionLayout
        title="Technology Consulting"
        subtitle="Strategic guidance that turns complex decisions into actionable roadmaps for teams and executives."
      >
        <div className={styles.primaryPanel}>
          <p className={styles.primaryTone}>Senior, trusted advisor, enterprise-grade.</p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiLayers />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Digital Transformation for SMEs</span>
                <span className={styles.featureBody}>
                  Helping small businesses modernise legacy systems, integrate platforms like Shopify or Google
                  Workspace, and streamline operations with scalable digital tools.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiCpu />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>AI & Automation</span>
                <span className={styles.featureBody}>
                  Using tools like ChatGPT, Gemini, and Zapier to automate emails, reports, CRM updates, and internal
                  workflows that boost efficiency.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiMap />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Technology Adoption Roadmaps</span>
                <span className={styles.featureBody}>
                  Providing a clear roadmap for technology adoption with defined milestones that keep stakeholders
                  aligned and progress measurable.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiUserCheck />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>CTO-as-a-Service</span>
                <span className={styles.featureBody}>
                  Part-time technical leadership for startups and growing businesses — covering architecture, hiring,
                  scalability, and hands-on product guidance.
                </span>
              </div>
            </li>
          </ul>
          <ConsultationOffer
            className={styles.consultationOffer}
            ctaLabel="Book a free 30-minute conversation"
            ctaHref="/business-technology-roadmap"
          />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Consulting;
