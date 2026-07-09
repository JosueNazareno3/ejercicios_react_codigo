import { useState } from "react";

export default function App() {
  const [euros, setEuros] = useState("");

  const dolares = Number(euros) * 2;

  return (
    <main>
      <h1>Ejercicio useState Euros</h1>
      <label>
        Euros:
        <input
          type="number"
          value={euros}
          onChange={(e) => setEuros(e.target.value)}
          placeholder="Ej: 10"
        />
      </label>
      <p>Dólares: {euros === "" ? "" : dolares}</p>
    </main>
  );
}
