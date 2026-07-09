import { Caja, Boton, BotonDestacado, BotonPeligro, Titulo } from "./styled";

export default function App() {
  return (
    <main>
      <h1>Styled Components: Hover, herencia y atributos</h1>

      <Caja>
        <Titulo>Botón base con hover</Titulo>
        <Boton>Botón normal (pasa el ratón)</Boton>
      </Caja>

      <Caja>
        <Titulo>Herencia de estilos con styled(Componente)</Titulo>
        <BotonDestacado>Botón heredado — destacado</BotonDestacado>
        <BotonPeligro>Botón heredado — peligro</BotonPeligro>
      </Caja>
    </main>
  );
}
