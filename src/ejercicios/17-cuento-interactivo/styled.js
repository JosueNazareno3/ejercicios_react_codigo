import styled from "styled-components";

export const Stage = styled.section`
  position: relative;
  width: 800px;
  height: 450px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  border: 2px solid #222;
`;

export const Door = styled.button`
  position: absolute;
  border: 2px dashed red;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
`;

export const TextBox = styled.div`
  position: absolute;
  top: 10px;
  left: 40px;
  right: 40px;
  padding: 10px;
  background: white;
  border-radius: 6px;
  text-align: center;
`;
