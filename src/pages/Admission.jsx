import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { IconDoc, IconCheck } from "../components/Icons";
import "./Admission.css";

const STEPS = [
  { title: "Fill Inquiry Form", description: "Submit the admission inquiry form with your child's details." },
  { title: "Submit Documents", description: "Provide the required documents for verification." },
  { title: "Interaction / Assessment", description: "A short interaction to understand your child's needs." },
  { title: "Admission Confirmation", description: "Receive confirmation of your child's admission." },
  { title: "Fee Payment & Enrollment", description: "Complete fee payment to secure enrollment." },
];

const DOCUMENTS = [
  "Birth certificate (original + copy)",
  "Recent passport-size photographs",
  "Transfer certificate (if applicable)",
  "Previous academic report (if applicable)",
  "Immunization record (for Montessori)",
  "Parent/guardian citizenship copy",
];

const NOTES = [
  "Seats are allocated on a first-come, first-served basis within each grade.",
  "Admission is subject to seat availability and a brief interaction with the student.",
  "Fees must be paid within the timeline given at confirmation to retain the seat.",
  "Contact the school office directly for scholarship or sibling-discount queries.",
];

export default function Admission() {
  return (
    <>
      <PageMeta
        title="Admission Process"
        description="Step-by-step admission process for G-BIRAT STUDY, Biratnagar — from inquiry form to enrollment."
      />
      <PageHero
        eyebrow="Admission Process"
        title="Your Path to G-BIRAT STUDY"
        subtitle="A simple, five-step process designed to make admission straightforward for every family."
      />

      {/* 5-step process */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="Five Steps to Enrollment" />
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="step__number">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can apply */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Eligibility" title="Who Can Apply?" />
          <p style={{ maxWidth: 720, fontSize: 15.5 }}>
            G-BIRAT STUDY welcomes applications for Montessori (ages 3–5)
            through Grade 10. Students transferring from other schools are
            welcome to apply at any grade level, subject to seat availability
            and a short academic interaction.
          </p>
        </div>
      </section>

      {/* Required documents */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Paperwork" title="Required Documents" />
          <div className="doc-list">
            {DOCUMENTS.map((d) => (
              <div className="doc-item" key={d}>
                <IconDoc width={20} height={20} />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Please Note" title="Important Notes" />
          <ul className="notes-list" style={{ maxWidth: 720 }}>
            {NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ready to begin */}
      <section className="section">
        <div className="container begin-panel">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Let's Get Started</span>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>Ready to Begin?</h2>
          <p>
            Start your child's journey with G-BIRAT STUDY today. Our team is
            ready to guide you through every step of the process.
          </p>
          <div className="begin-panel__actions">
            <Button to="/contact" variant="primary">
              <IconCheck width={18} height={18} /> Apply Now
            </Button>
            <Button href="/G-BIRAT-STUDY-Admission-Form.pdf" download variant="ghost">
              Download Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
