import { useState } from "react";
import { workouts } from "./data/workouts";
import { Container, Card, Img, Button } from "./styled";

export default function App() {
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  const workout = workouts[workoutIndex];
  const exercise = workout.exercises[selected];

  const nextWorkout = () => {
    setWorkoutIndex((actual) => (actual + 1) % workouts.length);
    setSelected(0);
  };

  return (
    <Container>
      <h1>Aplicacion de rutinas deportivas</h1>
      <h2>{workout.title}</h2>

      <Card>
        <h3>{exercise.name}</h3>
        <Img src={exercise.img} alt={exercise.name} />
      </Card>

      <div>
        {workout.exercises.map((item, index) => (
          <Img
            key={item.name}
            src={item.img}
            alt={item.name}
            $selected={selected === index}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>

      <Button onClick={nextWorkout}>Cambiar de workout</Button>
    </Container>
  );
}
