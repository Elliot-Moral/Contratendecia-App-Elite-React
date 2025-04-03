import React from 'react';
import { Link } from 'react-router-dom';

// ==== img  ====

import img_banner from '../assets/img/home/banner_contra_v3.png'
import img_about from '../assets/img/home/contra.jpg'

import img_card1 from '../assets/img/home/card01.jpg'
import img_card2 from '../assets/img/home/card02.webp'
import img_card3 from '../assets/img/home/card03.webp'
import img_card4 from '../assets/img/home/card04.jpg'

import img_card_ia from '../assets/img/home/ia.png'
import img_card_financiera from '../assets/img/home/financiera.png'
import img_card_robotica from '../assets/img/home/robotica.png'

import callSocio from '../assets/img/home/callSocio.png'

// ==== componenes  ====

import Head from '../shared/head'
import Footer from '../shared/footer'

import Carrusel from '../components/homeComponents/Carrusel'
import EmpresaCard from '../components/homeComponents/EmpresaCard'
import HistoriasCard from '../components/homeComponents/HistoriasCard'
import EstrategiasCard from '../components/homeComponents/EstrategiasCard'

// ==== styles  ====

import '../assets/css/reglas.css'
import '../assets/css/home.css'


function HomePage() {
  return (
    <>
    <Head/>
      <main>
        <section className='home home__container'>
          <div className='home__info'>
            <h1>Bienvenidos <span className='info_a'>A</span> <span>ContraTendencia</span></h1>
            <p>Un espacio en donde las inversiones son mas que análisis y toma de riesgos, Aquí no solo estudiamos el mercado financiero, sino que lo vivimos!.</p>
          </div>
          <div className='home__banner'>
            <img src={`${img_banner}`} alt="Descripción de la imagen" />
          </div>
        </section>

        <section className='about section'>
          <div className='about__container bd-grid'>

            <div className='about__img'>
                <img src={`${img_about}`} alt="Un mombre caminando en la multitud con un pensamiento diferente!" />
            </div>

            <div className='about__info section'>
              <h2 className='about__about center__title'>¿Que somos? - ¿Que es ContraTendencia?</h2>
              <p><strong>Contra Tendencia</strong> es un espacio dedicado a analizar inversiones, identificar mercados con alto potencial de retorno y anticipar oportunidades antes de que se vuelvan tendencia. Basado en un estudio detallado de mercados, socios estratégicos y convenios, buscamos proyectar el comportamiento de las acciones y orientar a nuestros miembros hacia decisiones financieras inteligentes.</p>
              <br />
              <p>Es un grupo social organizado y dirigido por Elite Jurídica y Financiera, con la finalidad de asesorar en la gestión de activos de los miembros del grupo.</p>
            </div>

          </div>
        </section>

        <section className='estrategias section'>
          <h2 className='section-title estrategias__title'>Conoce nuestro estrategias de gestion e inversion</h2>
          <div className='estrategias__container bd-grid'>
            <p>En <strong>Contra Tendencia</strong>, combinamos <strong>innovación disruptiva</strong> con <strong>análisis fundamental</strong> para desarrollar un enfoque único en la gestión de activos y el análisis de mercado. A esta combinación la llamamos <strong>Innovación y Valor</strong>: la unión de nuevas tendencias con principios financieros sólidos para identificar oportunidades de inversión seguras y rentables.</p>
            <br />
            <div className='content__parafos'>
              <div>
                <h3>Nuestra Filosofía de Inversión</h3>
                <br />
                <p>Creemos que la inversión inteligente no se trata solo de seguir tendencias, sino de adelantarse a ellas con análisis profundo y decisiones fundamentadas. Nuestro enfoque prioriza la sostenibilidad financiera, la transparencia y la creación de valor real en cada inversión. Buscamos empresas que no solo sean prometedoras en el corto plazo, sino que también cuenten con estructuras sólidas para crecer y mantenerse en el tiempo.</p>
              </div>

              <div>
                <h3>¿Qué es Innovación y Valor?</h3>
                <br />
                <p>Innovación y Valor es la filosofía que guía nuestras decisiones de inversión. Creemos que la verdadera rentabilidad proviene de empresas que no solo son innovadoras, sino que además tienen bases financieras, operativas y éticas sólidas. No basta con que una empresa sea disruptiva; debe demostrar estabilidad, transparencia y un equipo de liderazgo confiable.</p>
              </div>
            </div>

            <br />

            <div className='estrategias__terminos__content'>

              <div className='estrategias__flexibles'>
                <div className='estrategias__term__item'>Innovación Disruptiva</div>
                <span className='estrategias__term__plus'>+</span>
                <div className='estrategias__term__item'>Análisis Fundamentales</div>
              </div>
              <br />

              <div className='estrategias__term__item innova_y_valor'>Innovación Y Valor</div>

            </div>

            <br />
            
            <div>
              <h3>Nuestra estrategia de inversión</h3>
              <br/>
              <p>Para seleccionar empresas con potencial de inversión a mediano y largo plazo, aplicamos una estrategia de análisis detallado que nos permite reducir riesgos y maximizar oportunidades. Estos son los principales factores que evaluamos:</p>
            </div>

            <br />

            <div className='estrategias__content_cards bd-grid'>

              <EstrategiasCard
                imagen={img_card1}
                titulo="Historial de los CEOs y fundadores."
                contenido="Estudiar el historial de los CEOs y fundadores es crucial al analizar empresas potenciales para invertir a mediano y largo plazo, ya que el liderazgo tiene un impacto directo en la dirección y el rendimiento de la compañía. Un CEO o fundador con experiencia sólida, visión clara y un historial de decisiones acertadas puede ser un indicativo de éxito futuro, mientras que un liderazgo inestable o con antecedentes de malas decisiones puede aumentar el riesgo de inversión. Conocer su trayectoria permite evaluar la capacidad de gestionar crisis, impulsar crecimiento y mantener la confianza de los inversores y clientes, factores clave para la rentabilidad a largo plazo."
              />

              <EstrategiasCard
                imagen={img_card2}
                titulo="Evaluación de los inversionistas y aliados estratégicos."
                contenido="Evaluar inversionistas y aliados estratégicos es clave para garantizar inversiones seguras y alineadas con una visión de crecimiento sostenible. Para inversiones a mediano y largo plazo, es fundamental analizar la solidez financiera de las empresas, su rentabilidad, flujo de caja, competitividad en el sector y calidad de su gobierno corporativo. Además, factores macroeconómicos como tasas de interés y regulaciones pueden influir en su desempeño. Identificar oportunidades y riesgos permite tomar decisiones informadas, maximizando retornos y minimizando incertidumbre."
              />

              <EstrategiasCard
                imagen={img_card3}
                titulo="Revisión de indicadores clave."
                contenido="La revisión de indicadores clave es esencial para evaluar el desempeño y potencial de una inversión a mediano y largo plazo. Analizar métricas como rentabilidad, liquidez, endeudamiento, crecimiento de ingresos y retorno sobre inversión permite identificar tendencias y tomar decisiones estratégicas. Además, considerar factores externos como inflación, tasas de interés y estabilidad del sector ayuda a anticipar riesgos y oportunidades, asegurando inversiones bien fundamentadas y con alto potencial de retorno."
              />

              <EstrategiasCard
                imagen={img_card4}
                titulo="Análisis del sector y su potencial."
                contenido="El análisis del sector y su potencial es clave para identificar oportunidades de inversión con alto rendimiento a mediano y largo plazo. Evaluar la competencia, tendencias de crecimiento, regulaciones y avances tecnológicos permite determinar qué industrias tienen mayor estabilidad y proyección. Además, entender los ciclos económicos y la demanda del mercado ayuda a minimizar riesgos y posicionar inversiones estratégicamente para maximizar retornos en el tiempo."
              />

            </div>

          </div>
        </section>

        <section className='enfoque section'>

          <div className='enfoque__container bd-grid'>
            <h1>Nuestro Enfoque De Estudio</h1>
            <br />
            <p>En <strong>Elite Jurídica y Financiera,</strong> nuestro enfoque está dirigido a empresas que impulsan el futuro: desde la <strong>inteligencia artificial</strong> y las <strong>tecnologías financieras</strong> hasta la <strong>robótica</strong> y la innovación disruptiva. Nos especializamos en asesorar y respaldar a compañías que buscan un crecimiento sostenible a largo plazo, con estrategias diferenciadas y de baja correlación con los modelos tradicionales.</p>
            <br />
            <p>Acompañamos a líderes y facilitadores de la transformación digital, ofreciendo soluciones legales y financieras que les permitan expandirse con seguridad y confianza en un entorno altamente dinámico.</p>
            <br />

            <div className='enfoque__contentainer'>

                <div className='enfoque__content__cards'>
                  <div className='enfoque__card__item'>
                      <img src={img_card_ia} alt="" className='enfoque__img'/>
                      <h4 className='enfoque__card__title'>Inteligencia Artificial</h4>
                  </div>
                </div>

                <div className='enfoque__content__cards'>
                  <div className='enfoque__card__item'>
                      <img src={img_card_financiera} alt="" className='enfoque__img'/>
                      <h4 className='enfoque__card__title'>Tecnología Financiera</h4>
                  </div>
                </div>

                <div className='enfoque__content__cards'>
                  <div className='enfoque__card__item'>
                      <img src={img_card_robotica} alt="" className='enfoque__img'/>
                      <h4 className='enfoque__card__title'>Robótica</h4>
                  </div>
                </div>

              </div>

          </div>

        </section>

        <section  className='diferencia section'>
            <div className='diferencia__container bd-grid'>
              <h2>Cómo se diferencian nuestras estrategias de inversión de las tendencias del mercado.</h2>
              <br />
              <div className='diferencia__cards_content  bd-grid'>

                <div className="diferencia__card">
                    <h3>Invertir con visión, no con la corriente</h3>
                    <br />
                    <p>Mientras la mayoría sigue la ola de tendencias de inversión tradicionales, en Elite Jurídica y Financiera preferimos mirar más allá. No nos dejamos llevar por la histeria del mercado ni por el ruido de las modas pasajeras. Nuestro enfoque se basa en el análisis profundo de sectores emergentes como la inteligencia artificial, la robótica y las tecnologías financieras, identificando oportunidades que otros aún no ven. En lugar de reaccionar a lo que ya ocurrió, anticipamos lo que está por venir.</p>
                </div>

                <div className="diferencia__card">
                    <h3> Menos emoción, más estrategia</h3>
                    <br />
                    <p>Las inversiones tradicionales a menudo están impulsadas por emociones: euforia cuando el mercado sube y pánico cuando baja. Nosotros hacemos las cosas diferente. Nos enfocamos en estrategias de crecimiento a largo plazo, minimizando la volatilidad innecesaria y evitando la correlación con mercados tradicionales. Esto nos permite generar retornos sólidos en cualquier entorno económico, sin depender de la suerte o de las tendencias fugaces.</p>
                </div>

                <div className="diferencia__card">
                    <h3>La innovación es nuestra brújula</h3>
                    <br />
                    <p>No buscamos inversiones convencionales porque sabemos que la verdadera rentabilidad está en la innovación. Apostamos por empresas y sectores que están redefiniendo el futuro: desde la automatización avanzada hasta la revolución financiera digital. Esto no solo nos diferencia de los inversores tradicionales, sino que también nos permite generar crecimiento sostenible con riesgos controlados. No seguimos tendencias, creamos estrategias para adelantarnos a ellas.</p>
                </div>

              </div>
            </div>
        </section>

        <section className='carrusel section'>
          <div className='carrusel__container bd-grid'>
            <Carrusel/>
          </div>
        </section>

        <section className='empresas section'>
            <h2 className='bd-grid center__title' >Empresas contratendencia 2025</h2>
            <div className='empresas__container bd-grid'>
               <EmpresaCard/>
               <EmpresaCard/>
               <EmpresaCard/>
               <EmpresaCard/>
               <EmpresaCard/>
               <EmpresaCard/>
            </div>
        </section>

        <section className='socioCall section'>
          <div className='socioCall__container bd-grid'>
              <div className='socioCall__info'>
                  <h2>Hazte Socio</h2>
                  <ul className='socioCall__list'>
                    <li>Comunidad Contratendencia</li>
                    <li>Únete a la Comunidad Contratendencia</li>
                    <li>Foro o sección de comentarios donde los usuarios puedan compartir ideas.</li>
                    <li>Encuestas: "¿Qué sectores crees que serán los más rentables en 5 años?".</li>
                  </ul>
                  <div className='content__btn'>
                    <Link to="/suscribe" className='socioCall__btn'>Suscribirse</Link>
                  </div>
              </div>
              <div className='socioCall__img'>
                <img src={callSocio} alt="" />
              </div>
          </div>
        </section>


        <section className='historias section'>
          <h2 className='center__title'>Historias Financieras</h2>
          <div className='historias__container bd-grid'>
            <HistoriasCard titulo="Cuando subio el dolar a 5.000 pesos colombianos en colombia." parrafoUno='Cuando el dólar llegó a los 5.000 pesos colombianos, Don Jaime, un comerciante veterano, decidió sacar ventaja de la situación. En lugar de lamentarse por el precio de los productos importados, colocó un cartel en su tienda que decía: "¡Compras en dólares con descuento, pero paga en pesos!" Los clientes, confundidos, comenzaron a calcular cómo ahorrar, creando una fila que parecía más una reunión de matemáticos frustrados que compradores. Al final del día, Don Jaime estaba agotado de explicar que no existía tal descuento, pero sus ventas se habían triplicado gracias a la curiosidad y el caos' parrafoDos='Por otro lado, Doña Marta, quien nunca había entendido del todo cómo funcionaban las tasas de cambio, decidió "invertir" en un viaje al extranjero. Compró dólares creyendo que eran un billete directo a la riqueza y se dirigió al aeropuerto lista para "hacer fortuna". Al llegar, descubrió que su presupuesto solo alcanzaba para comprar un café en el aeropuerto de Miami. Con una sonrisa nerviosa y su café caro en mano, regresó a casa con una nueva filosofía: "Si el dólar sube, yo bajo mis expectativas." ¡Un día financiero lleno de lecciones y risas!'/>
            <HistoriasCard titulo="El precio de la confianza" parrafoUno='Carlos invirtió todos sus ahorros en un proyecto que prometía rentabilidad asegurada. La empresa le mostraba gráficos ascendentes, testimonios de éxito y garantías verbales de que su dinero estaba en buenas manos. Sin embargo, cuando intentó retirar sus ganancias, las respuestas se volvieron evasivas y los correos electrónicos dejaron de llegar.' parrafoDos='Al darse cuenta de la estafa, Carlos tuvo que enfrentar la realidad: la confianza ciega lo había dejado sin recursos. Aprendió por las malas que, en el mundo financiero, las promesas sin respaldo son solo espejismos. Ahora, su prioridad es investigar antes de invertir y asesorarse con expertos que le ofrezcan seguridad real.'/>
            <HistoriasCard titulo="El negocio que nació en la crisis" parrafoUno='Cuando la pandemia golpeó, Laura perdió su empleo y sus ahorros empezaron a agotarse. Con miedo pero sin otra opción, decidió vender postres desde su casa. Usó las redes sociales para promocionarse y, poco a poco, los pedidos comenzaron a llegar.' parrafoDos='Lo que comenzó como una solución temporal se convirtió en su propio negocio. Hoy, su pastelería online factura más de lo que ganaba en su antiguo trabajo. La crisis le enseñó que, a veces, las oportunidades nacen en los momentos más difíciles.'/>
            <HistoriasCard titulo="El gigante dormido." parrafoUno='Cuando las acciones de una empresa tecnológica cayeron abruptamente, muchos inversores entraron en pánico y vendieron. Los analistas tradicionales la daban por perdida, pero algunos inversionistas con visión a largo plazo vieron algo diferente: la compañía tenía fuertes patentes, un equipo innovador y mercados en crecimiento.' parrafoDos='Cinco años después, la empresa lanzó un producto revolucionario que disparó su valor en la bolsa. Quienes mantuvieron la inversión no solo recuperaron su dinero, sino que multiplicaron su capital varias veces. La lección fue clara: en el mercado, la paciencia y el análisis pueden ser más rentables que el miedo.'/>
          </div>

        </section>

      </main>
    <Footer/>
    </>
  )
}

export default HomePage;