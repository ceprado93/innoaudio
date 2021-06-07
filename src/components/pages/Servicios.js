import { useLayoutEffect, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../redux/store";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import ContactForm from "../shared/ContactForm";
import { Link } from "react-router-dom";
import downArrow from "../../assets/downArrowBlack.svg";
import marcas from "../../assets/marcas.svg";
import whatsapp from "../../assets/whatsapp.svg";
import fb from "../../assets/fb.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Reparacion = () => {
  let targetElement = document.querySelector("#servicios");

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
      <div id="servicios">
        <header className="hero__servicios">
          <h1>Distribución, fabricación y reparación de audífonos</h1>
          <a href="#contacto">CONTACTA CON NOSOTROS</a>
          <img className="bounce" src={downArrow} alt="downArrow" />
        </header>
        <section className="distribucion">
          <h1>Distribución </h1>
          <p className="distribucion__desc">
            InnoAudio resuelve uno de los grandes problemas del sector de la
            audición en España y pone a tu disposición las marcas más punteras
            del mercado y la mayor capacidad de repuestos con referencias de
            todos los fabricantes.
          </p>
          <div>
            <img src={marcas} />
          </div>
        </section>
        <section className="fabricacion">
          <h1>Fabricación</h1>
          <p>
            Laboratorio de fabricación a medida. El primer laboratorio en España
            que cuenta con la normativaISO 13485 para la fabricación de medical
            devices y que nos permite un control de calidad individualizado por
            producto de máxima exigencia.
          </p>
          <p>
            Mediante técnicas innovadoras de diseño, producción y ensamblaje con
            tecnología 3D, tenemos la capacidad de fabricar hasta 100 unidades
            de audífonos a medida al día y más de 600 unidades de moldes de
            adaptación, baño y atenuación de sonido, garantizando así un plazo
            máximo de fabricación de 72 horas.
          </p>
        </section>
        <section className="reparacion">
          <h1>Reparación</h1>
          <p className="reparacion__desc">
            InnGeaudio, innovación e ingeniería aplicada a la audición
          </p>
          <div>
            <p>
              InnGeaudio nace de la imperativa necesidad que demanda el sector
              de poder ofrecer un laboratorio de reparación en España con una
              asistencia magistral y unos métodos tecnológicos que otorgan
              rapidez y eficacia a su labor.
            </p>
            <p>
              Nuestro equipo cuenta con más de 25 años de experiencia en el
              sector y una capacidad de reparación y fabricación sin precedentes
              en España
            </p>
            <p>
              La profesionalidad, el pleno concimiento tanto del software como
              del hardware de los audífonos y de los últimos avances
              tecnológicos otorgan un valor total a su trabajo y por
              consiguiente, a los centros auditivos y sus pacientes.
            </p>
          </div>
        </section>
        <div id="contacto">
          <ContactForm background="false" />
        </div>
      </div>
    </>
  );
};

export default Reparacion;
