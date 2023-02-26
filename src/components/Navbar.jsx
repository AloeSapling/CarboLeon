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

  const { i18n, t } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "bg" : ""}>
      <Link to="/" className="full-logo">
        <img src={"images/logo.webp"} alt="logo" className="logo" />
        <p>CarboLeon</p>
      </Link>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <button
            className="langBtn"
            onClick={() => {
              handleClick("en");
              window.location.reload();
            }}
            alt="uk button"
          >
            <img className="langimg" src="images/flags/uk.png" alt="uk flag" />
          </button>
        </li>
        <li>
          <button
            className="langBtn"
            onClick={() => {
              handleClick("pl");
              window.location.reload();
            }}
            alt="poland button"
          >
            <img
              className="langimg"
              src="images/flags/poland.png"
              alt="poland flag"
            />
          </button>
        </li>
        <li>
          <Link to="/" className="header-link">
            {t("NavBar.Home")}
          </Link>
        </li>
        <li>
          <Link to="/about" className="header-link">
          {t("NavBar.About")}
          </Link>
        </li>
        <li>
          <Link to="/contact" className="header-link">
          {t("NavBar.Contact")}
          </Link>
        </li>
        <li>
          <Link to="/map" className="header-link">
          {t("NavBar.PolMap")}
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
