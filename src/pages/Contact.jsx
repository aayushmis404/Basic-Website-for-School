import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import { IconUser, IconDoc, IconCheck, IconCalendar } from "../components/Icons";
import { SCHOOL } from "../data/site";
import "./Contact.css";

const INFO_CARDS = [
  { icon: <IconUser />, title: "Who Can Apply?", description: "Any student seeking admission from Montessori through Grade 10." },
  { icon: <IconDoc />, title: "Admission Process", description: "A simple five-step process from inquiry to enrollment." },
  { icon: <IconCheck />, title: "Required Documents", description: "Birth certificate, transfer certificate and recent photographs." },
  { icon: <IconCalendar />, title: "Admission Open", description: "Applications are open now for the upcoming academic session." },
];

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Contact & Admission"
        description="Get in touch with G-BIRAT STUDY or start your child's admission inquiry. Find our phone, email, address and office hours."
      />
      <PageHero
        eyebrow="Contact & Admission"
        title="We'd Love to Hear From You"
        subtitle="Reach out with questions or start your child's admission journey today."
      />

      {/* Info cards */}
      <section className="section">
        <div className="container">
          <div className="info-cards">
            {INFO_CARDS.map((c) => (
              <div className="info-card" key={c.title}>
                <span className="info-card__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact details + inquiry form */}
      <section className="section section--light">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionTitle eyebrow="Get in Touch" title="Contact Details" align="left" />
            <div className="contact-detail">
              <span className="contact-detail__icon"><PhoneIcon /></span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}>{SCHOOL.phone}</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><MailIcon /></span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><PinIcon /></span>
              <div>
                <h4>Address</h4>
                <p>{SCHOOL.address}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><IconCalendar /></span>
              <div>
                <h4>Office Hours</h4>
                <p>{SCHOOL.hours}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon"><ShareIcon /></span>
              <div>
                <h4>Social Media</h4>
                <div className="contact-detail__social">
                  <a href={SCHOOL.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
                  <a href={SCHOOL.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
                  <a href={SCHOOL.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><YoutubeIcon /></a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Admission Inquiry" title="Send Us Your Details" align="left" />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section map-section">
        <div className="container">
          <SectionTitle eyebrow="Find Us" title="Our Location" />
          <iframe
            src={SCHOOL.mapEmbedSrc}
            title="G-BIRAT STUDY location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section section--light">
        <div className="container">
          <div className="whatsapp-cta">
            <div className="whatsapp-cta__text">
              <h3>Prefer to Chat on WhatsApp?</h3>
              <p>Message us directly for a quick response to your admission questions.</p>
            </div>
            <Button
              variant="primary"
              className="btn--whatsapp"
              href={`https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent("Hello G-BIRAT STUDY, I would like to know more about admissions.")}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7.2 7-12.5A7 7 0 105 9.5C5 14.8 12 22 12 22z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.1 10.9L15 7M8.1 13.1L15 17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16 4.1 15 4 13.9 4 11.5 4 10 5.5 10 8.1v2.4H7.5v3H10V21h3.5z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5l6 2.5-6 2.5z" fill="currentColor" />
    </svg>
  );
}
