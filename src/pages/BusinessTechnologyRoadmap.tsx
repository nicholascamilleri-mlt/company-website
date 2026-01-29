import CTAButton from '../components/CTAButton';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import { FiClock, FiCompass, FiFileText, FiSmile } from 'react-icons/fi';
import styles from './BusinessTechnologyRoadmap.module.css';

const BusinessTechnologyRoadmap = () => {
  return (
    <main>
      <Seo
        title="Business Technology Roadmap | TekniLabs"
        description="Share a few details about your business and receive a focused technology roadmap that highlights quick wins, priorities, and near-term delivery steps."
      />
      <SectionLayout
        title="Your business technology roadmap"
        subtitle="We review your goals, identify quick wins, and confirm whether we are a strong fit."
      >
        <div className={styles.layout}>
          <form className={styles.form} aria-label="Business technology roadmap form">
            <label>
              Contact name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" required />
            </label>
            <label>
              Work email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              Role
              <input type="text" name="role" placeholder="Owner, director, operations lead" required />
            </label>
            <fieldset className={styles.fieldset}>
              <legend>Top 3 pain points to improve with technology</legend>
              <input
                type="text"
                name="painPoint1"
                placeholder="Pain point 1"
                required
              />
              <input
                type="text"
                name="painPoint2"
                placeholder="Pain point 2"
                required
              />
              <input
                type="text"
                name="painPoint3"
                placeholder="Pain point 3"
                required
              />
            </fieldset>
            <label>
              Budget range
              <select name="budget" required>
                <option value="">Select a range</option>
                <option value="under-10k">Under $10k</option>
                <option value="10k-25k">$10k–$25k</option>
                <option value="25k-50k">$25k–$50k</option>
                <option value="50k-100k">$50k–$100k</option>
                <option value="100k-plus">$100k+</option>
              </select>
            </label>
            <label>
              Target start date
              <input type="date" name="startDate" required />
            </label>
            <label>
              Anything else we should know?
              <textarea name="notes" rows={4} placeholder="Context, constraints, or urgency." />
            </label>
            <CTAButton label="Request the roadmap" asButton type="submit" />
          </form>
          <div className={styles.details}>
            <h3>What happens next</h3>
            <div className={styles.steps}>
              <article className={styles.stepCard}>
                <span className={styles.stepIcon}>
                  <FiFileText aria-hidden="true" />
                </span>
                <div>
                  <h4>We review your inputs</h4>
                  <p>We map your priorities and highlight the biggest opportunities for impact.</p>
                </div>
              </article>
              <span className={styles.stepArrow} aria-hidden="true" />
              <article className={styles.stepCard}>
                <span className={styles.stepIcon}>
                  <FiCompass aria-hidden="true" />
                </span>
                <div>
                  <h4>You get a tailored roadmap</h4>
                  <p>A clear path of what to improve first, what to keep, and where AI fits best.</p>
                </div>
              </article>
              <span className={styles.stepArrow} aria-hidden="true" />
              <article className={styles.stepCard}>
                <span className={styles.stepIcon}>
                  <FiClock aria-hidden="true" />
                </span>
                <div>
                  <h4>We book a short call</h4>
                  <p>If we are a fit, we schedule a 30-minute session to confirm next steps.</p>
                </div>
              </article>
              <span className={styles.stepArrow} aria-hidden="true" />
              <article className={styles.stepCard}>
                <span className={styles.stepIcon} aria-hidden="true">
                  <FiSmile aria-hidden="true" />
                </span>
                <div>
                  <h4>Typical outcomes</h4>
                  <ul className={styles.outcomesList}>
                    <li>Time saved through streamlined workflows</li>
                    <li>Clear priorities for technology upgrades</li>
                    <li>Realistic timelines and budgets</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
};

export default BusinessTechnologyRoadmap;
