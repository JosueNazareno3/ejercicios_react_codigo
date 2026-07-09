import { useState } from "react";

export default function Grados() {
  const [celsius, setCelsius] = useState("");

  return (
    <section>
      <h2>Grados</h2>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Centígrados"
      />
      <p>Fahrenheit: {celsius === "" ? "" : (Number(celsius) * 9) / 5 + 32}</p>
    </section>
  );
}
