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
        <img src={"logo.webp"} alt="logo" className="logo" />
        <p>CarboLeon</p>
      </Link>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <a href="  ">
            <button className="langBtn" onClick={() => handleClick("en")} alt="uk button">
              <img className="langimg" src="flags/uk.png" alt="uk flag"/>
            </button>
          </a>
        </li>
        <li>
          <a href="  ">
            <button className="langBtn" onClick={() => handleClick("pl")} alt="poland button">
              <img className="langimg" src="flags/poland.png" alt="poland flag"/>
            </button>
          </a>
        </li>
        <li>
          <Link to="/" className="header-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/map" className="header-link">
            Pollution Map
          </Link>
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
