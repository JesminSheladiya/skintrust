import { useRef } from "react";

export default function FaqAccordion({ items = [] }) {
  const itemRefs = useRef(new Map());

  const toggle = (index) => {
    const el = itemRefs.current.get(index);
    if (!el) return;
    const q = el.querySelector(".faq-question");
    const isOpening = !el.classList.contains("open");

    // Close all other items first (one open at a time)
    itemRefs.current.forEach((node, i) => {
      if (i === index) return;
      if (node.classList.contains("open")) {
        node.classList.remove("open");
        const otherQ = node.querySelector(".faq-question");
        if (otherQ) otherQ.setAttribute("aria-expanded", "false");
      }
    });

    el.classList.toggle("open", isOpening);
    q.setAttribute("aria-expanded", isOpening ? "true" : "false");
  };

  const setItemRef = (index) => (node) => {
    if (!node) {
      itemRefs.current.delete(index);
      return;
    }
    itemRefs.current.set(index, node);
    const a = node.querySelector(".faq-answer");
    if (a) {
      a.style.height = "auto";
      const h = a.scrollHeight;
      a.style.height = "";
      node.style.setProperty("--answer-h", h + "px");
    }
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={index === 0 ? "faq-item open" : "faq-item"}
          ref={setItemRef(index)}
        >
          <button
            type="button"
            className="faq-question"
            aria-expanded={index === 0 ? "true" : "false"}
            aria-controls={`ans-${index + 1}`}
            onClick={() => toggle(index)}
          >
            {item.question}
          </button>
          <div id={`ans-${index + 1}`} className="faq-answer">
            <p dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </>
  );
}