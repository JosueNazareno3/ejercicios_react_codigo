import { useRef, useState } from "react";

export default function App() {
  const anchoRef = useRef(null);
  const altoRef = useRef(null);
  const [superficie, setSuperficie] = useState("");

  const calcular = () => {
    const ancho = Number(anchoRef.current.value);
    const alto = Number(altoRef.current.value);
    setSuperficie(ancho * alto);
  };

  return (
    <main>
      <h1>Ejercicio useRef Superficie rectángulo</h1>
      <input ref={anchoRef} type="number" placeholder="Ancho" />
      <input ref={altoRef} type="number" placeholder="Alto" />
      <button onClick={calcular}>Calcular</button>
      <p>Superficie: {superficie}</p>
    </main>
  );
}
