import { useState } from "react";

export default function App() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit = (Number(celsius) * 9) / 5 + 32;

  return (
    <main>
      <h1>Ejercicio useState Grados</h1>
      <label>
        Grados centígrados:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
          placeholder="Ej: 25"
        />
      </label>
      <p>Fahrenheit: {celsius === "" ? "" : fahrenheit}</p>
    </main>
  );
}
