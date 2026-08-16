import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import CTASection from "../components/CTASection";
import PlaceholderImage from "../components/PlaceholderImage";
import { IconTarget, IconChat, IconUser, IconHeart } from "../components/Icons";
import { CLASSES_OFFERED, SUBJECTS, TEACHING_APPROACH } from "../data/academics";
import "./Academics.css";

const APPROACH_ICONS = [<IconTarget />, <IconChat />, <IconUser />, <IconHeart />];

export default function Academics() {
  return (
    <>
      <PageMeta
        title="Academics"
        description="Explore G-BIRAT STUDY's academic programme from Montessori through Grade 10, our curriculum, subjects and teaching approach."
      />
      <PageHero
        eyebrow="Academics"
        title="A Curriculum Built for Real Growth"
        subtitle="From first steps in Montessori to board-ready confidence in Grade 10."
      />

      {/* Classes offered */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Programmes" title="Classes Offered" />
          <div className="grid grid--4">
            {CLASSES_OFFERED.map((c) => (
              <div className="class-card" key={c.id}>
                <span className="class-card__range">{c.range}</span>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section section--light">
        <div className="container split split--reverse">
          <div className="split__media">
            <PlaceholderImage label="G-BIRAT STUDY Curriculum" ratio="4/3.2" />
          </div>
          <div className="split__body">
            <span className="eyebrow">Curriculum</span>
            <h2>A Structured, Progressive Path</h2>
            <p>
              Our curriculum builds skills year over year, following the
              national framework while adding project work, regular
              assessment and close parent communication at every stage.
            </p>
            <p>
              Students move from foundational literacy and numeracy in the
              early years toward subject specialisation and exam readiness by
              Grade 10 — always with an emphasis on genuine understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Core Subjects" title="What Students Learn" />
          <div className="subject-cloud">
            {SUBJECTS.map((s) => (
              <span className="subject-pill" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching approach */}
      <section className="section section--light">
        <div className="container split">
          <div className="split__body">
            <span className="eyebrow">How We Teach</span>
            <h2>Our Teaching Approach</h2>
            <div>
              {TEACHING_APPROACH.map((t, i) => (
                <div className="approach-item" key={t.title}>
                  <span className="approach-item__icon">{APPROACH_ICONS[i]}</span>
                  <div>
                    <h3>{t.title}</h3>
                    <p>{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="split__media">
            <PlaceholderImage label="Interactive Classroom" ratio="4/3.6" />
          </div>
        </div>
      </section>

      <CTASection
        title="Meet the Teachers Behind Our Classrooms"
        subtitle="Get to know the educators guiding our students every day."
        primary={{ label: "Meet Our Team", to: "/team" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
