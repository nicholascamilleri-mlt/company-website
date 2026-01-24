import SectionLayout from '../components/SectionLayout';
import ServiceCard from '../components/ServiceCard';
import styles from './Training.module.css';

const Training = () => {
  return (
    <main>
      <SectionLayout
        title="Training & Education"
        subtitle="Practical learning pathways that build capability across teams."
      >
        <div className={styles.heroCopy}>
          <p>
            TekNLabs training programs are designed for real-world delivery. We balance theory with hands-on
            practice, so teams gain confidence applying new skills on active projects.
          </p>
        </div>
        <div className={styles.grid}>
          <ServiceCard
            title="Courses"
            description="Structured learning modules led by experienced instructors."
            items={["Modern web development", "Cloud foundations", "Data engineering essentials"]}
          />
          <ServiceCard
            title="Learning Paths"
            description="Role-based journeys that build depth across multiple skill areas."
            items={["Engineer growth tracks", "Product and delivery pathways", "Leadership enablement"]}
          />
          <ServiceCard
            title="Benefits"
            description="Programs that strengthen capability and improve delivery outcomes."
            items={["Immediate application", "Custom team cohorts", "Measured progress"]}
          />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Training;
