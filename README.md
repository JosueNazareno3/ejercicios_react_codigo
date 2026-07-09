# Ejercicios React

Este proyecto es una practica de React desarrollada con Vite. La finalidad es reunir en una sola aplicacion varios ejercicios progresivos para practicar conceptos basicos y medios de React, como referencias, estado, componentes, props, renderizado condicional y manejo de datos.

La aplicacion principal muestra un listado de ejercicios. Al seleccionar uno, se carga su componente correspondiente sin salir del proyecto.

## Objetivo de la practica

El objetivo es comprender como se construyen interfaces con React a partir de ejercicios pequenos y luego avanzar hacia ejercicios mas completos. Cada bloque trabaja una idea especifica:

- `useRef`: lectura de valores desde inputs sin controlar directamente el estado.
- `useState`: actualizacion dinamica de resultados al cambiar datos.
- Componentes: separacion de la interfaz en piezas reutilizables.
- Props: envio de informacion entre componentes.
- Renderizado condicional: mostrar u ocultar contenido segun condiciones.
- Proyectos practicos: rutinas deportivas, trivial y cuento interactivo.

## Ejercicios incluidos

- `013 - useRef - Euros`: convierte una cantidad usando una referencia al input.
- `014 - useRef - Grados`: trabaja conversion de temperatura con `useRef`.
- `015 - useRef - Superficie`: calcula una superficie a partir de medidas.
- `017 - useState - Euros`: conversion usando estado.
- `018 - useState - Grados`: conversion de grados usando estado.
- `019 - useState - Superficie`: calculo dinamico de superficie.
- `022 - Componentes - Euros`: separa la logica en componentes.
- `023 - Componentes - Grados y Superficie`: practica componentes auxiliares.
- `025 - Props: hijo a padre`: comunica datos desde un componente hijo.
- `026 - Props - Componente Post`: crea una publicacion usando props.
- `028 - Props - Renderizado Condicional`: muestra contenido segun una condicion.
- `029 - Ejercicio Viaje`: calcula costes de hotel y coche segun dias.
- `035 - Memorizar Speech`: ejercicio de memorizacion de texto.
- `038-043 - Rutinas Deportivas`: muestra rutinas con imagenes de ejercicios.
- `044-049 - Trivial`: juego de preguntas con imagenes y respuestas.
- `050-051 - Cuento Interactivo`: historia navegable con escenas e imagenes de fondo.

## Estructura principal

```text
src/
|-- App.jsx
|-- App.css
|-- index.css
|-- main.jsx
`-- ejercicios/
```

Las imagenes usadas por los ejercicios grandes se encuentran en `public/`, organizadas en carpetas:

```text
public/
|-- cuento/
|-- rutinas/
`-- trivial/
```

## Instalacion y ejecucion

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Generar version de produccion:

```bash
npm run build
```

## Tecnologias usadas

- React
- Vite
- JavaScript
- CSS
- styled-components en algunos ejercicios especificos
