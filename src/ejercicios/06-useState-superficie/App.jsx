import { useState } from "react";

export default function App() {
  const [ancho, setAncho] = useState("");
  const [alto, setAlto] = useState("");

  const superficie = Number(ancho) * Number(alto);

  return (
    <main>
      <h1>Ejercicio useState Calcular superficie</h1>
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
      <p>Superficie: {ancho === "" || alto === "" ? "" : superficie}</p>
    </main>
  );
}
