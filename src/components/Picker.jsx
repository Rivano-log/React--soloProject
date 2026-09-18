import { useEffect, useState } from "react";
import { fetchListings } from "../services/idealista";

const Picker = () => {
  const [listings, setListings] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchListings().then(setListings);
  }, []);

  const toggle = (code) =>
    setSelected((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );

  const output = selected.map((c) => `"${c}"`).join(",");

  return (
    <div style={{ padding: 20, fontFamily: "monospace" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          padding: 12,
          borderBottom: "2px solid #000",
          zIndex: 10,
        }}
      >
        <strong>{selected.length} geselecteerd</strong>
        <textarea
          readOnly
          value={output}
          style={{ width: "100%", height: 60, marginTop: 8, fontFamily: "monospace" }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
          marginTop: 20,
        }}
      >
        {listings.map((p) => (
          <div
            key={p.propertyCode}
            onClick={() => toggle(p.propertyCode)}
            style={{
              cursor: "pointer",
              border: selected.includes(p.propertyCode)
                ? "4px solid #C6A15B"
                : "4px solid transparent",
              background: "#f4f4f4",
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.municipality}
              style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: 6, fontSize: 12 }}>
              <div>{p.propertyCode}</div>
              <div>{p.municipality}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picker;