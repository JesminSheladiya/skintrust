import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

export default function BeforeAfterCard({
  afterNote = "Month 6",
  beforeNote = "Day 0",
  ariaLabel = "Reveal before and after",
  title,
  body,
  tags = [],
  mutedTags = false,
}) {
  return (
    <article className="ba-card">
      <BeforeAfterSlider
        afterNote={afterNote}
        beforeNote={beforeNote}
        ariaLabel={ariaLabel}
      />
      <div className="ba-body">
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="ba-tags">
          {tags.map((tag) => (
            <span
              className="tag"
              style={
                mutedTags
                  ? { color: "var(--muted)", borderColor: "var(--line)" }
                  : undefined
              }
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}