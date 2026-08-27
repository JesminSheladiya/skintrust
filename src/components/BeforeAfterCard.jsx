import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

export default function BeforeAfterCard({
  afterNote = "Month 6",
  beforeNote = "Day 0",
  ariaLabel = "Reveal before and after",
  title,
  body,
  tags = [],
  mutedTags = false,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}) {
  return (
    <article className="ba-card">
      <BeforeAfterSlider
        afterNote={afterNote}
        beforeNote={beforeNote}
        ariaLabel={ariaLabel}
        beforeSrc={beforeSrc}
        afterSrc={afterSrc}
        beforeAlt={beforeAlt}
        afterAlt={afterAlt}
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