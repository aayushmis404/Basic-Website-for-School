import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Consistent button used across the site.
 * Renders a <Link> when `to` is provided, an <a> when `href` is provided,
 * otherwise a native <button>.
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
