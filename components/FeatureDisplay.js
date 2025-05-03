export default function FeatureDisplay({ feature, image }) {
  return (
    <div style={{ position: "relative", width: 520, height: 400 }}>
      {/* Overlapping circle */}
      <div
        style={{
          position: "absolute",
          left: -150,
          top: 0,
          width: 400,
          height: 400,
          background: "#954c62cc",
          borderRadius: "50%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          padding: 0,
        }}
      >
        <h2 style={{ fontWeight: "bold", margin: "2rem" }}>{feature.title}</h2>
        <p style={{ margin: "0 2rem" }}>{feature.description}</p>
      </div>
      {/* Image circle */}
      <img
        src={image}
        alt="Feature"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          objectFit: "cover",
          position: "absolute",
          left: 120,
          top: 0,
          zIndex: 1,
          opacity: 0.7,
        }}
      />
    </div>
  );
}
