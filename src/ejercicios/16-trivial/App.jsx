import { useMemo, useState } from "react";
import questions from "./data/questions";
import { shuffleArray } from "./utils";
import { Row, QuestionTxt, Img, Box, Popup } from "./styled";

export default function App() {
  const randomizedQuestions = useMemo(() => shuffleArray([...questions]), []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [visible, setVisible] = useState(false);

  const question = randomizedQuestions[currentQuestion];

  const clickedAnswer = (isRight) => {
    const isWinner = isRight && currentQuestion === randomizedQuestions.length - 1;

    if (isWinner) {
      setVisible(true);
      return;
    }

    setCurrentQuestion((actual) => {
      if (isRight) {
        return actual < randomizedQuestions.length - 1 ? actual + 1 : 0;
      }
      return actual > 0 ? actual - 1 : 0;
    });
  };

  const restart = () => {
    setCurrentQuestion(0);
    setVisible(false);
  };

  return (
    <main>
      <h1>Hacer un trivial</h1>

      <QuestionTxt>{question.question}</QuestionTxt>

      <Row>
        <Box>
          {shuffleArray([...question.answers]).map((obj) => (
            <p key={obj.txt}>
              <button onClick={() => clickedAnswer(obj.isRight)}>X</button>{" "}
              {obj.txt}
            </p>
          ))}
        </Box>

        <Img src={question.img} alt={question.question} />
      </Row>

      <Popup $visible={visible}>
        <div>
          <p>Enhorabuena, has ganado</p>
          <button onClick={restart}>Volver a empezar</button>
        </div>
      </Popup>
    </main>
  );
}
