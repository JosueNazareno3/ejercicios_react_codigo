import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
`;

export const QuestionTxt = styled.h2`
  text-align: center;
`;

export const Img = styled.img`
  width: 220px;
  height: 160px;
  object-fit: cover;
`;

export const Box = styled.div`
  min-width: 220px;
`;

export const Popup = styled.div`
  display: ${(props) => (props.$visible ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  > div {
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
`;
