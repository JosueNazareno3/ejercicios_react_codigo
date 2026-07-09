import { useState } from "react";
import Hijo from "./components/Hijo";

export default function App() {
  const [mensajeDelHijo, setMensajeDelHijo] = useState(
    "Aún no hay mensaje del hijo..."
  );

  const recibirMensaje = (texto) => {
    setMensajeDelHijo(texto);
  };

  return (
    <main>
      <h1>Enviar props del hijo al padre</h1>
      <p>
        Mensaje recibido por el padre: <strong>{mensajeDelHijo}</strong>
      </p>
      <Hijo onEnviar={recibirMensaje} />
    </main>
  );
}
