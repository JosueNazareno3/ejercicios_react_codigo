import Post from "./components/Post";

export default function App() {
  return (
    <main>
      <h1>Ejercicios props Componente Post</h1>
      <Post
        titulo="Mi primer post"
        autor="Josué"
        contenido="Este componente recibe datos mediante props."
      />
      <Post
        titulo="React"
        autor="Estudiante"
        contenido="Los componentes permiten reutilizar código."
      />
    </main>
  );
}
