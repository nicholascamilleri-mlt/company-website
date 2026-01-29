import CTAButton from '../components/CTAButton';
import HeroSection from '../components/HeroSection';
import SectionLayout from '../components/SectionLayout';
import Seo from '../components/Seo';
import ServiceCard from '../components/ServiceCard';
import { FiBookOpen, FiCode, FiCompass } from 'react-icons/fi';
import styles from './Home.module.css';

type HomeProps = {
  companyName: string;
  tagline: string;
};

const Home = ({ companyName, tagline }: HomeProps) => {
  return (
    <main>
      <Seo
        title={`${companyName} | ${tagline}`}
        description="TekNiLabs delivers consulting, software development, and training to help teams make confident technology decisions."
      />
      <HeroSection
        title="Get your business technology roadmap"
        description="We analyze your business, identify where technology can save time, and map practical ways to improve operations. AI and automation are part of the mix when they make sense. Book a free 30-minute conversation to walk away with clear next steps."
        ctaLabel="Book a free 30-minute conversation"
        ctaHref="/business-technology-roadmap"
        kicker={companyName}
      />

      <SectionLayout
        title="Focused expertise across three streams"
        subtitle="Every engagement is led with clarity, collaborative delivery, and measurable outcomes."
      >
        <div className={styles.grid}>
          <ServiceCard
            title="Technology Consulting"
            description="Strategic guidance that turns complex decisions into actionable roadmaps for teams and executives."
            items={[
              'Digital transformation for SMEs',
              'AI & automation',
              'Technology adoption roadmaps',
              'CTO-as-a-Service'
            ]}
            icon={<FiCompass />}
            href="/consulting"
          />
          <ServiceCard
            title="Software Development"
            description="Product engineering and delivery support that blends thoughtful architecture with steady execution."
            items={[
              "Discovery to deployment",
              "Modern web platforms (React, Java, Cloud)",
              "MVP and platform development",
              "Integration and automation",
              "Operational readiness"
            ]}
            icon={<FiCode />}
            href="/software-development"
          />
          <ServiceCard
            title="Training & Education"
            description="Hands-on programs for engineers, analysts, and leaders that align learning with real delivery goals."
            items={[
              "Instructor-led cohorts in Virtual LIVE courses.",
              "Team upskilling",
              "Applied workshops",
              "Practical AI training",
              "Role-based learning paths"
            ]}
            icon={<FiBookOpen />}
            href="/training"
          />
        </div>
      </SectionLayout>

      <SectionLayout
        title="A partner built for practical progress"
        subtitle="We combine training, delivery, and advisory services so your teams can move forward with confidence."
      >
        <div className={styles.ctaSection}>
          <p>
            Talk with TekNiLabs to align your goals, prioritize initiatives, and build a delivery plan that fits
            your organization.
          </p>
          <CTAButton label="Start with TekNiLabs" href="/contact" />
        </div>
      </SectionLayout>
    </main>
  );
};

export default Home;
