import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import CTASection from "../components/CTASection";
import PlaceholderImage from "../components/PlaceholderImage";
import { IconTarget, IconCompassAlt } from "../components/Icons";
import { IconLeaf, IconShield, IconHeart, IconCheck } from "../components/Icons";
import "./About.css";

const VALUES = [
  { icon: <IconHeart />, title: "Compassion", description: "We treat every student and family with warmth and respect." },
  { icon: <IconCheck />, title: "Integrity", description: "We hold ourselves to honest, consistent standards." },
  { icon: <IconShield />, title: "Discipline", description: "Structure and consistency that help students thrive." },
  { icon: <IconLeaf />, title: "Growth", description: "We nurture curiosity and lifelong love of learning." },
];

const STATS = [
  { value: "20+", label: "Qualified Teachers" },
  { value: "500+", label: "Happy Students" },
  { value: "15+", label: "Years of Excellence" },
  { value: "30+", label: "Awards & Achievements" },
  { value: "1", label: "Great Campus" },
];

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="Learn about G-BIRAT STUDY's vision, mission and the people behind our school in Biratnagar, Nepal."
      />
      <PageHero
        eyebrow="About Us"
        title="Nurturing Minds. Building Futures."
        subtitle="Get to know the story, people and values behind G-BIRAT STUDY."
      />

      {/* Who we are */}
      <section className="section">
        <div className="container split">
          <div className="split__media">
            <PlaceholderImage label="G-BIRAT STUDY Community" ratio="4/3.4" />
          </div>
          <div className="split__body">
            <span className="eyebrow">Who We Are</span>
            <h2>A School Rooted in Biratnagar</h2>
            <p>
              G-BIRAT STUDY was founded to give the children of Biratnagar
              access to an education that is both academically strong and
              deeply human. We serve students from Montessori through Grade
              10, guiding each one through a structured, caring learning
              journey.
            </p>
            <p>
              Our teachers, staff and leadership work as one team with a
              shared belief: every child can succeed when given the right
              support, structure and encouragement.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section--light">
        <div className="container">
          <div className="grid grid--2">
            <div className="value-card" style={{ textAlign: "left", padding: "36px" }}>
              <span className="value-card__icon"><IconTarget /></span>
              <h3 style={{ fontSize: "20px" }}>Our Vision</h3>
              <p style={{ fontSize: "15px" }}>
                To be Biratnagar's most trusted school, known for graduating
                confident, capable and compassionate young people.
              </p>
            </div>
            <div className="value-card" style={{ textAlign: "left", padding: "36px" }}>
              <span className="value-card__icon"><IconCompassAlt /></span>
              <h3 style={{ fontSize: "20px" }}>Our Mission</h3>
              <p style={{ fontSize: "15px" }}>
                To deliver a balanced education that develops academic
                ability, character and life skills in every student we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's message */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="A Word From Our Principal" title="Principal's Message" />
          <div className="principal">
            <PlaceholderImage label="Ramesh Adhikari" ratio="1/1" />
            <div>
              <p className="principal__quote">
                "At G-BIRAT STUDY, we believe education is about more than
                exam results — it is about shaping character, curiosity and
                confidence. Every day, our team works to give each child the
                foundation they need to lead tomorrow."
              </p>
              <span className="principal__name">Mr. Ramesh Adhikari</span>
              <span className="principal__role">Principal, G-BIRAT STUDY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="What We Stand For" title="Our Values" />
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <span className="value-card__icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School at a glance */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="School at a Glance" title="G-BIRAT STUDY in Numbers" />
          <div className="grid grid--5">
            {STATS.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Come See Our Campus"
        subtitle="We'd love to show your family around G-BIRAT STUDY. Get in touch to schedule a visit."
      />
    </>
  );
}
