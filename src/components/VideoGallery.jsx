import { useRef, useState } from "react";

export default function VideoGallery({ count = 4, placeholder = "Video placeholder" }) {
  const carouselRef = useRef(null);
  const [playing, setPlaying] = useState(null);

  const scroll = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  const togglePlay = (index) => {
    setPlaying(playing === index ? null : index);
  };

  return (
    <div className="vg-wrapper">
      <button
        className="vg-nav vg-prev"
        aria-label="Previous video"
        onClick={() => scroll(-1)}
      >
        ❮
      </button>
      <div
        className={`vg-carousel${playing !== null ? " is-playing" : ""}`}
        ref={carouselRef}
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`vg-card arch${playing === i ? " playing" : ""}`}
          >
            <div className="vg-placeholder">
              <span className="ph">{placeholder}</span>
            </div>
            <button
              className="vg-play"
              aria-label="Play video"
              onClick={() => togglePlay(i)}
            >
              {playing === i ? "❚❚" : "▶"}
            </button>
          </div>
        ))}
      </div>
      <button
        className="vg-nav vg-next"
        aria-label="Next video"
        onClick={() => scroll(1)}
      >
        ❯
      </button>
    </div>
  );
}