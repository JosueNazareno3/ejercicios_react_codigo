const scenes = [
  {
    id: "inicio",
    img: "/cuento/inicio.jpg",
    text: "Estas en el espacio. Puedes ir a la Tierra o entrar a la nave.",
    doors: [
      { label: "Ir a la Tierra", x: 550, y: 180, width: 180, height: 180, to: "tierra" },
      { label: "Entrar a la nave", x: 240, y: 120, width: 220, height: 150, to: "nave" },
    ],
  },
  {
    id: "nave",
    img: "/cuento/nave.jpg",
    text: "Dentro de la nave encuentras dos puertas misteriosas.",
    doors: [
      { label: "Puerta izquierda", x: 180, y: 160, width: 160, height: 190, to: "monstruo" },
      { label: "Puerta derecha", x: 470, y: 160, width: 160, height: 190, to: "casa" },
    ],
  },
  {
    id: "tierra",
    img: "/cuento/tierra.jpg",
    text: "Llegaste a la Tierra sano y salvo. Fin.",
    doors: [{ label: "Volver", x: 20, y: 20, width: 120, height: 80, to: "inicio" }],
  },
  {
    id: "monstruo",
    img: "/cuento/monstruo.jpg",
    text: "Aparece un monstruo gigante. Debes escapar.",
    doors: [{ label: "Escapar", x: 20, y: 20, width: 120, height: 80, to: "nave" }],
  },
  {
    id: "casa",
    img: "/cuento/casa.jpg",
    text: "Llegas a casa y termina la aventura.",
    doors: [{ label: "Reiniciar", x: 20, y: 20, width: 120, height: 80, to: "inicio" }],
  },
];

export default scenes;
