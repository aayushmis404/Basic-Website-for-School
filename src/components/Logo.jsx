import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className={`logo${inverted ? " logo--inverted" : ""}`} aria-label="G-BIRAT STUDY home">
      <svg className="logo__mark" width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <path d="M23 2L43 12V22C43 32.6 34.8 41.9 23 44C11.2 41.9 3 32.6 3 22V12L23 2Z" fill="#062B66" />
        <path d="M23 2L43 12V22C43 32.6 34.8 41.9 23 44V2Z" fill="#123F86" />
        <path d="M13 24L20 30L33 16" stroke="#F5B400" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">G-BIRAT STUDY</span>
        <span className="logo__tagline">Learn Today, Lead Tomorrow</span>
      </span>
    </Link>
  );
}
