import React from "react";
import './shared_css/footer.css';

const fechaActual = new Date().getFullYear();


function Footer() {

  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
            <div className="footer__contacto">
                <h3 className="footer__title" >Contactos</h3>
                
                <ul className="footer__lista">
                    <li>Jaiverd@gmail.com</li>
                    <li>+57 320 2966795</li>
                    <li>+57 300 5709430</li>                
                </ul>
            </div>

            <div className="footer__ubicanos">
                <h3 className="footer__title">Nos Encuentras En</h3>
                <ul className="footer__lista">
                    <li>Estamos ubicados en Centro Comercial Villacentro | local 26 mesanini | villavicencio.</li>
                    <li>Tambien puedes seguirnos en las siguientes.</li>
                </ul>
                <div className="footer__link">
                    <span>Redes Sociales</span>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=61559945957210" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                    <a target="_blank" href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                    <a target="_blank" href="https://www.youtube.com/@Elabogadolosescucha" className="footer__icon"><i className='bx bxl-youtube' ></i></a>
                </div>
            </div>

            <div className="Enlaces__Rapidos">
                <h3 className="footer__title">Enlaces</h3>
                <ul  className="footer__lista ul_enlaces">
                    <li><a href="articulos">Noticias y articulos</a></li>
                    <li><a href="caso_de_exito">Casos de exito</a></li>
                    <li><a href="contacto">Contacto</a></li>
                    <li><a href="home">Home</a></li>
                </ul>
            </div>

            <div className="footer__linea"></div>
            
            <p className="footer_copy">&#169; copyright Todos Los Derechos Reservados. 2019 - <span>{fechaActual}</span></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
