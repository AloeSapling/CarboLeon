import React from 'react'
import sponsor from '../pages/sponsorIMG/Logo-ETRONIX-rgb.png'
import { useTranslation } from 'react-i18next'

const Sponsors = () => {
  const {t} = useTranslation()
  return (
    <section className="sContainer">
          <h1>{t("Sponsors.1")}</h1>
          <div className="sponsors">
            <a href="https://www.e-tronix.eu/">
              <img src={sponsor} alt="sponsor" />
            </a>
          </div>
        </section>
  )
}

export default Sponsors