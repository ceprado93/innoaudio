const ContactForm = ({ background }) => {
  return (
    <>
      {background === "true" ? (
        <section className="contactForm" style={{ backgroundColor: "#efeeed" }}>
          <h1>Contacto </h1>
          <p className="contactForm__desc">
            Cuéntanos tus dudas y te las resolveremos
          </p>
          <form>
            <div className="form-line">
              <input type="text" placeholder="NOMBRE" required />
              <input type="text" placeholder="APELLIDOS" required />
            </div>
            <div className="form-line">
              <input type="text" placeholder="CORREO" required />
            </div>
            <div className="form-line">
              <input type="text" placeholder="TELEFONO" required />
            </div>
            <div className="form-line">
              <textarea placeholder="CONSULTA" required />
            </div>

            <button type="submit" className="contactForm__btn">
              ENVIAR
            </button>
          </form>
        </section>
      ) : (
        <section className="contactForm" style={{ backgroundColor: "white" }}>
          <h1>Contacto </h1>
          <p className="contactForm__desc">
            Cuéntanos tus dudas y te las resolveremos
          </p>
          <form>
            <div className="form-line">
              <input
                style={{ backgroundColor: "#efeeed" }}
                type="text"
                placeholder="NOMBRE"
                required
              />
              <input
                style={{ backgroundColor: "#efeeed" }}
                type="text"
                placeholder="APELLIDOS"
                required
              />
            </div>
            <div className="form-line">
              <input
                style={{ backgroundColor: "#efeeed" }}
                type="text"
                placeholder="CORREO"
                required
              />
            </div>
            <div className="form-line">
              <input
                style={{ backgroundColor: "#efeeed" }}
                type="text"
                placeholder="TELEFONO"
                required
              />
            </div>
            <div className="form-line">
              <textarea
                style={{ backgroundColor: "#efeeed" }}
                placeholder="CONSULTA"
                required
              />
            </div>

            <button type="submit" className="contactForm__btn">
              ENVIAR
            </button>
          </form>
        </section>
      )}
    </>
  );
};
export default ContactForm;
