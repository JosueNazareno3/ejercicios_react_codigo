import { useState } from "react";

export default function Euros() {
  const [euros, setEuros] = useState("");

  return (
    <section>
      <input
        type="number"
        value={euros}
        onChange={(e) => setEuros(e.target.value)}
        placeholder="Euros"
      />
      <p>Dólares: {euros === "" ? "" : Number(euros) * 2}</p>
    </section>
  );
}
