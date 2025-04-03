import React, { useState } from "react";
import './shared_css/head.css';
// import img_logo from '../assets/icons/Logo -Elite.png';
import img_logo from '../assets/icons/Logo -Elite.png'

  // === Logica De Eventos === 

function Head() {

    const [isActive, setIsActive] = useState(false);
    const [isActiveSearch, setIsActiveSearch] = useState(false);
    const [isActiveLogin, setIsActiveLogin] = useState(false);

  return (
    <div>
      <header className="header" id="header">
          <nav className="nav container">
            <a href="home" className="nav__logo">
              <img className="nav__logo" src={img_logo} alt="logo de elite juridica financiera." width="180px"/>
            </a>

            <div className={`nav__menu ${isActive ? 'show-menu' : ''}`} id="nav-menu">
                <ul className="nav__list">
                  <li className="nav__item">
                      <a href="https://elitejuridicafin.com/" className="nav__link">Inicio</a>
                  </li>

                  <li className="nav__item">
                      <a href="https://elitejuridicafin.com/sobre_nosotros" className="nav__link">Sobre Nosotros</a>
                  </li>

                  <li className="nav__item">
                      <a href="https://elitejuridicafin.com/servicios" className="nav__link">Servicios</a>
                  </li>

                  <li className="nav__item">
                      <a href="https://elitejuridicafin.com/contacto" className="nav__link">Contacto</a>
                  </li>

                  <li className="nav__item">
                    <a href="https://elitejuridicafin.com/radio" className="nav__link">Radio</a>
                  </li>

                  <li className="nav__item">
                      <a href="https://elitejuridicafin.com/blog" className="nav__link">Blog</a>
                  </li>
                </ul>

                {/* <!-- Close button --> */}
                <div className="nav__close " onClick={() => setIsActive(!isActive)}>
                  <i className="ri-close-line"></i>
                </div>
            </div>

            <div className="nav__actions">
                {/* <!-- Search button --> */}
                <i className="ri-search-line nav__search" onClick={() => {setIsActiveSearch(!isActiveSearch)}}></i>

                {/* <!-- Login button --> */}
                <i className="ri-user-line nav__login" onClick={() => {setIsActiveLogin(!isActiveLogin)}}></i>

                {/* <!-- Toggle button --> */}
                <div className="nav__toggle" onClick={() => setIsActive(!isActive)}>
                  <i className="ri-menu-line"></i>
                </div>
            </div>
          </nav>
      </header>

        {/* <!--==================== SEARCH ====================--> */}
      <div className={`search ${isActiveSearch ? 'show-search' : ''}`} >
          <form action="" className="search__form">
            <i className="ri-search-line search__icon"></i>
            <input className="search__input" type="search" placeholder="Que estas buscando?" />
          </form>

          <i className="ri-close-line search__close" onClick={() => setIsActiveSearch(isActive)}></i>
      </div>

      {/* <!--==================== LOGIN ====================--> */}
      <div className={`login ${isActiveLogin ? 'show-login' : ''}`}>
          <form id="formulario_login" className="login__form">
            <h2 className="login__title">Inicar Sesion</h2>
            
            <div className="login__group">
                <div>
                  <label for="email" className="login__label">Correo</label>
                  <input type="text" placeholder="Escribe tu correo" className="login__input" />
                </div>
                
                <div>
                  <label for="password" className="login__label">Contraseña</label>
                  <input usuario type="password" placeholder="Digista tu contraseña" className="login__input" />
                </div>
            </div>

            <div>

                <button type="submit" className="login__button">Ingresar</button>
            </div>
          </form>

          <i className="ri-close-line login__close" onClick={() => {setIsActiveLogin(!isActiveLogin)}}></i>
      </div>

    </div>
  );
}

export default Head;