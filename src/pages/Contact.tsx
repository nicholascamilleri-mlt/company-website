import { useMemo, useState } from 'react';
import CTAButton from '../components/CTAButton';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import styles from './Contact.module.css';

type ContactProps = {
  companyName: string;
};

const buildMessageTemplate = (previousPath: string | null) => {
  if (!previousPath || previousPath === '/contact') {
    return (
      'Tell us what you are trying to improve and what success looks like.\n' +
      '- Goals or outcomes\n' +
      '- Current challenges or bottlenecks\n' +
      '- Timeline and budget expectations'
    );
  }

  if (previousPath.startsWith('/training')) {
    return (
      'We are interested in training for our team.\n' +
      '- Topics or skills to focus on\n' +
      '- Team size and roles\n' +
      '- Desired outcomes and timeline'
    );
  }

  if (previousPath.startsWith('/consulting')) {
    return (
      'We are looking for consulting support.\n' +
      '- Business goals and current challenges\n' +
      '- Areas where you need clarity or guidance\n' +
      '- Timeline and decision-makers'
    );
  }

  if (previousPath.startsWith('/software-development')) {
    return (
      'We need help with software development.\n' +
      '- What you are building or improving\n' +
      '- Current stack or constraints\n' +
      '- Milestones, timeline, and budget range'
    );
  }

  if (previousPath.startsWith('/blog')) {
    return (
      'We read your insights and want to discuss our needs.\n' +
      '- What stood out from the article\n' +
      '- Areas you want to improve\n' +
      '- Timeline and any constraints'
    );
  }

  if (previousPath.startsWith('/business-technology-roadmap')) {
    return (
      'We would like to discuss our technology roadmap.\n' +
      '- Current processes that need improvement\n' +
      '- Where automation or AI may help\n' +
      '- Timeline and budget expectations'
    );
  }

  return (
    'Tell us what you are trying to improve and what success looks like.\n' +
    '- Goals or outcomes\n' +
    '- Current challenges or bottlenecks\n' +
    '- Timeline and budget expectations'
  );
};

const Contact = ({ companyName }: ContactProps) => {
  const previousPath = useMemo(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    return window.sessionStorage.getItem('previousPath');
  }, []);
  const [message, setMessage] = useState(() => buildMessageTemplate(previousPath));

  return (
    <main>
      <Seo
        title={`Contact | ${companyName}`}
        description="Contact TekNiLabs to discuss consulting, engineering, or training. Share your goals, timelines, and context and receive a clear, practical next step."
      />
      <SectionLayout
        title="Contact"
        subtitle="Tell us about your goals and we will respond with a clear next step."
      >
        <div className={styles.layout}>
          <form className={styles.form} aria-label="Contact form">
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Work email
              <input type="email" name="email" placeholder="you@company.com" required />
            </label>
            <label>
              What can we help with?
              <span className={styles.helper}>
                Share a little context so we can respond with the right next step.
              </span>
              <textarea
                name="message"
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </label>
            <CTAButton label="Send message" asButton type="submit" />
          </form>
          <div className={styles.details}>
            <h3>Contact details</h3>
            <p>
              Email us directly at <strong>hello@teknlabs.com</strong> or share a note using the form.
            </p>
            <p>
              We respond within two business days with a clear next step and a recommended delivery path.
            </p>
            <div className={styles.card}>
              <p className={styles.cardTitle}>{companyName}</p>
              <p>Remote-first delivery across Europe and North America.</p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </main>
  );
};

export default Contact;
