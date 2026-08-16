import "./HillDivider.css";

/**
 * Signature visual motif: layered hills with a rising sun, echoing both
 * Nepal's landscape and the "Learn Today, Lead Tomorrow" idea of a new day.
 * Used to transition between sections instead of a plain straight edge.
 */
export default function HillDivider({ flip = false, tone = "light" }) {
  const bg = tone === "light" ? "var(--color-bg-light)" : "var(--color-bg)";
  const far = tone === "light" ? "#dfe8f6" : "#eef3fa";
  const mid = "var(--color-secondary)";
  const near = "var(--color-primary)";

  return (
    <svg
      className={`hill-divider${flip ? " hill-divider--flip" : ""}`}
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="1440" height="140" fill={bg} />
      <circle cx="1240" cy="40" r="26" fill="var(--color-accent)" opacity="0.9" />
      <path d="M0 90 Q 220 20 480 70 T 960 60 T 1440 40 V140 H0 Z" fill={far} />
      <path d="M0 110 Q 260 60 560 100 T 1040 90 T 1440 80 V140 H0 Z" fill={mid} opacity="0.35" />
      <path d="M0 130 Q 300 90 620 120 T 1120 110 T 1440 120 V140 H0 Z" fill={near} opacity="0.9" />
    </svg>
  );
}
