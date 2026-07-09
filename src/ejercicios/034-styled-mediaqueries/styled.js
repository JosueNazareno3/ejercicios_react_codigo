import styled, { createGlobalStyle } from "styled-components";

/* Estilos globales del body con createGlobalStyle */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: #0f1117;
    color: #f1f5f9;
  }

  h1 {
    font-size: 1.5rem;
    padding: 24px;
    margin: 0;
  }
`;

export const Nota = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 16px;
`;

/* Grid con media queries */
export const Contenedor = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px 24px;

  /* Móvil: 1 columna */
  grid-template-columns: 1fr;

  /* Tablet: 2 columnas */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columnas */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Tarjeta = styled.div`
  background: ${(props) => props.color || "#6366f1"};
  color: white;
  padding: 40px 20px;
  border-radius: 14px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;
