import styled from "styled-components";

export const Caja = styled.section`
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
`;

export const Boton = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  background: ${(props) => (props.destacado ? "black" : "white")};
  color: ${(props) => (props.destacado ? "white" : "black")};

  &:hover {
    opacity: 0.8;
  }
`;
