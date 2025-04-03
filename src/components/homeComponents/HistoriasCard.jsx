
import { useState } from "react";
import "./css/historiasCard.css";




function HistoriasCard({titulo, parrafoUno, parrafoDos}) {

  const [activado, setAtivado]= useState(false);

  const monstrar = () => {
    setAtivado(!activado); 
  }

  return (

    <div className='historias__card'>
          <h3 className="center__title">{titulo}</h3>

        <div className="historias__header">
          <span className={`historias__btn ${activado ? '' : 'rotate__icon'}`} onClick={monstrar}>
            <i class='bx bx-up-arrow-alt btn__icon'></i>
          </span>
            <div className={`historias__info ${activado ? 'cardInactive' : ''}`}>
              <p>{parrafoUno}</p>
              <br />
              <p>{parrafoDos}</p>
            </div>
        </div>


    </div>

  );
}

export default HistoriasCard;