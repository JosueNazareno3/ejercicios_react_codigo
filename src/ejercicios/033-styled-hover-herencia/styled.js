import styled from "styled-components";

export const Caja = styled.div`
  padding: 24px;
  background: #1e2030;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 360px;
  margin-bottom: 24px;
`;

export const Titulo = styled.h2`
  font-size: 0.95rem;
  color: #94a3b8;
  font-weight: 500;
  margin-bottom: 4px;
`;

/* Botón base con &:hover */
export const Boton = styled.button`
  padding: 10px 20px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* Herencia: extiende Boton con styled(Boton) */
export const BotonDestacado = styled(Boton)`
  background: #f59e0b;

  &:hover {
    background: #d97706;
    box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
  }
`;

export const BotonPeligro = styled(Boton)`
  background: #ef4444;

  &:hover {
    background: #dc2626;
    box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
  }
`;
