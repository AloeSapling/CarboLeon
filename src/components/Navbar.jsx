import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const { i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "bg" : ""}>
      <Link to="/" className="full-logo">
        <img src={"logo.png"} alt="logo" className="logo" />
        <p>CarboLeon</p>
      </Link>
      <ul className={isOpen ? "open" : ""}>
        <button className="langBtn" onClick={() => handleClick("en")}>
          <img className="langimg" src={"flags/uk.png"} />
        </button>
        <button className="langBtn" onClick={() => handleClick("pl")}>
          <img className="langimg" src={"flags/Poland.png"} />
        </button>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/map">Pollution Map</Link>
        </li>
      </ul>
      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
