import {
  FiActivity,
  FiBookOpen,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayers,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';
import CTAButton from '../components/CTAButton';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import styles from './Training.module.css';

const Training = () => {
  return (
    <main>
      <Seo
        title="Training & Education | TekNiLabs"
        description="Practical, business-focused training led by delivery practitioners, covering AI, automation, and software skills that build internal capability and improve outcomes."
      />
      <SectionLayout
        title="Training & Education"
        subtitle="Practical training led by industry practitioners, aligned with real delivery experience."
      >
        <div className={styles.primaryPanel}>
          <div className={styles.areaGrid}>
            <article className={styles.areaCard}>
              <span className={styles.areaIcon} aria-hidden="true">
                <FiCpu />
              </span>
              <div>
                <h3>AI & Automation Training</h3>
                <p>
                  Practical training on using AI tools to improve workflows, decision-making, and
                  operations.
                </p>
              </div>
            </article>
            <article className={styles.areaCard}>
              <span className={styles.areaIcon} aria-hidden="true">
                <FiCode />
              </span>
              <div>
                <h3>Python Programming</h3>
                <p>
                  Real-world automation, data handling, scripting, and business applications that
                  teams can use immediately.
                </p>
              </div>
            </article>
            <article className={styles.areaCard}>
              <span className={styles.areaIcon} aria-hidden="true">
                <FiLayers />
              </span>
              <div>
                <h3>JavaScript & Web Development</h3>
                <p>
                  Training for building modern, interactive websites and internal tools that support
                  daily work.
                </p>
              </div>
            </article>
            <article className={styles.areaCard}>
              <span className={styles.areaIcon} aria-hidden="true">
                <FiBookOpen />
              </span>
              <div>
                <h3>AI Productivity for Professionals</h3>
                <p>
                  Use AI for research, writing, planning, reporting, and client work with clear,
                  repeatable processes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout
        title="Delivery formats"
        subtitle="Flexible options that match how your team works."
      >
        <div className={styles.primaryPanel}>
          <div className={styles.formatGrid}>
            <article className={styles.formatCard}>
              <span className={styles.formatIcon} aria-hidden="true">
                <FiUsers />
              </span>
              <div>
                <h3>1:1 coaching</h3>
                <p>Focused support to remove blockers and build confidence quickly.</p>
              </div>
            </article>
            <article className={styles.formatCard}>
              <span className={styles.formatIcon} aria-hidden="true">
                <FiActivity />
              </span>
              <div>
                <h3>Small group workshops</h3>
                <p>Hands-on sessions tailored to your workflows and tools.</p>
              </div>
            </article>
            <article className={styles.formatCard}>
              <span className={styles.formatIcon} aria-hidden="true">
                <FiLayers />
              </span>
              <div>
                <h3>Team upskilling programmes</h3>
                <p>Structured learning that builds consistent capability across roles.</p>
              </div>
            </article>
            <article className={styles.formatCard}>
              <span className={styles.formatIcon} aria-hidden="true">
                <FiCpu />
              </span>
              <div>
                <h3>Custom in-house training</h3>
                <p>Designed around your stack, data, and business priorities.</p>
              </div>
            </article>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout
        title="Outcomes that matter"
        subtitle="We focus on measurable impact, not theory."
      >
        <div className={styles.primaryPanel}>
          <div className={styles.outcomeGrid}>
            <article className={styles.outcomeCard}>
              <span className={styles.outcomeIcon} aria-hidden="true">
                <FiActivity />
              </span>
              <div>
                <h3>Save time</h3>
                <p>Automate repetitive work and shorten delivery cycles.</p>
              </div>
            </article>
            <article className={styles.outcomeCard}>
              <span className={styles.outcomeIcon} aria-hidden="true">
                <FiCheckCircle />
              </span>
              <div>
                <h3>Improve quality</h3>
                <p>Consistent practices that reduce rework and errors.</p>
              </div>
            </article>
            <article className={styles.outcomeCard}>
              <span className={styles.outcomeIcon} aria-hidden="true">
                <FiLayers />
              </span>
              <div>
                <h3>Reduce manual effort</h3>
                <p>Clear workflows that move work forward with less friction.</p>
              </div>
            </article>
            <article className={styles.outcomeCard}>
              <span className={styles.outcomeIcon} aria-hidden="true">
                <FiTrendingUp />
              </span>
              <div>
                <h3>Build internal capability</h3>
                <p>Teams that can operate, improve, and scale with confidence.</p>
              </div>
            </article>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout
        title="How training connects to delivery"
        subtitle="Training is aligned with TekNiLabs consulting and development services."
      >
        <div className={styles.connectPanel}>
          <p>
            We train teams on the same methods and systems we use in consulting and software delivery.
            That means your training is practical, aligned to real projects, and designed to improve
            outcomes quickly.
          </p>
        </div>
      </SectionLayout>

      <SectionLayout
        title="Ready to upskill your team?"
        subtitle="Tell us what you need and we will recommend a clear training plan."
      >
        <div className={styles.ctaCard}>
          <p>
            Share your goals, roles, and timelines. We will shape a programme that fits your team and
            delivers practical, measurable results.
          </p>
          <CTAButton label="Discuss training needs" href="/contact" />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Training;
