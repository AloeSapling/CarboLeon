import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sponsors from "../components/Sponsors";
import "../styles/pollutionindex.css";

const PollutionIndex = () => {
  document.title = "CarboLeon | Pollution Index";
  const { t } = useTranslation();

  const [pollutionData, setPollutionData] = useState(null);
  const [pollutionLevel, setPollutionLevel] = useState("good");
  const [all, setAll] = useState(false);
  const url = "https://api.openweathermap.org/data/2.5/air_pollution?";

  function selectOnChange(props) {
    if (props === "all") {
      setAll(true);
    } else {
      setAll(false);
      setPollutionLevel(props);
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
      <>
        <div className="background-img">
          <h1>{t("PollutionIndexTitles.bgIMG")}</h1>
        </div>
        {/* <div className="margin3"> */}
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
        <div className="PollutionIndexContainer">
          <main className="main">
            {" "}
            {/* The main about section */}
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
              <div class="selected-info pollution-info-container">
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
              <div className="good pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.good`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.good`)}</p>
              </div>
              <div className="fine pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.fine`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.fine`)}</p>
              </div>
              <div className="worse pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.worse`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.worse`)}</p>
              </div>
              <div className="bad pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.bad`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.bad`)}</p>
              </div>
              <div className="vbad pollution-info-container">
                <h2 className="select-h2">{t(`PollutionTextTitles.vbad`)}</h2>
                <h3>{t("PollutionTexts.wDo")}</h3>
                <p className="PollutionText">{t(`PollutionTexts.vbad`)}</p>
              </div>
              <div className="ebad pollution-info-container">
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
