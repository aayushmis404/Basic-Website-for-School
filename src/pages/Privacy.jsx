import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import { SCHOOL } from "../data/site";
import "./Legal.css";

export default function Privacy() {
  return (
    <>
      <PageMeta title="Privacy Policy" description="Read G-BIRAT STUDY's privacy policy on how we handle information shared with us." />
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we handle the information you share with us." />

      <section className="section">
        <div className="container legal-content">
          <p className="legal-content__updated">Last updated: January 2026</p>

          <h2>Overview</h2>
          <p>
            G-BIRAT STUDY ("we", "our", "the school") respects the privacy of
            visitors to our website and families who contact us. This policy
            explains what information we collect, how it's used, and how it's
            protected. This website is an informational, public-facing site —
            it does not include a login system, and it does not store data in
            a database.
          </p>

          <h2>Information We Collect</h2>
          <p>When you use our admission inquiry form, we ask for:</p>
          <ul>
            <li>Parent/guardian name and student name</li>
            <li>Phone number and email address</li>
            <li>Grade applying for, and any message you choose to share</li>
          </ul>
          <p>
            This information is sent directly to our school email address or
            WhatsApp — it is never stored on this website or in any database
            connected to it.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Information submitted through our inquiry form is used solely to
            respond to your admission query, follow up on the application
            process, and share relevant updates about G-BIRAT STUDY. We do
            not sell or rent your information to third parties.
          </p>

          <h2>Cookies & Analytics</h2>
          <p>
            This website does not use tracking cookies or third-party
            advertising scripts. We may use basic, privacy-respecting
            analytics to understand overall site traffic and improve the
            visitor experience.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website links to third-party services such as Google Maps and
            WhatsApp. These services have their own privacy policies, and we
            encourage you to review them separately.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this policy, please contact us at{" "}
            <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a> or call{" "}
            {SCHOOL.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
