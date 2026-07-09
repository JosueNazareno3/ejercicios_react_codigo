export default function Hijo({ onEnviar }) {
  return (
    <div>
      <h2>Componente Hijo</h2>
      <p>El hijo puede enviar datos al padre usando la función que recibe como prop.</p>
      <button onClick={() => onEnviar("¡Hola desde el hijo! 👋")}>
        Enviar mensaje 1
      </button>
      <button onClick={() => onEnviar("Segundo mensaje del hijo 🚀")}>
        Enviar mensaje 2
      </button>
    </div>
  );
}
