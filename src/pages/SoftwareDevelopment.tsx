import SectionLayout from '../components/SectionLayout';
import ServiceCard from '../components/ServiceCard';
import styles from './SoftwareDevelopment.module.css';

const SoftwareDevelopment = () => {
  return (
    <main>
      <SectionLayout
        title="Software Development"
        subtitle="Delivery support from discovery to deployment, tuned for modern teams."
      >
        <div className={styles.heroCopy}>
          <p>
            TekNiLabs partners with organizations to deliver reliable software products. We blend product thinking,
            engineering discipline, and pragmatic delivery to keep teams moving forward.
          </p>
        </div>
        <div className={styles.grid}>
          <ServiceCard
            title="Services"
            description="Balanced support across strategy, design, engineering, and delivery."
            items={["Product discovery", "Full-stack engineering", "Quality assurance"]}
          />
          <ServiceCard
            title="Tech Stack"
            description="Modern, maintainable technologies chosen for long-term stability."
            items={["React + TypeScript", "Node.js + APIs", "Cloud-native infrastructure"]}
          />
          <ServiceCard
            title="Case Studies"
            description="Selected engagements and outcomes will be highlighted here soon."
            items={["Placeholder for upcoming case studies", "Delivery highlights", "Client impact stories"]}
          />
        </div>
      </SectionLayout>
    </main>
  );
};

export default SoftwareDevelopment;
