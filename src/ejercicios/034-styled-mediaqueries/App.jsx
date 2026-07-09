import { GlobalStyle, Contenedor, Tarjeta, Nota } from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <h1>Styled Components: Media Queries y estilos del body</h1>
        <Nota>↔ Redimensiona la ventana del navegador para ver el efecto</Nota>
        <Contenedor>
          <Tarjeta color="#6366f1">🏋️ Ejercicio 1</Tarjeta>
          <Tarjeta color="#f59e0b">🧘 Ejercicio 2</Tarjeta>
          <Tarjeta color="#10b981">🚴 Ejercicio 3</Tarjeta>
          <Tarjeta color="#ef4444">🏃 Ejercicio 4</Tarjeta>
          <Tarjeta color="#3b82f6">🤸 Ejercicio 5</Tarjeta>
          <Tarjeta color="#8b5cf6">🏊 Ejercicio 6</Tarjeta>
        </Contenedor>
      </main>
    </>
  );
}
