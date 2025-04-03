
import { useState } from "react";
import "./css/estrategiasCard.css";

function EstrategiasCard({ imagen, titulo, contenido }) {

  const [activado, setAtivado]= useState(false);

  const monstrar = () => {
    setAtivado(!activado); 
  }

  return (

    <div className='estrategias__card__item' onClick={monstrar}>
        <img src={imagen} alt="" />
        <div className="estrategias__card__info">
            <h4>{titulo}</h4>
        </div>

        <div className={`estrateias__UnderCard ${activado ? "underCardActivo" : ""}`}>
            <div className="estategias__contentModal">
              <div className="estrategias__childerModal">
                <p>{contenido}</p>
              </div>
            </div>
        </div>
    </div>

  );
}

export default EstrategiasCard;