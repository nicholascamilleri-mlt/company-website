import { FiCpu, FiTarget, FiTool, FiUsers, FiVideo } from 'react-icons/fi';
import SectionLayout from '../components/SectionLayout';
import styles from './Training.module.css';

const Training = () => {
  return (
    <main>
      <SectionLayout
        title="Training & Education"
        subtitle="Hands-on programs for engineers, analysts, and leaders that align learning with real delivery goals."
      >
        <div className={styles.primaryPanel}>
          <p className={styles.primaryTone}>Practical, applied, business-aligned.</p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiVideo />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Instructor-led cohorts in Virtual LIVE courses.</span>
                <span className={styles.featureBody}>
                  Live, guided sessions that keep teams accountable and moving together.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiUsers />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Team upskilling</span>
                <span className={styles.featureBody}>
                  Targeted learning plans that lift entire squads and reduce delivery risk.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiTool />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Applied workshops</span>
                <span className={styles.featureBody}>
                  Hands-on sessions tailored to active initiatives, tooling, and workflows.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiCpu />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Practical AI training</span>
                <span className={styles.featureBody}>
                  Real use cases, prompts, and automations that improve everyday productivity.
                </span>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureIcon} aria-hidden="true">
                <FiTarget />
              </span>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Role-based learning paths</span>
                <span className={styles.featureBody}>
                  Tracks for engineers, analysts, and leaders with measurable outcomes.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </SectionLayout>
    </main>
  );
};

export default Training;
