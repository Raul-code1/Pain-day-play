import { FiTarget } from "react-icons/fi";
import { GiM3GreaseGun, GiRayGun } from "react-icons/gi";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "PainDayPlay",
    url: "/about",
  },
  {
    id: 3,
    text: "Instalaciones",
    url: "/companies",
  },
];

export const featuredHome = [
  {
    id: 1,
    icon: <FiTarget />,
    title: "PaintBall",
    des: "un deporte competitivo de tiro en equipo en el que los jugadores eliminan a los oponentes del juego golpeándolos con cápsulas de gelatina esféricas llenas de tinte llamadas bolas de pintura que se rompen con el impacto",
    text: "Compara precios",
    url: "/instalaciones",
  },
  {
    id: 2,
    icon: <GiM3GreaseGun />,
    title: "Airsoft",
    des: "juego de equipo en el que los participantes eliminan a los jugadores contrarios marcándolos fuera del juego con proyectiles de plástico esféricos disparados con armas de aire simuladas llamadas pistolas de airsoft.",
    text: "Compara precios",
    url: "/instalaciones",
  },
  {
    id: 3,
    icon: <GiRayGun />,
    title: "Laser tag",
    des: " juego deportivo que simula un combate entre dos equipos. Está basado en que los jugadores intenten conseguir puntos alcanzando con sus disparadores de infrarrojos los dispositivos receptores situados en sus rivales. .",
    text: "Compara precios",
    url: "/instalaciones",
  },
];

export const marketingPhrases = [
  {
    id: 1,
    text: "¡Encuentra la mejor oferta en instalaciones deportivas tácticas con nuestra aplicación comparadora de precios!",
  },
  {
    id: 2,
    text: "¡Ahorra tiempo y dinero buscando las mejores opciones de paintball, airsoft y laser tag con nuestra aplicación!",
  },
  {
    id: 3,
    text: "¡Descubre nuevos campos de juego para paintball, airsoft y laser tag en tu área con nuestra aplicación!"
  }
];
