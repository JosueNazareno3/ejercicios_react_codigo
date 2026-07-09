import ComponenteMultiple from "./components/ComponenteMultiple";

export default function App() {
  return (
    <main>
      <h1>Ejercicio props con renderizado condicional</h1>
      <ComponenteMultiple texto="Hola desde props" visible={true} />
      <ComponenteMultiple texto="Este mensaje no se muestra" visible={false} />
    </main>
  );
}
