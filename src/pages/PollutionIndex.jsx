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
    <h1>{t("PollutionIndexTitles.bgIMG")}</h1>
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
            <label for='pollutions'> {t("PollutionIndexTitles.dropdowntitle")} </label>
            <select id='pollutions' name='pollutions' defaultValue="good" onChange={e => setPollutionLevel(e.target.value)}>
                <option value='good'>{t("PollutionDropdown.good")}</option>
                <option value='fine'>{t("PollutionDropdown.fine")}</option>
                <option value='worse'>{t("PollutionDropdown.worse")}</option>
                <option value='bad'>{t("PollutionDropdown.bad")}</option>
                <option value='vbad'>{t("PollutionDropdown.vbad")}</option>
                <option value='ebad'>{t("PollutionDropdown.ebad")}</option>
          </select>
          <label> {t("PollutionIndexTitles.dropdowntitle2")}</label>
          </div>
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