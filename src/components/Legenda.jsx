import React from "react";
import { useTranslation } from "react-i18next";

import '../styles/legend.css'

const Legenda = () => {
  const { t } = useTranslation();

  return (
    <div className="legend-container">
      <div className="legend-item">
        <span className=" pollution-box dark-red"></span>
        <p className="h3">{t("Legend.ebad")}</p>
      </div>
      <div className="legend-item">
        <span className=" pollution-box purple"></span>
        <p className="h3">{t("Legend.vbad")}</p>
      </div>
      <div className="legend-item">
        <span className=" pollution-box red"></span>
        <p className="h3">{t("Legend.bad")}</p>
      </div>
      <div className="legend-item">
        <span className=" pollution-box orange"></span>
        <p className="h3">{t("Legend.worse")}</p>
      </div>
      <div className="legend-item">
        <span className=" pollution-box yellow"></span>
        <p className="h3">{t("Legend.fine")}</p>
      </div>
      <div className="legend-item">
        <span className=" pollution-box green"></span>
        <p className="h3">{t("Legend.good")}</p>
      </div>
    </div>
  );
};

export default Legenda;

//made by john333 🧑🏿‍🦱
