import { useState } from "react";

export default function BeforeAfterSlider({
  afterLabel = "After",
  afterNote = "Month 6",
  beforeLabel = "Before",
  beforeNote = "Day 0",
  ariaLabel = "Reveal before and after",
  defaultValue = 50,
  beforeSrc,
  afterSrc,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="ba">
      <div className="ba-pane ba-after">
        {afterSrc ? (
          <img
            src={afterSrc}
            alt={afterAlt}
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
        {!afterSrc && (
          <>
            <span className="lbl" style={{ position: "relative", zIndex: 1 }}>{afterLabel}</span>
            <span className="note" style={{ position: "relative", zIndex: 1 }}>{afterNote}</span>
          </>
        )}
        <span className="ba-label ba-label-after">{afterLabel}</span>
      </div>
      <div
        className="ba-pane ba-before"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        {beforeSrc ? (
          <img
            src={beforeSrc}
            alt={beforeAlt}
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
        {!beforeSrc && (
          <>
            <span className="lbl" style={{ position: "relative", zIndex: 1 }}>{beforeLabel}</span>
            <span className="note" style={{ position: "relative", zIndex: 1 }}>{beforeNote}</span>
          </>
        )}
        <span className="ba-label ba-label-before">{beforeLabel}</span>
      </div>
      <div className="ba-line" style={{ left: `${value}%` }} />
      <div className="ba-knob" aria-hidden="true" style={{ left: `${value}%` }}>
        ↔
      </div>
      <input
        className="ba-range"
        type="range"
        min="0"
        max="100"
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}