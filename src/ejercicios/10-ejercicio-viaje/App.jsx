import { useState } from "react";

export default function App() {
  const [dias, setDias] = useState(5);

  const costeHotel = dias * 40;
  const costeCoche = dias * 36;

  return (
    <main>
      <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#f59e0b",
            color: "white",
            fontWeight: "700",
          }}
        >
          1
        </span>
        <input
          type="number"
          min="0"
          value={dias}
          onChange={(event) => setDias(Number(event.target.value))}
        />
      </label>

      <p>Coste alquiler hotel: {costeHotel}€</p>
      <p>Coste alquiler coche: {costeCoche}€</p>
    </main>
  );
}
