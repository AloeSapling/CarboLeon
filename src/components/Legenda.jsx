import React from 'react'
import { useTranslation } from 'react-i18next'

const Legenda = () => { 
  const { t } = useTranslation();

  return (
    <div className='lContainer'>
       <div className='LEContainer'>
         <div className='inline iDiv dVRed'></div>
         <h3 className='inline'>{t("Legend.ebad")}</h3>
       </div>
       <div className='LEContainer'>
         <div className='inline iDiv dPurple'></div>
         <h3 className='inline'>{t("Legend.vbad")}</h3>
       </div>
       <div className='LEContainer'>
           <div className='inline iDiv dRed'></div>
           <h3 className='inline'>{t("Legend.bad")}</h3>
       </div>
       <div className='LEContainer'>
         <div className='inline iDiv dOrange'></div>
         <h3 className='inline'>{t("Legend.worse")}</h3>
       </div>
       <div className='LEContainer'>
         <div className='inline iDiv dYellow'></div>
         <h3 className='inline'>{t("Legend.fine")}</h3>
       </div>
       <div className='LEContainer'>
         <div className='inline iDiv dGreen'></div>
         <h3 className='inline'>{t("Legend.good")}</h3>
       </div>
     </div>
  )
}

export default Legenda

//made by john333 🧑🏿‍🦱