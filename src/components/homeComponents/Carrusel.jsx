import React, { useState } from "react";
import "./css/carrusel.css";

const slides = [
  {
    title: "¿Por qué invertir?",
    text: "Invertir es la clave para hacer crecer tu patrimonio y asegurar tu futuro financiero."
  },
  {
    title: "Crecimiento a largo plazo",
    text: "Las inversiones estratégicas permiten generar estabilidad y rentabilidad sostenida."
  },
  {
    title: "Diversificación inteligente",
    text: "Distribuir tu capital en diferentes sectores minimiza riesgos y maximiza oportunidades."
  }
];

function Carrusel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carrusel__content">
      <button className="carrusel__btn btn_uno" onClick={prevSlide}>❮</button>
      <div className="carrusel__slide">
        <h2>{slides[index].title}</h2>
        <p>{slides[index].text}</p>
      </div>
      <button className="carrusel__btn btn_dos" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Carrusel;