import "./css/empresaCard.css";
import img_card1 from '../../assets/img/home/electronic art.jpg'




function EmpresaCard() {

  return (
    <div className="empresa__cardItem">
        <img src={img_card1} alt="" />
        <div className="cardInfo">
            <h3>Nutresa S.A.S</h3>
            <p>Empresa de aliemtos con alto nivel de extio en el territorio latinoamericano</p>
            <p>Lectura de 8 minutos</p>
        </div>
    </div>
  );
}

export default EmpresaCard;