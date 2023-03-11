import React from 'react'
import { useTranslation } from 'react-i18next'

import '../styles/sponsors.css'

const Sponsors = () => {
  const {t} = useTranslation()
  return (
    <footer className="sponsors-container">
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
            <div>
              <img src={"images/sponsorIMG/ls4techlogo.webp"} alt="sponsor" />
            </div>
            
          </div>
        </footer>
  )
}

export default Sponsors