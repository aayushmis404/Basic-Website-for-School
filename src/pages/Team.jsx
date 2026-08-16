import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";
import CTASection from "../components/CTASection";
import { LEADERSHIP, TEACHING_STAFF, SUPPORT_STAFF } from "../data/team";

export default function Team() {
  return (
    <>
      <PageMeta
        title="Our Team"
        description="Meet the leadership, teaching team and support staff at G-BIRAT STUDY, Biratnagar."
      />
      <PageHero
        eyebrow="Our Team"
        title="The People Behind G-BIRAT STUDY"
        subtitle="Dedicated educators and staff working together for every student's success."
      />

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="School Leadership" title="Leadership Team" />
          <div className="grid grid--3">
            {LEADERSHIP.map((person) => (
              <TeamCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching team */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Educators" title="Teaching Team" />
          <div className="grid grid--3">
            {TEACHING_STAFF.map((person) => (
              <TeamCard key={person.name} {...person} size="sm" />
            ))}
          </div>
        </div>
      </section>

      {/* Support staff */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Behind the Scenes" title="Support Staff" />
          <div className="grid grid--4">
            {SUPPORT_STAFF.map((person) => (
              <TeamCard key={person.name} {...person} size="sm" />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Join Our Team?"
        subtitle="We're always glad to hear from passionate educators. Reach out to learn more."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "About Our School", to: "/about" }}
      />
    </>
  );
}
