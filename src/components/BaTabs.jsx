import { useState } from "react";

export default function BaTabs({ label = "Before and after by treatment", tabs }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <>
      {tabs.length > 1 && (
        <div className="ba-tabs" role="tablist" aria-label={label}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={tab.id === active ? "ba-tab active" : "ba-tab"}
              role="tab"
              aria-selected={tab.id === active}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={tab.id === active ? "ba-panel active" : "ba-panel"}
          id={`panel-${tab.id}`}
          role="tabpanel"
        >
          {tab.content}
        </div>
      ))}
    </>
  );
}