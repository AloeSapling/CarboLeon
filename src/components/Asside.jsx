import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

const Asside = (pollution) => {
  const { t } = useTranslation();
  const [pollutionScale, setPollutionScale] = useState(1);

  const hoverRef = useRef(null);

   useEffect(() => {
    if(pollution.pollution.aqi < 50) setPollutionScale(1);
    else if (pollution.pollution.aqi >= 51 && pollution.pollution.aqi < 101 ) setPollutionScale(2)
    else if (pollution.pollution.aqi >= 101 && pollution.pollution.aqi < 151 ) setPollutionScale(3)
    else if (pollution.pollution.aqi >= 151 && pollution.pollution.aqi < 201 ) setPollutionScale(4)
    else if (pollution.pollution.aqi >= 201 && pollution.pollution.aqi < 251 ) setPollutionScale(5)
    else setPollutionScale(6)
  }, []);

  console.log(pollution.pollution);

  return (
    <>
      <div className="logosContainer">
        <Link to="/about">
          <div>
            <TbZoomQuestion />
            <p>{t("asside.about")}</p>
          </div>
        </Link>
        <Link to="/contact">
          <div>
            <TiPhoneOutline />
            <p>{t("asside.consup")}</p>
          </div>
        </Link>
        <Link to="/map">
          <div>
            <TbMap2 />
            <p>{t("asside.map")}</p>
          </div>
        </Link>
      </div>
      {/* <div> */}
      <div className="pollution-params">
        <img
          src={`images/pollutionicons/${pollutionScale}.webp`}
          className="pollution-icon"
          alt={`pollution icon for ${pollutionScale} levels of pollutions`}
          onMouseOver={() => {
            hoverRef.current.style.display = "block";
          }}
          onMouseOut={() => {
            hoverRef.current.style.display = "none";
          }}
        />
        <p>Hover on image to see air pollution details !</p>
        <div className="hover-div" ref={hoverRef}>
          <div className="pollution-params-container">
            <p>CO:</p>
            <p className="bold">
              {pollution.pollution.iaqi.co.v} μg/m<sup>3</sup>
            </p>
          </div>
          <div className="pollution-params-container">
            <p>
              NO<sub>2</sub>:
            </p>
            <p className="bold">
              {pollution.pollution.iaqi.no2.v} μg/m<sup>3</sup>
            </p>
          </div>
          <div className="pollution-params-container">
            <p>
              O<sub>3</sub>:
            </p>
            <p className="bold">
              {pollution.pollution.iaqi.o3.v} μg/m<sup>3</sup>
            </p>
          </div>
          <div className="pollution-params-container">
            <p>
              PM<sub>2.5</sub>:
            </p>
            <p className="bold">
              {pollution.pollution.iaqi.pm25.v} μg/m<sup>3</sup>
            </p>
          </div>
          <div className="pollution-params-container">
            <p>
              PM<sub>10</sub>:
            </p>
            <p className="bold">
              {pollution.pollution.iaqi.pm10.v} μg/m<sup>3</sup>
            </p>
          </div>
          <div className="pollution-params-container">
            <p>
              SO<sub>2</sub>:
            </p>
            <p className="bold">
              {pollution.pollution.iaqi.so2.v} μg/m<sup>3</sup>
            </p>
          </div>
        </div>
      </div>

      {/*<h1>
        {t("AssideTitles.main")}
        {t(`AssideTitles.${pollutionLevel}`)}
      </h1>
      <h1>{t("AssideTitles.main2")}</h1>
       </div>
            <p>{t(`AssideTexts.${pollutionLevel}`)}</p>
            <p>{t(`AssideTexts.random${Math.floor(Math.random()*randomTexts+1)}`)}</p> */}
      <Link to="/pollutionindex">
        {/* <p>
            {pollutionLevel === "good"
              ? `${t(`AssideTexts.link1`)}`
              : `${t(`AssideTexts.link2`)}`}
          </p> */}
        pollution Index --&gt;
      </Link>
    </>
  );
};

export default Asside;
