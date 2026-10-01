import { clinic } from "../data/clinic";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#" className="logo">
          {clinic.name}
        </a>

        <nav className="navigation">
          <a href="#services">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#contact">Contacto</a>
        </nav>

        <a
          href={`https://wa.me/${clinic.contact.whatsapp.replace(/\D/g, "")}`}
          className="header-button"
          target="_blank"
          rel="noreferrer"
        >
          Agendar cita
        </a>
      </div>
    </header>
  );
}

export default Header;