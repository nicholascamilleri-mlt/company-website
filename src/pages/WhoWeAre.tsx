import { FiAward, FiBookOpen, FiBriefcase, FiCheckCircle, FiCpu, FiTrendingUp, FiUser, FiUsers } from 'react-icons/fi';
import SectionLayout from '../components/SectionLayout';
import styles from './WhoWeAre.module.css';

const leadershipTeam = [
  {
    icon: <FiBriefcase aria-hidden="true" />,
    name: 'Nicholas Camilleri',
    title: 'CTO & Principal Consultant',
    bio: [
      'Nicholas has over two decades of experience delivering complex technology platforms within London’s financial services and enterprise sectors, working across leading exchanges, investment banks, asset managers, energy trading organisations, and high-growth fintech startups.',
      'His career includes senior consulting and engineering roles at organisations such as London Stock Exchange Group, Credit Suisse, Standard Chartered Bank, Royal Bank of Scotland, Deutsche Bank, Goldman Sachs Asset Management, and BP, where he contributed to mission-critical risk, margin, market data, regulatory, and trading systems in highly regulated, high-availability environments.',
      'More recently, he has been supporting hedge fund and trading operations through his current role at a top Mayfair, London hedge fund.',
      'As CTO and Principal Consultant, he remains hands-on across architecture, delivery, and client engagement, ensuring every engagement reflects enterprise-grade engineering standards and commercial pragmatism.'
    ]
  },
  {
    icon: <FiUser aria-hidden="true" />,
    name: 'Iveta',
    title: 'Client Success Manager',
    bio: [
      'Iveta leads client engagement and delivery coordination across TekniLabs’ consulting and training programmes. She ensures that projects run smoothly from onboarding through to completion, acting as the primary point of contact for clients and partners.',
      'Her focus is on communication, quality assurance, and long-term relationships — making sure every client receives a consistent, professional, and results-driven experience.'
    ]
  },
  {
    icon: <FiBookOpen aria-hidden="true" />,
    name: 'Tom',
    title: 'Technical Training Lead',
    bio: [
      'Tom leads TekniLabs’ technical training programmes, specialising in hands-on instruction for software engineers, analysts, and early-career technologists.',
      'He designs and delivers practical, skills-focused courses in programming, systems development, and applied computing, ensuring learners gain confidence through real-world projects and guided practice. Tom works closely with clients and tutors to align training delivery with business and academic objectives.'
    ]
  }
];

const values = [
  {
    icon: <FiAward aria-hidden="true" />,
    title: 'Integrity',
    description: 'Straightforward advice, clear commitments, and delivery grounded in trust.'
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: 'Technical excellence',
    description: 'Senior-led engineering, rigorous design, and systems that perform under pressure.'
  },
  {
    icon: <FiCheckCircle aria-hidden="true" />,
    title: 'Practical delivery',
    description: 'Plans that translate into action, with clarity on scope, milestones, and outcomes.'
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: 'Client partnership',
    description: 'Long-term collaboration that aligns teams, stakeholders, and business priorities.'
  },
  {
    icon: <FiTrendingUp aria-hidden="true" />,
    title: 'Measurable outcomes',
    description: 'Clear success metrics that demonstrate impact and continuous improvement.'
  }
];

const WhoWeAre = () => {
  return (
    <main>
      <SectionLayout title="Who We Are">
        <div className={styles.overview}>
          <p>
            TekniLabs is founded and led by experienced practitioners who stay close to every engagement. Our
            leadership team is intentionally focused, supported by a trusted network of specialist partners and
            associates selected for the right blend of expertise and delivery discipline.
          </p>
          <div className={styles.overviewHighlights}>
            <div>
              <h3>Senior oversight</h3>
              <p>Hands-on leadership that keeps strategy, architecture, and delivery aligned.</p>
            </div>
            <div>
              <h3>High-quality delivery</h3>
              <p>Enterprise-grade engineering, training, and operational readiness from day one.</p>
            </div>
            <div>
              <h3>Flexible resourcing</h3>
              <p>Adaptable teams that scale with the exact skills required for each engagement.</p>
            </div>
            <div>
              <h3>Long-term partnerships</h3>
              <p>We prioritise clarity, accountability, and continuity over one-off engagements.</p>
            </div>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout title="Leadership Team" subtitle="Senior practitioners guiding every engagement and client outcome.">
        <div className={styles.teamGrid}>
          {leadershipTeam.map((member) => (
            <article key={member.name} className={styles.teamCard}>
              <div className={styles.teamHeader}>
                <span className={styles.teamIcon}>{member.icon}</span>
                <div className={styles.teamMeta}>
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              </div>
              <div className={styles.teamBio}>
                {member.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionLayout>

      <SectionLayout title="Our Network">
        <div className={styles.network}>
          <p>
            TekniLabs collaborates with a trusted network of associate consultants, engineers, and educators who are
            engaged based on project needs and client outcomes. Every partner is selected for quality, reliability,
            and their ability to deliver alongside our senior leadership team.
          </p>
          <p>
            This model ensures consistent standards, seamless handover, and the flexibility to assemble the right
            expertise without compromising accountability.
          </p>
        </div>
      </SectionLayout>

      <SectionLayout title="Values & Delivery Approach">
        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{value.icon}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionLayout>
    </main>
  );
};

export default WhoWeAre;
