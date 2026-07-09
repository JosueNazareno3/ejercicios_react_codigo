const nombre = "React";
const version = 18;
const activo = true;
const fecha = new Date().getFullYear();

export default function App() {
  return (
    <main>
      <h1>Ejemplos de JSX</h1>
      <p>Librería: {nombre}</p>
      <p>Versión: {version}</p>
      <p>¿Activo?: {activo ? "Sí" : "No"}</p>
      <p>Año actual: {fecha}</p>
      <p>Suma: {2 + 3}</p>
      <p>Nombre en mayúsculas: {nombre.toUpperCase()}</p>
    </main>
  );
}
