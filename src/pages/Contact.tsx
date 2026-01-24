import CTAButton from '../components/CTAButton';
import SectionLayout from '../components/SectionLayout';
import styles from './Contact.module.css';

type ContactProps = {
  companyName: string;
};

const Contact = ({ companyName }: ContactProps) => {
  return (
    <main>
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
              <textarea name="message" rows={5} placeholder="Share a short summary." required />
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
