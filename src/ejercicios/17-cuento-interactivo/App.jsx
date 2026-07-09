import { useState } from "react";
import scenes from "./data/scenes";
import { Stage, Door, TextBox } from "./styled";

export default function App() {
  const [sceneId, setSceneId] = useState("inicio");
  const scene = scenes.find((item) => item.id === sceneId);

  return (
    <main>
      <h1>Cuento interactivo</h1>

      <Stage $image={scene.img}>
        <TextBox>{scene.text}</TextBox>

        {scene.doors.map((door) => (
          <Door
            key={door.to}
            style={{
              left: door.x,
              top: door.y,
              width: door.width,
              height: door.height,
            }}
            title={door.label}
            onClick={() => setSceneId(door.to)}
          />
        ))}
      </Stage>
    </main>
  );
}
