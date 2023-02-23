import React from "react";
import { useTranslation } from "react-i18next";

const Legenda = () => {
  const { t } = useTranslation();

  return (
    <div className="lContainer">
      <div className="LEContainer">
        <span className="inline iDiv dVRed"></span>
        <h3 className="inline">{t("Legend.ebad")}</h3>
      </div>
      <div className="LEContainer">
        <span className="inline iDiv dPurple"></span>
        <h3 className="inline">{t("Legend.vbad")}</h3>
      </div>
      <div className="LEContainer">
        <span className="inline iDiv dRed"></span>
        <h3 className="inline">{t("Legend.bad")}</h3>
      </div>
      <div className="LEContainer">
        <span className="inline iDiv dOrange"></span>
        <h3 className="inline">{t("Legend.worse")}</h3>
      </div>
      <div className="LEContainer">
        <span className="inline iDiv dYellow"></span>
        <h3 className="inline">{t("Legend.fine")}</h3>
      </div>
      <div className="LEContainer">
        <span className="inline iDiv dGreen"></span>
        <h3 className="inline">{t("Legend.good")}</h3>
      </div>
    </div>
  );
};

export default Legenda;

//made by john333 🧑🏿‍🦱
