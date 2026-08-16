import "./PlaceholderImage.css";

const PALETTE = ["#062B66", "#123F86", "#0E3A78", "#1A4A96"];

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function initials(label) {
  return label
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Deterministic placeholder used everywhere a real photo would normally go.
 * Swap the `<PlaceholderImage>` usage for a real <img src="/images/..."/>
 * once actual school photography is available — image paths are already
 * defined in the data files under /public/images.
 */
export default function PlaceholderImage({ label, ratio = "4/3", className = "" }) {
  const idx = hashString(label) % PALETTE.length;
  const color = PALETTE[idx];
  return (
    <div
      className={`placeholder-img ${className}`}
      style={{ "--ph-ratio": ratio, "--ph-color": color }}
      role="img"
      aria-label={label}
    >
      <svg viewBox="0 0 100 60" className="placeholder-img__pattern" preserveAspectRatio="none" aria-hidden="true">
        <rect width="100" height="60" fill={color} />
        <circle cx="86" cy="10" r="16" fill="#F5B400" opacity="0.18" />
        <path d="M0 46 Q25 30 50 42 T100 34 V60 H0Z" fill="#ffffff" opacity="0.06" />
      </svg>
      <span className="placeholder-img__initials">{initials(label)}</span>
    </div>
  );
}
