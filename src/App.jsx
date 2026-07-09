import { useState, Suspense, lazy } from "react";
import "./App.css";

const ejercicios = [
  { id: "013", nombre: "013 - useRef - Euros", componente: lazy(() => import("./ejercicios/01-useRef-euros/App.jsx")) },
  { id: "014", nombre: "014 - useRef - Grados", componente: lazy(() => import("./ejercicios/02-useRef-grados/App.jsx")) },
  { id: "015", nombre: "015 - useRef - Superficie", componente: lazy(() => import("./ejercicios/03-useRef-superficie-rectangulo/App.jsx")) },
  { id: "017", nombre: "017 - useState - Euros", componente: lazy(() => import("./ejercicios/04-useState-euros/App.jsx")) },
  { id: "018", nombre: "018 - useState - Grados", componente: lazy(() => import("./ejercicios/05-useState-grados/App.jsx")) },
  { id: "019", nombre: "019 - useState - Superficie", componente: lazy(() => import("./ejercicios/06-useState-superficie/App.jsx")) },
  { id: "022", nombre: "022 - Componentes - Euros", componente: lazy(() => import("./ejercicios/07-componentes-euros/App.jsx")) },
  { id: "023", nombre: "023 - Componentes - Grados y Superficie", componente: lazy(() => import("./ejercicios/08-componentes-grados-superficie/App.jsx")) },
  { id: "025", nombre: "025 - Props: hijo a padre", componente: lazy(() => import("./ejercicios/025-props-hijo-padre/App.jsx")) },
  { id: "026", nombre: "026 - Props - Componente Post", componente: lazy(() => import("./ejercicios/11-props-componente-post/App.jsx")) },
  { id: "028", nombre: "028 - Props - Renderizado Condicional", componente: lazy(() => import("./ejercicios/09-props-renderizado-condicional/App.jsx")) },
  { id: "029", nombre: "029 - Ejercicio Viaje", componente: lazy(() => import("./ejercicios/10-ejercicio-viaje/App.jsx")) },
  { id: "035", nombre: "035 - Memorizar Speech", componente: lazy(() => import("./ejercicios/13-memorizar-speech/App.jsx")) },
  { id: "038", nombre: "038-043 - Rutinas Deportivas", componente: lazy(() => import("./ejercicios/15-rutinas-deportivas/App.jsx")) },
  { id: "044", nombre: "044-049 - Trivial", componente: lazy(() => import("./ejercicios/16-trivial/App.jsx")) },
  { id: "050", nombre: "050-051 - Cuento Interactivo", componente: lazy(() => import("./ejercicios/17-cuento-interactivo/App.jsx")) },
];

const getExerciseName = (nombre) => nombre.split(" - ").slice(1).join(" - ");

export default function App() {
  const [seleccionado, setSeleccionado] = useState(null);

  const EjercicioActivo = seleccionado
    ? ejercicios.find((e) => e.id === seleccionado)?.componente
    : null;

  return (
    <div className="app-wrapper">
      <main className="main-content">
        {!EjercicioActivo ? (
          <div className="welcome">
            <div className="welcome-icon">React</div>
            <h2>Selecciona un ejercicio</h2>
            <p>Elige un ejercicio del panel izquierdo para comenzar.</p>
            <div className="welcome-grid">
              {ejercicios.map((ej) => (
                <button
                  key={ej.id}
                  className="welcome-card"
                  onClick={() => setSeleccionado(ej.id)}
                >
                  <span className="card-num">{ej.id}</span>
                  <span className="card-name">{getExerciseName(ej.nombre)}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="ejercicio-wrapper">
            <div className="ejercicio-header">
              <button className="back-btn" onClick={() => setSeleccionado(null)}>
                Volver
              </button>
              <h2 className="ejercicio-title">
                {ejercicios.find((e) => e.id === seleccionado)?.nombre}
              </h2>
            </div>
            <div className="ejercicio-content">
              <Suspense fallback={<div className="loading">Cargando ejercicio...</div>}>
                <EjercicioActivo />
              </Suspense>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
