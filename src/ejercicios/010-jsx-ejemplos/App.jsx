const usuario = {
  nombre: "Sara",
  edad: 22,
  premium: true,
};

const producto = {
  nombre: "Laptop",
  precio: 999.99,
  disponible: false,
};

export default function App() {
  return (
    <main>
      <h1>Ejemplos de JSX</h1>

      <h2>Usuario</h2>
      <p>Nombre: {usuario.nombre}</p>
      <p>Edad: {usuario.edad}</p>
      <p>Tipo: {usuario.premium ? "Premium ⭐" : "Básico"}</p>
      <p style={{ color: usuario.premium ? "gold" : "gray" }}>
        {usuario.premium ? "✅ Cuenta Premium activa" : "Cuenta básica"}
      </p>

      <h2>Producto</h2>
      <p>Producto: {producto.nombre}</p>
      <p>Precio: ${producto.precio}</p>
      <p>
        Estado:{" "}
        {producto.disponible ? (
          <span style={{ color: "green" }}>Disponible</span>
        ) : (
          <span style={{ color: "red" }}>Agotado</span>
        )}
      </p>
    </main>
  );
}
