import { useRef } from "react";

export default function FaqAccordion({ items = [] }) {
  const itemRefs = useRef(new Map());

  const toggle = (index) => {
    const el = itemRefs.current.get(index);
    if (!el) return;
    const q = el.querySelector(".faq-question");
    const isOpen = el.classList.toggle("open");
    q.setAttribute("aria-expanded", isOpen ? "true" : "false");
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