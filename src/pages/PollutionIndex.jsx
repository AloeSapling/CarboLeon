import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Sponsors from "../components/Sponsors";
import "../styles/pollutionindex.css";

const PollutionIndex = () => {
  const { t } = useTranslation();
  document.title = `CarboLeon | ${t("NavBar.PolIndex")}`;

  const [pollutionLevel, setPollutionLevel] = useState("all");
  const [all, setAll] = useState(true);
  function selectOnChange(props) {
    if (props === "all") {
      setAll(true);
    } else {
      setAll(false);
      setPollutionLevel(props);
    }
  }
    return (
      <>
        <div className="background-img">
          <h1>{t("PollutionIndexTitles.bgIMG")}</h1>
        </div>

        <div className="PollutionIndexContainer">
          <main className="main">
            <h2 id="odd-h2">{t("PollutionTextTitles.what")}</h2>
            <div className="PollutionText">{t("PollutionTexts.what")}</div>
            <h2>{t("PollutionTextTitles.why")}</h2>
            <div className="PollutionText">{t("PollutionTexts.why")}</div>
            <h2>{t("PollutionTextTitles.wFight")}</h2>
            <div className="PollutionText">{t("PollutionTexts.wFight")}</div>
            <div className="select">
              <label htmlFor="pollutions">
                {" "}
                {t("PollutionIndexTitles.dropdowntitle")}{" "}
              </label>
              <select
                id="pollutions"
                name="pollutions"
                defaultValue="all"
                onChange={(e) => selectOnChange(e.target.value)}
              >
                <option value="good">{t("PollutionDropdown.good")}</option>
                <option value="fine">{t("PollutionDropdown.fine")}</option>
                <option value="worse">{t("PollutionDropdown.worse")}</option>
                <option value="bad">{t("PollutionDropdown.bad")}</option>
                <option value="vbad">{t("PollutionDropdown.vbad")}</option>
                <option value="ebad">{t("PollutionDropdown.ebad")}</option>
                <option value="all">{t("PollutionDropdown.all")}</option>
              </select>
              <label> {t("PollutionIndexTitles.dropdowntitle2")}</label>
            </div>
            <div className={`${all ? "noShowow" : ""}`}>
              <div className={`selected-info pollution-info-container p${pollutionLevel}`}>
                <h2 className="select-h2">
                  {t(`PollutionTextTitles.${pollutionLevel}`)}
                </h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">
                  {t(`PollutionTexts.${pollutionLevel}`)}
                </p>
              </div>
            </div>
            <div className={`${all ? "" : "noShowow"}`}>
              <div className="pgood pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.good`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.good`)}</p>
              </div>
              <div className="pfine pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.fine`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.fine`)}</p>
              </div>
              <div className="pworse pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.worse`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.worse`)}</p>
              </div>
              <div className="pbad pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.bad`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.bad`)}</p>
              </div>
              <div className="pvbad pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.vbad`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.vbad`)}</p>
              </div>
              <div className="pebad pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.ebad`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText" id="odd-p">
                  {t(`PollutionTexts.ebad`)}
                </p>
              </div>
            </div>
          </main>
        </div>
        <Sponsors />
      </>
    );
};

export default PollutionIndex;
