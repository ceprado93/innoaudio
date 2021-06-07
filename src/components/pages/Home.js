import { useLayoutEffect, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../redux/store";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import downArrow from "../../assets/downArrow.svg";
import cliente1 from "../../assets/cliente1.svg";
import ContactForm from "../shared/ContactForm";
import whatsapp from "../../assets/whatsapp.svg";
import fb from "../../assets/fb.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Home = () => {
  let targetElement = document.querySelector("#home");

  const toogleOption = useSelector(selectOption);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    toogleOption
      ? disableBodyScroll(targetElement)
      : enableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [toogleOption]);

  return (
    <>
      {toogleOption && (
        <section className="menu">
          <div className="menu__list">
            <Link to="/servicios" onClick={() => dispatch({ type: "hide" })}>
              Servicios
            </Link>
            <Link to="/clientes" onClick={() => dispatch({ type: "hide" })}>
              Clientes
            </Link>
            <a href="#contacto" onClick={() => dispatch({ type: "hide" })}>
              Contacto
            </a>
          </div>
          <div className="menu__links">
            <a>
              <img src={whatsapp} alt="whatsapp" />
            </a>
            <a>
              <img src={fb} alt="fb" />
            </a>
            <a>
              <img src={instagram} alt="instagram" />
            </a>
            <a>
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </section>
      )}
      <div id="home">
        <header className="hero">
          <h1>Céntrate en tus pacientes, nosotros nos encargamos del resto</h1>
          <Link>Descubre Innoaudio</Link>
          <img className="bounce" src={downArrow} alt="downArrow" />
        </header>
        <section className="quienesSomos">
          <h1>¿Quiénes Somos?</h1>
          <p>
            InnoAudio es la empresa de referencia en la distribución,
            fabricación y reparación de prótesis auditivas. Más de 20 años en el
            sector y más de 300 clientes satisfechos avalan nuestro trabajo.
          </p>
          <p>
            Nuestro principal objetivo es que a través de un único proveedor
            puedas tener una coberura total de todos los productos y servicios
            que ofrece el sector audiológico.
          </p>
        </section>
        <section className="nuestrosServicios">
          <h1>Nuestros Servicios</h1>
          <p className="nuestrosServicios__desc">
            Céntrate en tus pacientes, nosotros nos encargamos del resto
          </p>
          <div>
            <article className="nuestrosServicios__Article">
              <p>Distribución multimarca en audífonos y repuestos.</p>
            </article>
            <article className="nuestrosServicios__Article">
              <p>Laboratorio de fabricación propia de producto a medida.</p>
            </article>
            <article className="nuestrosServicios__Article">
              <p>Laboratorio de reparación.</p>
            </article>
          </div>
        </section>
        <section className="areaCliente">
          <h1>Área de clientes</h1>
          <p className="areaCliente__desc">Crecemos contigo </p>
          <div>
            <article className="areaCliente__Article">
              <img src={cliente1} alt="cliente" />
              <p>
                - 72h Plazo de entrega - Newsletter trimestral con información
                actualizada del sector
              </p>
              <p>- Presupuesto de reparación 10€</p>
              <p>- Garantía de dos años en reparaciones</p>
              <p>
                - Newsletter trimestral con información actualizada del sector
              </p>
            </article>
            <article className="areaCliente__Article">
              <img src={cliente1} alt="cliente" />
              <p>- 72h Plazo de entrega</p>
              <p>- Presupuesto de reparación sin coste </p>
              <p>- Garantía de dos años en reparaciones</p>
              <p>
                - Newsletter trimestral con información actualizada del sector
              </p>
              <p>- 3 cursos de formación anuales</p>
              <p>- Bonificación del 3% total del pedido final de año</p>
            </article>
            <article className="areaCliente__Article">
              <img src={cliente1} alt="cliente" />
              <p>- 48h Plazo de entrega </p>
              <p>- Presupuesto de reparación sin coste </p>
              <p>- Garantía de dos años en reparaciones </p>
              <p>
                - Newsletter trimestral con información actualizada del sector{" "}
              </p>
              <p>- Acceso libre al campus de formación InnoAudio</p>
              <p>- Bonificación del 5% total del pedido final de año </p>
              <p>- Pago a 90 días</p>
            </article>
          </div>
          <div>
            <button className="areaCliente__btn"> CIENTE INNOAUDIO</button>
            <button className="areaCliente__btn">CLIENTE PRO</button>
            <button className="areaCliente__btn">CLIENTE PREMIUM</button>
          </div>
        </section>
        <div id="contacto">
          <ContactForm background="true" />
        </div>
      </div>
    </>
  );
};

export default Home;
