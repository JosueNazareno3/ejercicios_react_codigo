export default function Post({ titulo, autor, contenido }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <small>Autor: {autor}</small>
      <p>{contenido}</p>
    </article>
  );
}
