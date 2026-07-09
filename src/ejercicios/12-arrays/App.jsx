export default function App() {
  const lenguajes = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <main>
      <h1>Arrays</h1>
      {lenguajes.map((lenguaje, index) => (
        <p key={index}>{lenguaje}</p>
      ))}
    </main>
  );
}
