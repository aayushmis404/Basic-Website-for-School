import { Link } from "react-router-dom";
import { SCHOOL, FOOTER_QUICK_LINKS, FOOTER_USEFUL_LINKS } from "../data/site";
import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <Logo inverted />
          <p className="footer__desc">{SCHOOL.shortDescription}</p>
          <div className="footer__social">
            <a href={SCHOOL.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href={SCHOOL.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={SCHOOL.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          {/* <h4>Useful Links</h4>
          <ul>
            {FOOTER_USEFUL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul> */}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li>{SCHOOL.address}</li>
            <li>
              <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}>{SCHOOL.phone}</a>
            </li>
            <li>
              <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
            </li>
            <li>{SCHOOL.hours}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 G-BIRAT STUDY. All Rights Reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5H16.5V4.2C16 4.1 15 4 13.9 4 11.5 4 10 5.5 10 8.1v2.4H7.5v3H10V21h3.5z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5.5" width="20" height="13" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5l6 2.5-6 2.5z" fill="currentColor" />
    </svg>
  );
}
