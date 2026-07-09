import styled from "styled-components";

export const Container = styled.main`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const Card = styled.section`
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 160px;
  height: 100px;
  object-fit: cover;
  margin: 8px;
  cursor: pointer;
  border: ${(props) => (props.$selected ? "4px solid black" : "1px solid #ccc")};
`;

export const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
`;
