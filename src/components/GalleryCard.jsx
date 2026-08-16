import PlaceholderImage from "./PlaceholderImage";
import "./GalleryCard.css";

export default function GalleryCard({ item, onOpen }) {
  return (
    <button className="gallery-card" onClick={() => onOpen(item)} aria-label={`View ${item.title}`}>
      <PlaceholderImage label={item.title} ratio="4/3" />
      <span className="gallery-card__overlay">
        <ZoomIcon />
        <span>{item.title}</span>
      </span>
    </button>
  );
}

function ZoomIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
