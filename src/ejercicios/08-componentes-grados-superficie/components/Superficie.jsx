import { useState } from "react";

export default function Superficie() {
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");

  return (
    <section>
      <h2>Superficie rectángulo</h2>
      <input
        type="number"
        value={ancho}
        onChange={(e) => setAncho(e.target.value)}
        placeholder="Ancho"
      />
      <input
        type="number"
        value={alto}
        onChange={(e) => setAlto(e.target.value)}
        placeholder="Alto"
      />
      <p>Superficie: {ancho === "" || alto === "" ? "" : Number(ancho) * Number(alto)}</p>
    </section>
  );
}
