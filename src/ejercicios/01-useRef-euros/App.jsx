import { useRef, useState } from "react";

export default function App() {
  const eurosRef = useRef(null);
  const [dolares, setDolares] = useState("");

  const convertir = () => {
    const euros = Number(eurosRef.current.value);
    setDolares(euros * 2);
  };

  return (
    <main>
      <h1>Ejercicio useRef Euros</h1>
      <label>
        Euros:
        <input ref={eurosRef} type="number" placeholder="Ej: 10" />
      </label>
      <button onClick={convertir}>Convertir</button>
      <p>Dólares: {dolares}</p>
    </main>
  );
}