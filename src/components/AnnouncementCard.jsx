import "./AnnouncementCard.css";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

export default function AnnouncementCard({ date, title, excerpt }) {
  return (
    <article className="announcement-card">
      <span className="announcement-card__date">{formatDate(date)}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
