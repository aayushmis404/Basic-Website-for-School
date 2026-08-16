import Button from "./Button";
import "./CTASection.css";

export default function CTASection({
  title = "Admissions Open for New Academic Session",
  subtitle = "Give your child a strong start at G-BIRAT STUDY. Seats are limited — begin your application today.",
  primary = { label: "Apply Now", to: "/admission-process" },
  secondary = { label: "Contact Us", to: "/contact" },
}) {
  return (
    <section className="cta-section">
      <div className="container cta-section__inner">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="cta-section__actions">
          {primary && (
            <Button to={primary.to} variant="primary">
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button to={secondary.to} variant="outline">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
