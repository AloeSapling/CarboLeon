// import { createControlComponent } from "@react-leaflet/core";
// import { Control, DomUtil } from "leaflet";

// Control.Watermark = Control.extend({

//   onAdd: function (map) {
//     const legend = DomUtil.create("div");
//     legend.innerHTML += `
//     <div class='lContainer'>
//       <div class='LEContainer'>
//         <div class='inline iDiv dVRed'></div>
//         <h3 class='inline'>Zagrożenie dla życia (300+)<h3/>
//       </div>
//       <div class='LEContainer'>
//         <div class='inline iDiv dPurple'></div>
//         <h3 class='inline'>Bardzo niezdrowa (201-300)<h3/>
//       </div>
//       <div class='LEContainer'>
//           <div class='inline iDiv dRed'></div>
//           <h3 class='inline'>Niezdrowa (151-200)<h3/>
//       </div>
//       <div class='LEContainer'>
//         <div class='inline iDiv dOrange'></div>
//         <h3 class='inline'>Niezdrowa dla osób wrażliwych (101-150)<h3/>
//       </div>
//       <div class='LEContainer'>
//         <div class='inline iDiv dYellow'></div>
//         <h3 class='inline'>Średnia (51-100)<h3/>
//       </div>
//       <div class='LEContainer'>
//         <div class='inline iDiv dGreen'></div>
//         <h3 class='inline'>Dobra (0-50)<h3/>
//       </div>
//     </div>
//     `
//     legend.classList.add('lContainerContain')
//     return legend;
//   },

//   onRemove: function (map) {},
// });

// export const LegendControl = createControlComponent(
//   (props) => new Control.Watermark(props)
// );

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