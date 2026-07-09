import { useState } from "react";

const lenguajes = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];

export default function App() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    alert(`¡Botón pulsado! (${clicks + 1} veces)`);
  };

  return (
    <main>
      <h1>JSX: Eventos y Arrays</h1>

      <h2>Evento onClick</h2>
      <button onClick={handleClick}>Pulsar ({clicks} veces)</button>

      <h2>Array con .map()</h2>
      {lenguajes.map((lang, index) => (
        <p
          key={index}
          onClick={() => setSeleccionado(lang)}
          style={{ cursor: "pointer" }}
        >
          {index + 1}. {lang}
        </p>
      ))}

      {seleccionado && (
        <p>
          Seleccionaste: <strong>{seleccionado}</strong>
        </p>
      )}
    </main>
  );
}
