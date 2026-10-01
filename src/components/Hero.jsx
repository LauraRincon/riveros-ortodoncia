import { clinic } from "../data/clinic";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-label">ORTODONCIA Y SALUD DENTAL</span>

          <h1>
            Tu sonrisa,
            <br />
            nuestra prioridad.
          </h1>

          <p>
            Atención dental cercana y profesional para ayudarte
            a cuidar tu sonrisa con confianza.
          </p>

          <a
            href={`https://wa.me/${clinic.contact.whatsapp.replace(/\D/g, "")}`}
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            Agendar cita por WhatsApp
          </a>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <span>Foto de la clínica</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;