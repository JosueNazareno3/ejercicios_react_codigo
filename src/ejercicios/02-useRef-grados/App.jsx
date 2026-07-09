import { useRef, useState } from "react";

export default function App() {
  const gradosRef = useRef(null);
  const [fahrenheit, setFahrenheit] = useState("");

  const convertir = () => {
    const celsius = Number(gradosRef.current.value);
    setFahrenheit((celsius * 9) / 5 + 32);
  };

  return (
    <main>
      <h1>Ejercicio useRef Grados</h1>
      <label>
        Grados centígrados:
        <input ref={gradosRef} type="number" placeholder="Ej: 25" />
      </label>
      <button onClick={convertir}>Convertir</button>
      <p>Fahrenheit: {fahrenheit}</p>
    </main>
  );
}
