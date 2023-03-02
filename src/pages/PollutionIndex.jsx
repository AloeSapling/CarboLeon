import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sponsors from "../components/Sponsors";
import '../styles/pollutionindex.css'

const PollutionIndex = () => {
  document.title = "CarboLeon | Pollution Index";
  const { t } = useTranslation();

  const [pollutionData, setPollutionData] = useState(null);
  const [pollutionLevel, setPollutionLevel] = useState("good");
  const [all, setAll] = useState(false);
  const url = "https://api.openweathermap.org/data/2.5/air_pollution?";

  function selectOnChange(props){
    if(props === "all"){
      setAll(true)
    } else{
      setAll(false)
      setPollutionLevel(props)
    }
  }
  useEffect(() => {
    fetch(`${url}lat=40&lon=40&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPollutionData(data);
      });
  }, []);
  if (pollutionData)
    return (
      <><>
        <div className="background-img">
          <h1>{t("PollutionIndexTitles.bgIMG")}</h1>
        </div>
        <div className="margin3">
          {/* <div className="pollution-params">
      <img
        src={`images/pollutionicons/${pollutionData.list[0].main.aqi}.webp`}
        alt="pollution icon"
        className="pollution-icon"
      />
      <div>
        <p>
          CO:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.co} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          NH<sub>3</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.nh3} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          NO:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.no} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          NO<sub>2</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.no2} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          O<sub>3</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.o3} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          PM<sub>2.5</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.pm2_5} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          PM<sub>10</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.pm10} μg/m<sup>3</sup>
          </span>
        </p>
        <p>
          SO<sub>2</sub>:
          <span className="bold">
            {" "}
            {pollutionData.list[0].components.so2} μg/m<sup>3</sup>
          </span>
        </p>
  </div>  */}
        </div>
        <div className="PollutionIndexContainer">
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
      </><Sponsors /></>
    );
};

export default PollutionIndex