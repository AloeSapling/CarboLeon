import React from 'react'
import sponsor from '../pages/sponsorIMG/Logo-ETRONIX-rgb.png'
import '../styles/sponsors.css'
import sponsoroko from '../pages/sponsorIMG/okodesign.png'
import { useTranslation } from 'react-i18next'

const Sponsors = () => {
  const {t} = useTranslation()
  return (
    <footer className="sContainer">
          <h1>{t("Sponsors.1")}</h1>
          <div className="sponsors">
            <a href="https://www.e-tronix.eu/" target="_blank">
              <img src={sponsor} alt="sponsor" />
            </a>
            <a href="https://www.oko-design.com/" target="_blank">
              <img src={sponsoroko} alt="sponsor" />
            </a>
          </div>
        </footer>
  )
}

export default Sponsors