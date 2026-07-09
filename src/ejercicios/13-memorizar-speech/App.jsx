import { useState } from "react";

const parrafos = [
  "Buenos días, hoy voy a presentar mi exposición.",
  "Primero explicaré el tema principal y sus características.",
  "Luego mostraré un ejemplo práctico para comprenderlo mejor.",
  "Finalmente daré una conclusión general del tema.",
];

export default function App() {
  const [indice, setIndice] = useState(0);

  const avanzar = () => {
    setIndice((actual) => Math.min(actual + 1, parrafos.length - 1));
  };

  const retroceder = () => {
    setIndice((actual) => Math.max(actual - 1, 0));
  };

  return (
    <main>
      <h1>Aplicación para memorizar un speech</h1>
      <p>{parrafos[indice]}</p>
      <button onClick={retroceder}>Anterior</button>
      <button onClick={avanzar}>Siguiente</button>
      <p>
        Párrafo {indice + 1} de {parrafos.length}
      </p>
    </main>
  );
}
