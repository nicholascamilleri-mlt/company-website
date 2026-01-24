import SectionLayout from '../components/SectionLayout';
import ServiceCard from '../components/ServiceCard';
import styles from './Consulting.module.css';

const Consulting = () => {
  return (
    <main>
      <SectionLayout
        title="Technology Consulting"
        subtitle="Clear guidance for strategy, transformation, and advisory needs."
      >
        <div className={styles.heroCopy}>
          <p>
            We help leadership teams translate technology priorities into actionable plans. TekNLabs provides the
            context, facilitation, and analysis needed to move from decisions to delivery.
          </p>
        </div>
        <div className={styles.grid}>
          <ServiceCard
            title="Strategy"
            description="Direction-setting work that aligns technology with business goals."
            items={["Roadmap development", "Portfolio alignment", "Capability assessment"]}
          />
          <ServiceCard
            title="Transformation"
            description="Operational guidance to modernize platforms, teams, and delivery practices."
            items={["Cloud migration planning", "Operating model shifts", "Change enablement"]}
          />
          <ServiceCard
            title="Advisory"
            description="Ongoing support for leadership teams navigating complex decisions."
            items={["Executive briefings", "Vendor evaluation", "Risk management"]}
          />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Consulting;
