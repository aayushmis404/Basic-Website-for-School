import "./GalleryFilter.css";

export default function GalleryFilter({ categories, active, onChange }) {
  return (
    <div className="gallery-filter" role="tablist" aria-label="Filter gallery by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          className={`gallery-filter__btn${active === cat ? " gallery-filter__btn--active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
