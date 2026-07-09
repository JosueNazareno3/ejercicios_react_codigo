import { useState, useEffect } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("React");

  // Efecto 1: cambia el título del navegador cuando cambia el contador
  useEffect(() => {
    document.title = `Contador: ${contador} — useEffect`;
  }, [contador]);

  // Efecto 2: ejecuta solo al montar (array vacío)
  useEffect(() => {
    console.log("✅ Componente montado");

    return () => {
      console.log("❌ Componente desmontado");
      document.title = "React App";
    };
  }, []);

  // Efecto 3: reacciona al cambio de nombre
  useEffect(() => {
    console.log(`Nombre cambiado a: ${nombre}`);
  }, [nombre]);

  return (
    <main>
      <h1>Ejercicio useEffect</h1>

      <h2>Efecto 1: Título del navegador</h2>
      <p>Mira la pestaña del navegador al cambiar el contador.</p>
      <p>
        Contador: <strong>{contador}</strong>
      </p>
      <button onClick={() => setContador((c) => c + 1)}>+1</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>

      <h2>Efecto 2: Solo al montar</h2>
      <p>Abre la consola del navegador (F12) para ver el log.</p>

      <h2>Efecto 3: Reacciona a cambios de nombre</h2>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe un nombre..."
        />
      </label>
      <p>
        Nombre actual: <strong>{nombre}</strong>
      </p>
    </main>
  );
}
