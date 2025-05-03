export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <h3>{subtitle}</h3>
      <h1 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
