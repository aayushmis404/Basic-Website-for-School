import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import { SCHOOL } from "../data/site";
import "./Legal.css";

export default function Terms() {
  return (
    <>
      <PageMeta title="Terms & Conditions" description="Read the terms and conditions for using G-BIRAT STUDY's website." />
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Please read these terms before using our website." />

      <section className="section">
        <div className="container legal-content">
          <p className="legal-content__updated">Last updated: January 2026</p>

          <h2>Acceptance of Terms</h2>
          <p>
            By accessing this website, you agree to these Terms &amp;
            Conditions. If you do not agree with any part of these terms,
            please do not use this website.
          </p>

          <h2>Purpose of This Website</h2>
          <p>
            This website provides general information about G-BIRAT STUDY,
            including our academic programmes, campus, staff and admission
            process. It is intended for informational purposes and does not
            include any student, teacher or admin login system.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We aim to keep the content on this website accurate and current,
            including announcements, admission details and contact
            information. However, we recommend contacting the school office
            directly to confirm time-sensitive details such as fees, exact
            dates, or seat availability.
          </p>

          <h2>Admission Inquiries</h2>
          <p>
            Submitting the inquiry form on our Contact &amp; Admission page
            does not guarantee admission. All applications are subject to
            seat availability, document verification and, where applicable, a
            student interaction/assessment.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The G-BIRAT STUDY name, logo and website content are the property
            of the school. Content may not be copied or reused for commercial
            purposes without written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            G-BIRAT STUDY is not liable for any damages arising from the use
            of, or inability to use, this website, including reliance on
            information provided here.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about these terms can be directed to{" "}
            <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a> or{" "}
            {SCHOOL.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
