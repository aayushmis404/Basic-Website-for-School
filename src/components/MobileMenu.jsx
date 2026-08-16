import { NavLink } from "react-router-dom";
import { NAV_LINKS, SCHOOL } from "../data/site";
import Button from "./Button";
import "./MobileMenu.css";

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-menu${open ? " mobile-menu--open" : ""}`} aria-hidden={!open}>
      <nav className="mobile-menu__nav" aria-label="Mobile navigation">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={onClose} className={({ isActive }) => (isActive ? "active" : "")}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button to="/admission-process" variant="primary" className="btn--full-mobile" onClick={onClose}>
          Apply Now
        </Button>
        <div className="mobile-menu__contact">
          <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`}>{SCHOOL.phone}</a>
          <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
        </div>
      </nav>
    </div>
  );
}
