import { useMemo, useState, type ChangeEvent } from 'react';
import CTAButton from '../components/CTAButton';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import { FiClock, FiCompass, FiFileText, FiSmile } from 'react-icons/fi';
import styles from './BusinessTechnologyRoadmap.module.css';

const BusinessTechnologyRoadmap = () => {
  const improvements = useMemo(
    () => [
      'Automate repetitive admin tasks',
      'Centralize customer and project data',
      'Improve team handoffs between departments',
      'Get real-time visibility into operations',
      'Reduce manual reporting and spreadsheets',
      'Speed up approvals and decision cycles',
      'Make onboarding faster and more consistent',
      'Increase accuracy in billing and invoicing',
      'Streamline inventory or resource tracking',
      'Create a better client self-service experience',
      'Integrate critical tools to reduce context switching',
      'Strengthen data security and access controls',
    ],
    []
  );
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([]);
  const maxSelections = 3;
  const selectionLimitReached = selectedImprovements.length >= maxSelections;

  const handleImprovementChange = (value: string) => (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (selectionLimitReached) {
        event.preventDefault();
        return;
      }
      setSelectedImprovements((prev) => [...prev, value]);
      return;
    }
    setSelectedImprovements((prev) => prev.filter((item) => item !== value));
  };

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
              <legend>Top improvements you want from technology (choose up to 3)</legend>
              <p className={styles.helperText} id="improvements-helper">
                Select up to {maxSelections}. We will prioritize these in your roadmap.
              </p>
              <div className={styles.checkboxList} role="group" aria-describedby="improvements-helper">
                {improvements.map((item) => {
                  const isChecked = selectedImprovements.includes(item);
                  const isDisabled = !isChecked && selectionLimitReached;
                  return (
                    <label key={item} className={styles.checkboxItem}>
                      <input
                        type="checkbox"
                        name="improvements"
                        value={item}
                        checked={isChecked}
                        onChange={handleImprovementChange(item)}
                        disabled={isDisabled}
                      />
                      <span className={styles.checkboxLabel}>{item}</span>
                    </label>
                  );
                })}
              </div>
              <input
                className={styles.hiddenInput}
                type="text"
                name="selectedImprovements"
                value={selectedImprovements.join(', ')}
                onChange={() => {}}
                required
                aria-hidden="true"
                tabIndex={-1}
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
