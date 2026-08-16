import { useEffect } from "react";
import PlaceholderImage from "./PlaceholderImage";
import "./Lightbox.css";

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lightbox__backdrop" onClick={onClose} />
      <button className="lightbox__close" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      <button className="lightbox__nav lightbox__nav--prev" aria-label="Previous image" onClick={onPrev}>
        ‹
      </button>
      <div className="lightbox__content">
        <PlaceholderImage label={item.title} ratio="4/3" className="lightbox__image" />
        <p className="lightbox__caption">{item.title}</p>
      </div>
      <button className="lightbox__nav lightbox__nav--next" aria-label="Next image" onClick={onNext}>
        ›
      </button>
    </div>
  );
}
