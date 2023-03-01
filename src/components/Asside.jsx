import { TbMap2 } from "react-icons/tb";
import { TiPhoneOutline } from "react-icons/ti";
import { TbZoomQuestion } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from 'react'
import '../styles/asside.css'

const Asside = () => {

  const {t} = useTranslation()
  const [pollutionLevelPre, setPollutionLevelPre] = useState(132)
  let pollutionLevel = "good"
  if(pollutionLevelPre>=0 && pollutionLevelPre<=49){
    pollutionLevel="good"
  }
  if(pollutionLevelPre>=50 && pollutionLevelPre<=99){
    pollutionLevel="fine"
  }
  if(pollutionLevelPre>=100 && pollutionLevelPre<=149){
    pollutionLevel="worse"
  }
  if(pollutionLevelPre>=150 && pollutionLevelPre<=199){
    pollutionLevel="bad"
  }
  if(pollutionLevelPre>=200 && pollutionLevelPre<=299){
    pollutionLevel="vbad"
  }
  if(pollutionLevelPre>=300){
    pollutionLevel="ebad"
  }
  const levels = {
    "good": 1,
    "fine": 2,
    "worse": 3,
    "bad": 4,
    "vbad": 5,
    "ebad": 6
  }
  const sourceIMG = levels[`${pollutionLevel}`]
  const randomTexts = 3
  return (
    <>
      <div className="aContainer">
          <div className="logosContainer">
            <Link to='/about'>
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
          <div className="aPollution">
            <div>
              {/* Zmienić tutaj height i width na cos innego */}
            <img src={`images/pollutionicons/${sourceIMG}.webp`}height="45px" width="80px"/>
              <h1>{t("AssideTitles.main")}{t(`AssideTitles.${pollutionLevel}`)}</h1>
              <h1>{t("AssideTitles.main2")}</h1>
            </div>
            <p>{t(`AssideTexts.${pollutionLevel}`)}</p>
            <p>{t(`AssideTexts.random${Math.floor(Math.random()*randomTexts+1)}`)}</p>
            <Link to='/pollutionindex'><p>{pollutionLevel=="good" ? `${t(`AssideTexts.link1`)}` : `${t(`AssideTexts.link2`)}`}</p></Link>
          </div>
      </div>
    </>
  );
};

export default Asside;
