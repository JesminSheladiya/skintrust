import BaTabs from "./BaTabs.jsx";
import BeforeAfterCard from "./BeforeAfterCard.jsx";

export default function BaTreatments({ tabs = [] }) {
  return (
    <BaTabs
      tabs={tabs.map((tab) => ({
        id: tab.id,
        label: tab.label,
        content: (
          <div className="ba-grid">
            {tab.cards.map((card, i) => (
              <BeforeAfterCard
                key={i}
                afterNote={card.afterNote}
                beforeNote={card.beforeNote || "Session 1"}
                ariaLabel={card.ariaLabel}
                title={card.title}
                body={card.body}
                tags={card.tags}
                beforeSrc={card.beforeSrc}
                afterSrc={card.afterSrc}
                beforeAlt={card.beforeAlt}
                afterAlt={card.afterAlt}
              />
            ))}
          </div>
        ),
      }))}
    />
  );
}