import { SCHOOL } from "../data/site";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <div className="topbar__contact">
          <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`} className="topbar__item">
            <PhoneIcon /> {SCHOOL.phone}
          </a>
          <a href={`mailto:${SCHOOL.email}`} className="topbar__item">
            <MailIcon /> {SCHOOL.email}
          </a>
          <span className="topbar__item topbar__item--location">
            <PinIcon /> {SCHOOL.address}
          </span>
        </div>
        <div className="topbar__social">
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
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" fill="currentColor" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M2 6l10 7 10-7" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7.2 7-12.5A7 7 0 105 9.5C5 14.8 12 22 12 22z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
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
