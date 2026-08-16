import HillDivider from "./HillDivider";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow eyebrow--on-dark">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
      <HillDivider tone="light" />
    </section>
  );
}
