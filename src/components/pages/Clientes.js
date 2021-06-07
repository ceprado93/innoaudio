import { useState, useLayoutEffect, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectOption } from "../redux/store";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import { Link } from "react-router-dom";

import ContactForm from "../shared/ContactForm";
import downArrow from "../../assets/downArrow.svg";
import maximagarantia from "../../assets/maximagarantia.svg";
import servicioPost from "../../assets/servicioPost.svg";
import laboratorio from "../../assets/laboratorio.svg";
import rapidos from "../../assets/rapidos.svg";
import mobiliario from "../../assets/mobiliario.svg";
import marketing from "../../assets/marketing.svg";
import asesoramiento from "../../assets/asesoramiento.svg";
import servicioTech from "../../assets/servicioTech.svg";
import cliente1 from "../../assets/cliente1.svg";
import whatsapp from "../../assets/whatsapp.svg";
import fb from "../../assets/fb.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const Clientes = () => {
  const [reveal, setReveal] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal1, setReveal1] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal2, setReveal2] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal3, setReveal3] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal4, setReveal4] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal5, setReveal5] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal6, setReveal6] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });
  const [reveal7, setReveal7] = useState({
    right: "reveal fadeInRight",
    left: "reveal fadeInLeft",
  });

  // document.addEventListener("scroll", (e) => scrollNav(e));

  let targetElement = document.querySelector("#clientes");

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
  }, [toogleOption, reveal]);

  // function scrollNav(e) {
  //   const scrollTop = window.pageYOffset;
  //   console.log(scrollTop);
  //   if (scrollTop > 270 && scrollTop < 290)
  //     return setReveal({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 670 && scrollTop < 690)
  //     return setReveal1({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 970 && scrollTop < 990)
  //     return setReveal2({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 1270 && scrollTop < 1290)
  //     return setReveal3({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 1570 && scrollTop < 1590)
  //     return setReveal4({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 1970 && scrollTop < 1990)
  //     return setReveal5({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 2170 && scrollTop < 2290)
  //     return setReveal6({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  //   else if (scrollTop > 2500 && scrollTop < 2590)
  //     return setReveal7({
  //       right: "reveal fadeInRight visible",
  //       left: "reveal fadeInLeft visible",
  //     });
  // }

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
      <div id="clientes">
        <header className="hero__clientes">
          <h1>Descubre las ventajas de ser cliente premium de InnoAudio</h1>
          <a>Descubre Innoaudio</a>
          <img className="bounce" src={downArrow} alt="downArrow" />
        </header>
        <section className="ventajas">
          <h1>Ventajas de ser Premium </h1>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p className={`ventaja__text ${reveal.left}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
            <p
              className={`ventaja__img ${reveal.right}`}
              style={{ backgroundImage: `url(${maximagarantia})` }}
            ></p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal1({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p
              className={`ventaja__img ${reveal1.left}`}
              style={{ backgroundImage: `url(${servicioPost})` }}
            ></p>
            <p className={`ventaja__text ${reveal1.right}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal2({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p className={`ventaja__text ${reveal2.left}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
            <p
              className={`ventaja__img ${reveal2.right}`}
              style={{ backgroundImage: `url(${laboratorio})` }}
            ></p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal3({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p
              className={`ventaja__img ${reveal3.left}`}
              style={{ backgroundImage: `url(${rapidos})` }}
            ></p>
            <p className={`ventaja__text ${reveal3.right}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal4({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p className={`ventaja__text ${reveal4.left}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
            <p
              className={`ventaja__img ${reveal4.right}`}
              style={{ backgroundImage: `url(${mobiliario})` }}
            ></p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal5({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p
              className={`ventaja__img ${reveal5.left}`}
              style={{ backgroundImage: `url(${marketing})` }}
            ></p>
            <p className={`ventaja__text ${reveal5.right}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal6({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p className={`ventaja__text ${reveal6.left}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
            <p
              className={`ventaja__img ${reveal6.right}`}
              style={{ backgroundImage: `url(${asesoramiento})` }}
            ></p>
          </div>
          <div
            className="ventajas__div"
            onReveal={() =>
              setReveal7({
                right: "reveal fadeInRight visible",
                left: "reveal fadeInLeft visible",
              })
            }
          >
            <p
              className={`ventaja__img ${reveal7.left}`}
              style={{ backgroundImage: `url(${servicioTech})` }}
            ></p>
            <p className={`ventaja__text ${reveal7.right}`}>
              InnoAudio resuelve uno de los grandes problemas del sector de la
              audición en España y pone a tu disposición las marcas más punteras
              del mercado y la mayor capacidad de repuestos con referencias de
              todos los fabricantes.
            </p>
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

export default Clientes;
