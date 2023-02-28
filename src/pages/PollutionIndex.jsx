import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Sponsors from "../components/Sponsors";
import '../styles/pollutionindex.css'

function PollutionIndex() {
  const [pollutionLevel, setPollutionLevel] = useState("good");
  const [all, setAll] = useState(false);
  function selectOnChange(props){
    if(props == "all"){
      setAll(true)
    } else{
      setAll(false)
      setPollutionLevel(props)
    }
  }
  document.title = "CarboLeon | PollutionTexts";
  const { t } = useTranslation();
  return (
    <>
      <div className="background-img">
        <h1>{t("PollutionIndexTitles.bgIMG")}</h1>
      </div>
      <div className="margin3">
        <div className="mContainer">
          <main className="main">
            {" "}
            {/* The main about section */}
            <h1>{t("PollutionTextTitles.what")}</h1>
            <div>{t("PollutionTexts.what")}</div>
            <h1>{t("PollutionTextTitles.why")}</h1>
            <div>{t("PollutionTexts.why")}</div>
            <h1>{t("PollutionTextTitles.wFight")}</h1>
            <div>{t("PollutionTexts.wFight")}</div>
            <div>
              <label htmlFor="pollutions">
                {" "}
                {t("PollutionIndexTitles.dropdowntitle")}{" "}
              </label>
              <select
                id="pollutions"
                name="pollutions"
                defaultValue="good"
                onChange={(e) => selectOnChange(e.target.value)}>
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
            <div className={`${all ? "noShowow": ""}`}>
              <h1>{t(`PollutionTextTitles.${pollutionLevel}`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.${pollutionLevel}`)}</p>
            </div>
            <div className={`${all ? "" : "noShowow"}`}>
            <h1>{t(`PollutionTextTitles.good`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.good`)}</p>
              <h1>{t(`PollutionTextTitles.fine`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.fine`)}</p>
              <h1>{t(`PollutionTextTitles.worse`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.worse`)}</p>
              <h1>{t(`PollutionTextTitles.bad`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.bad`)}</p>
              <h1>{t(`PollutionTextTitles.vbad`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.vbad`)}</p>
              <h1>{t(`PollutionTextTitles.ebad`)}</h1>
              <h1>{t("PollutionTexts.wDo")}</h1>
              <p>{t(`PollutionTexts.ebad`)}</p>
            </div>
          </main>
        </div>
      </div>
      <Sponsors />
    </>
  );
}

export default PollutionIndex;
