import React from 'react'
import '../styles/sponsors.css'
import { useTranslation } from 'react-i18next'

const Sponsors = () => {
  const {t} = useTranslation()
  return (
    <footer className="sContainer">
          <h1>{t("Sponsors.1")}</h1>
          <div className="sponsor">
            <a href="https://www.e-tronix.eu/" rel="noreferrer" target="_blank">
              <img src={"images/sponsorIMG/Logo-ETRONIX-rgb.webp"} alt="sponsor" />
            </a>
            <a href="https://www.oko-design.com/" rel="noreferrer" target="_blank">
              <img src={"images/sponsorIMG/okodesign.webp"} alt="sponsor" />
            </a>
            <a href="https://www.zsel1.pl/" rel="noreferrer" target="_blank">
              <img src={"images/sponsorIMG/ZSE.webp"} alt="sponsor" />
            </a>
            
          </div>
        </footer>
  )
}

export default Sponsors