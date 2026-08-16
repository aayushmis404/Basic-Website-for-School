import PageMeta from "../components/PageMeta";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import AnnouncementCard from "../components/AnnouncementCard";
import CTASection from "../components/CTASection";
import HillDivider from "../components/HillDivider";
import PlaceholderImage from "../components/PlaceholderImage";
import { IconBook, IconTeacher, IconBuilding, IconHeart, IconTarget, IconShield, IconUser, IconRocket, IconLeaf } from "../components/Icons";
import { ANNOUNCEMENTS } from "../data/announcements";
import "./Home.css";

const WHY_CHOOSE_US = [
  { icon: <IconBook />, title: "Quality Education", description: "A curriculum focused on real understanding, not memorisation." },
  { icon: <IconTeacher />, title: "Experienced Faculty", description: "Dedicated, qualified teachers who know every student by name." },
  { icon: <IconBuilding />, title: "Modern Facilities", description: "Smart classrooms, labs and a library built for active learning." },
  { icon: <IconHeart />, title: "Holistic Development", description: "Academics balanced with sports, arts and moral education." },
];

const PILLARS = [
  { icon: <IconTarget />, title: "Focus on Excellence" },
  { icon: <IconShield />, title: "Safe Environment" },
  { icon: <IconUser />, title: "Individual Attention" },
  { icon: <IconRocket />, title: "Future Ready" },
  { icon: <IconLeaf />, title: "Moral Values" },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Home"
        description="G-BIRAT STUDY is a leading school in Biratnagar, Nepal, guiding students from Montessori through Grade 10 with quality education and strong values."
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__body">
            <span className="eyebrow">Biratnagar, Nepal</span>
            <h1>Welcome to G-BIRAT STUDY</h1>
            <p>A place where every child is inspired to learn, grow and succeed.</p>
            <div className="hero__actions">
              <Button to="/about" variant="primary">Discover More</Button>
              <Button to="/admission-process" variant="outline">Admission Open</Button>
            </div>
          </div>
          <div className="hero__media">
            <PlaceholderImage label="G-BIRAT STUDY Students" ratio="4/3.2" />
            <div className="hero__badge">
              <span className="hero__badge-icon"><IconTeacher /></span>
              <div>
                <strong>20+</strong>
                <span>Qualified Teachers</span>
              </div>
            </div>
          </div>
        </div>
        <HillDivider tone="light" />
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Why Families Choose Us"
            title="Why Choose Us"
            subtitle="Everything at G-BIRAT STUDY is designed around one goal: helping your child thrive."
          />
          <div className="grid grid--4">
            {WHY_CHOOSE_US.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* About Our School */}
      <section className="section section--light">
        <div className="container split">
          <div className="split__media">
            <PlaceholderImage label="G-BIRAT STUDY Campus" ratio="4/3.4" />
          </div>
          <div className="split__body">
            <span className="eyebrow">About Our School</span>
            <h2>Nurturing Minds. Building Futures.</h2>
            <p>
              For over 15 years, G-BIRAT STUDY has guided children through the
              early, formative years of their education. From Montessori
              through Grade 10, our teachers combine academic rigor with
              genuine care, helping every student build the confidence to
              lead.
            </p>
            <p>
              Our campus in Biratnagar is designed as a safe, welcoming space
              where curiosity is encouraged and every achievement, big or
              small, is celebrated.
            </p>
            <Button to="/about" variant="ghost">Learn More About Us</Button>
          </div>
        </div>
      </section>

      {/* Why choose G-BIRAT STUDY */}
      <section className="section section--navy">
        <div className="container">
          <SectionTitle
            eyebrow="What Sets Us Apart"
            title="Why Choose G-BIRAT STUDY"
            subtitle="Five commitments that guide everything we do."
          />
          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.title}>
                <span className="pillar__icon">{p.icon}</span>
                <h3>{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section" id="announcements">
        <div className="container">
          <SectionTitle
            eyebrow="Stay Updated"
            title="Latest Announcements"
            subtitle="News and updates from around our campus."
          />
          <div className="grid grid--3">
            {ANNOUNCEMENTS.map((a) => (
              <AnnouncementCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
