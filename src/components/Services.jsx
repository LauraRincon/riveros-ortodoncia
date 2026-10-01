import { clinic } from "../data/clinic";

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-heading">
          <span className="section-label">NUESTROS SERVICIOS</span>

          <h2 className="section-title">
            Cuidamos de tu sonrisa
          </h2>

          <p className="section-subtitle">
            Servicios pensados para cuidar tu salud dental y acompañarte
            en cada etapa de tu sonrisa.
          </p>
        </div>

        <div className="services-grid">
          {clinic.services.map((service, index) => (
            <article className="service-card" key={service.name}>
              <div className="service-icon">
                {["🦷", "✨", "🪥", "😁"][index] || "🦷"}
              </div>

              <h3>{service.name}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;