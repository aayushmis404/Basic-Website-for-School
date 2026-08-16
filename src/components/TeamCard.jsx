import PlaceholderImage from "./PlaceholderImage";
import "./TeamCard.css";

export default function TeamCard({ name, role, bio, size = "md" }) {
  return (
    <article className={`team-card team-card--${size}`}>
      <div className="team-card__photo">
        <PlaceholderImage label={name} ratio="1/1" />
      </div>
      <div className="team-card__body">
        <h3>{name}</h3>
        <span className="team-card__role">{role}</span>
        {bio && <p>{bio}</p>}
      </div>
    </article>
  );
}
