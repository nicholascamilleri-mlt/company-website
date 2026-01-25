import SectionLayout from '../components/SectionLayout';
import styles from './Consulting.module.css';

const Consulting = () => {
  return (
    <main>
      <SectionLayout
        title="Technology Consulting"
        subtitle="Strategic guidance that turns complex decisions into actionable roadmaps for teams and executives."
      >
        <div className={styles.primaryPanel}>
          <p className={styles.primaryTone}>Senior, trusted advisor, enterprise-grade.</p>
          <ul className={styles.featureList}>
            <li>
              <span className={styles.featureTitle}>🧩 Digital Transformation for SMEs</span>
              <span className={styles.featureBody}>
                Helping small businesses modernise legacy systems, integrate platforms like Shopify or Google
                Workspace, and streamline operations with scalable digital tools.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>🤖 AI & Automation</span>
              <span className={styles.featureBody}>
                Using tools like ChatGPT, Gemini, and Zapier to automate emails, reports, CRM updates, and internal
                workflows that boost efficiency.
              </span>
            </li>
            <li>
              <span className={styles.featureTitle}>🧠 CTO-as-a-Service</span>
              <span className={styles.featureBody}>
                Part-time technical leadership for startups and growing businesses — covering architecture, hiring,
                scalability, and hands-on product guidance.
              </span>
            </li>
          </ul>
        </div>
      </SectionLayout>
    </main>
  );
};

export default Consulting;
