import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import FeatureSelector from "../components/FeatureSelector";
import FeatureDisplay from "../components/FeatureDisplay";
import axios from "axios";

export default function Home() {
  const [features, setFeatures] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    axios.get("http://https://avatars.githubusercontent.com/u/204810915?v=4/api/features?populate=image")
      .then(res => {
        console.log("API response:", res.data);
        setFeatures(
          (res.data.data || [])
            .map(item => ({
              title: item.title,
              description: Array.isArray(item.description)
                ? item.description.map(block =>
                    block.children
                      ? block.children.map(child => child.text).join("")
                      : ""
                  ).join("\n")
                : item.description,
              image: Array.isArray(item.image) && item.image[0]?.url
                ? "http://https://avatars.githubusercontent.com/u/204810915?v=4" + item.image[0].url
                : ""
            }))
        );
      })
      .catch(err => {
        console.error("Error fetching features:", err);
      });
  }, []);

  if (!features.length) return <div>Loading...</div>;

  const section = {
    subtitle: "Why Choose Us",
    title: "We Are Different From Others",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo hic!",
    image: features[selected].image
  };

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
      <SectionHeader {...section} />
      <div style={{ display: "flex", gap: "4rem", alignItems: "center", justifyContent: "center" }}>
        <FeatureDisplay feature={features[selected]} image={features[selected].image} />
        <FeatureSelector features={features} selected={selected} onSelect={setSelected} />
      </div>
    </div>
  );
}
