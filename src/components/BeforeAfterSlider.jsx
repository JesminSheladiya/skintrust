import { useState } from "react";

export default function BeforeAfterSlider({
  afterLabel = "After",
  afterNote = "Month 6",
  beforeLabel = "Before",
  beforeNote = "Day 0",
  ariaLabel = "Reveal before and after",
  defaultValue = 50,
}) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="ba">
      <div className="ba-pane ba-after">
        <span className="lbl">{afterLabel}</span>
        <span className="note">{afterNote}</span>
      </div>
      <div
        className="ba-pane ba-before"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <span className="lbl">{beforeLabel}</span>
        <span className="note">{beforeNote}</span>
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