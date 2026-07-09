export default function ComponenteMultiple({ texto, visible }) {
  return visible ? <p>{texto}</p> : null;
}
