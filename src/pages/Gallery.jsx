import { useState, useMemo } from "react";
import PageMeta from "../components/PageMeta";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import GalleryFilter from "../components/GalleryFilter";
import GalleryCard from "../components/GalleryCard";
import Lightbox from "../components/Lightbox";
import PlaceholderImage from "../components/PlaceholderImage";
import { CAMPUS_GALLERY, GALLERY_CATEGORIES, GALLERY_ITEMS } from "../data/gallery";
import "./Gallery.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(
    () => (activeCategory === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === activeCategory)),
    [activeCategory]
  );

  const openItem = (item) => setActiveItem(item);
  const closeItem = () => setActiveItem(null);

  const step = (dir) => {
    const idx = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIdx = (idx + dir + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[nextIdx]);
  };

  return (
    <>
      <PageMeta
        title="Gallery"
        description="Browse photos of G-BIRAT STUDY's campus, classrooms, sports, events and celebrations in Biratnagar, Nepal."
      />
      <PageHero
        eyebrow="Gallery"
        title="Life at G-BIRAT STUDY"
        subtitle="A glimpse into our campus, classrooms and everyday moments."
      />

      {/* Campus gallery */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Campus" title="Campus Gallery" />
          <div className="campus-gallery">
            {CAMPUS_GALLERY.map((item) => (
              <div className="campus-gallery__item" key={item.id}>
                <PlaceholderImage label={item.title} ratio="1/1" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity gallery with filtering */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Moments & Memories" title="Activity Gallery" />
          <GalleryFilter categories={GALLERY_CATEGORIES} active={activeCategory} onChange={setActiveCategory} />

          {filteredItems.length > 0 ? (
            <div className="activity-grid">
              {filteredItems.map((item) => (
                <GalleryCard key={item.id} item={item} onOpen={openItem} />
              ))}
            </div>
          ) : (
            <p className="gallery-empty">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox item={activeItem} onClose={closeItem} onPrev={() => step(-1)} onNext={() => step(1)} />
    </>
  );
}
