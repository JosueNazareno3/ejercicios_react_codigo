import { Caja, Boton } from "./styled";

export default function App() {
  return (
    <main>
      <h1>Styled components</h1>
      <Caja>
        <p>Ejemplo usando styled-components.</p>
        <Boton>Botón normal</Boton>
        <Boton destacado>Botón destacado</Boton>
      </Caja>
    </main>
  );
}
