import { useState } from "react";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  return (
    <main>
      <h1>Recogida de datos</h1>

      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escribe tu email..."
        />
      </label>

      <h2>Datos recogidos:</h2>
      <p>Nombre: <strong>{nombre || "—"}</strong></p>
      <p>Email: <strong>{email || "—"}</strong></p>
      <p>Longitud del nombre: {nombre.length} caracteres</p>
    </main>
  );
}
