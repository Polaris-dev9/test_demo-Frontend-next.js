export default function FeatureSelector({ features, selected, onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {features.map((feature, idx) => (
        <button
          key={feature.title}
          onClick={() => onSelect(idx)}
          style={{
            background: selected === idx ? "#954c62" : "#d3d6dd",
            color: selected === idx ? "#fff" : "#2d2d2d",
            fontWeight: "bold",
            border: "none",
            borderRadius: "2rem",
            padding: "1.2rem 3.5rem",
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "background 0.2s",
            minWidth: 500,
          }}
        >
          <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>&lt;</span>
          {feature.title}
        </button>
      ))}
    </div>
  );
}
