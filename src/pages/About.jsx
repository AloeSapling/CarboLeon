import React, { useState, lazy } from "react";
import { useTranslation } from "react-i18next";

import "../styles/about.css";

const Sponsors = lazy("../components/Sponsors")

function About() {
  const { t } = useTranslation();
  document.title = `CarboLeon | ${t("NavBar.About")}`;

  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <div className="background-img">
        <h1>{t("About.title")}</h1>
      </div>
      <div className="margin">
        <div className="about-info">
          <h1>{t("About.1")}</h1>
          <div className={`about ${isDropdown ? "" : "about-drop-less"}`}>
            {t("About.Text")}
          </div>
        </div>
        <button
          className="dropdown-about"
          onClick={() => setIsDropdown((prev) => !prev)}
        >
          {!isDropdown ? t("About.btn-show") : t("About.btn-hide")}
        </button>
      </div>
      <Sponsors />
    </>
  );
}

export default About;
