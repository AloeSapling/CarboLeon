import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import Sponsors from '../components/Sponsors'

function PollutionIndex() {
    const [pollutionLevel, setPollutionLevel] = useState('good');
  document.title = "CarboLeon | PollutionsTexts"
  const {t} = useTranslation()
  return (
    <>
        <div className="background-img">
    <h1>{t("About.title")}</h1>
  </div>
      <div className='margin3'>
        <div className='mContainer'>
          <main className='main'> {/* The main about section */}
          <h1>{t("PollutionsTextTitles.what")}</h1>
          <div>
            {t("PollutionsTexts.what")}
          </div>
          <h1>{t("PollutionsTextTitles.why")}</h1>
          <div>
            {t("PollutionsTexts.why")}
          </div>
          <h1>{t("PollutionsTextTitles.wFight")}</h1>
          <div>
            {t("PollutionsTexts.wFight")}
          </div>
          <div>
            <label for='pollutions'>Your city/area has...</label>
          </div>
          <select id='pollutions' name='pollutions' defaultValue="good" onChange={e => setPollutionLevel(e.target.value)}>
                <option value='good'>Good air quality</option>
                <option value='fine'>Fine air quality</option>
                <option value='worse'>Worse air quality</option>
                <option value='bad'>Bad air quality</option>
                <option value='vbad'>Very bad air quality</option>
                <option value='ebad'>Extremely bad air quality</option>
          </select>
          <h1>{t(`PollutionsTextTitles.${pollutionLevel}`)}</h1>
          <div>
            {t(`PollutionsTexts.${pollutionLevel}`)}
          </div>
          </main>
        </div>
    </div>
    </>

  )
}

export default PollutionIndex