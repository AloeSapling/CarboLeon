import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

const Asside = (pollution) => {
  const { t } = useTranslation();
  const [pollutionScale, setPollutionScale] = useState(1);

  const PollutonTypes = [
    {
      name: "Good",
      color: "#009c7b",
    },
    {
      name: "Fine",
      color: "#d2c248",
    },
    {
      name: "Worse",
      color: "#fd9b45",
    },
    {
      name: "Bad",
      color: "#d10035",
    },
    {
      name: "Very Bad",
      color: "#890633",
    },
    {
      name: "Extreamly Bad",
      color: "#a571e0",
    },
  ];

  const hoverRef = useRef(null);

  useEffect(() => {
    if (pollution.pollution.aqi <= 50) setPollutionScale(1);
    else if (pollution.pollution.aqi >= 51 && pollution.pollution.aqi <= 100)
      setPollutionScale(2);
    else if (pollution.pollution.aqi >= 101 && pollution.pollution.aqi <= 150)
      setPollutionScale(3);
    else if (pollution.pollution.aqi >= 151 && pollution.pollution.aqi <= 200)
      setPollutionScale(4);
    else if (pollution.pollution.aqi >= 201 && pollution.pollution.aqi <= 250)
      setPollutionScale(5);
    else setPollutionScale(6);
  }, [pollution.pollution]);
  return (
    <>
      <div className="logosContainer">
        <Link to="/about">
          <TbZoomQuestion />
          <p>{t("asside.about")}</p>
        </Link>
        <Link to="/contact">
          <TiPhoneOutline />
          <p>{t("asside.consup")}</p>
        </Link>
        <Link to="/map">
          <TbMap2 />
          <p>{t("asside.map")}</p>
        </Link>
      </div>
      <div className="pollution-params">
        <img
          src={`images/pollutionicons/${pollutionScale}.webp`}
          className="pollution-icon"
          alt={`pollution icon for ${pollutionScale} level of pollutions`}
          onMouseOver={() => {
            hoverRef.current.style.display = "block";
          }}
          onMouseOut={() => {
            hoverRef.current.style.display = "none";
          }}
        />
        <p
          className="aqi-info"
          style={{ color: PollutonTypes[pollutionScale - 1].color }}
        >
          {t("AsideOther.title")} {pollution.pollution.aqi}
        </p>

        <p>{t("AsideOther.desc")}</p>
        <div className="hover-div" ref={hoverRef}>
          {pollution.pollution.iaqi.co && (
            <div className="pollution-params-container">
              <p>CO:</p>
              <p className="bold">
                {pollution.pollution.iaqi.co.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
          {pollution.pollution.iaqi.no2 && (
            <div className="pollution-params-container">
              <p>
                NO<sub>2</sub>:
              </p>
              <p className="bold">
                {pollution.pollution.iaqi.no2.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
          {pollution.pollution.iaqi.o3 && (
            <div className="pollution-params-container">
              <p>
                O<sub>3</sub>:
              </p>
              <p className="bold">
                {pollution.pollution.iaqi.o3.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
          {pollution.pollution.iaqi.pm25 && (
            <div className="pollution-params-container">
              <p>
                PM<sub>2.5</sub>:
              </p>
              <p className="bold">
                {pollution.pollution.iaqi.pm25.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
          {pollution.pollution.iaqi.pm10 && (
            <div className="pollution-params-container">
              <p>
                PM<sub>10</sub>:
              </p>
              <p className="bold">
                {pollution.pollution.iaqi.pm10.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
          {pollution.pollution.iaqi.so2 && (
            <div className="pollution-params-container">
              <p>
                SO<sub>2</sub>:
              </p>
              <p className="bold">
                {pollution.pollution.iaqi.so2.v} μg/m<sup>3</sup>
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="pollution-info-name">
        {t("AssideTitles.main")}
        <span
          style={{
            color: PollutonTypes[pollutionScale - 1].color,
            fontWeight: 700,
          }}
        >
          {t(`AssideTitles.${pollutionScale}`)}
        </span>
      </p>
      <p className="h3">{t("AssideTitles.main2")}</p>
      <p>{t(`AssideTexts.${pollutionScale}`)}</p>

      <Link to="/pollutionindex" className="pollution-index-link">
        {pollutionScale === "1"
          ? `${t(`AssideTexts.link1`)}`
          : `${t(`AssideTexts.link2`)}`}
      </Link>
    </>
  );
};

export default Asside;
