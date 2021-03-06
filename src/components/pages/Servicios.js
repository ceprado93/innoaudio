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
          <h1>Distribuci??n, fabricaci??n y reparaci??n de aud??fonos</h1>
          <a href="#contacto">CONTACTA CON NOSOTROS</a>
          <img className="bounce" src={downArrow} alt="downArrow" />
        </header>
        <section className="distribucion">
          <h1>Distribuci??n </h1>
          <p className="distribucion__desc">
            InnoAudio resuelve uno de los grandes problemas del sector de la
            audici??n en Espa??a y pone a tu disposici??n las marcas m??s punteras
            del mercado y la mayor capacidad de repuestos con referencias de
            todos los fabricantes.
          </p>
          <div>
            <img src={marcas} />
          </div>
        </section>
        <section className="fabricacion">
          <h1>Fabricaci??n</h1>
          <p>
            Laboratorio de fabricaci??n a medida. El primer laboratorio en Espa??a
            que cuenta con la normativaISO 13485 para la fabricaci??n de medical
            devices y que nos permite un control de calidad individualizado por
            producto de m??xima exigencia.
          </p>
          <p>
            Mediante t??cnicas innovadoras de dise??o, producci??n y ensamblaje con
            tecnolog??a 3D, tenemos la capacidad de fabricar hasta 100 unidades
            de aud??fonos a medida al d??a y m??s de 600 unidades de moldes de
            adaptaci??n, ba??o y atenuaci??n de sonido, garantizando as?? un plazo
            m??ximo de fabricaci??n de 72 horas.
          </p>
        </section>
        <section className="reparacion">
          <h1>Reparaci??n</h1>
          <p className="reparacion__desc">
            InnGeaudio, innovaci??n e ingenier??a aplicada a la audici??n
          </p>
          <div>
            <p>
              InnGeaudio nace de la imperativa necesidad que demanda el sector
              de poder ofrecer un laboratorio de reparaci??n en Espa??a con una
              asistencia magistral y unos m??todos tecnol??gicos que otorgan
              rapidez y eficacia a su labor.
            </p>
            <p>
              Nuestro equipo cuenta con m??s de 25 a??os de experiencia en el
              sector y una capacidad de reparaci??n y fabricaci??n sin precedentes
              en Espa??a
            </p>
            <p>
              La profesionalidad, el pleno concimiento tanto del software como
              del hardware de los aud??fonos y de los ??ltimos avances
              tecnol??gicos otorgan un valor total a su trabajo y por
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
