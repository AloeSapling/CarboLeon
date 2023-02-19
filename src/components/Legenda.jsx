import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";

Control.Watermark = Control.extend({

  onAdd: function (map) {
    const legend = DomUtil.create("div");
    legend.innerHTML += `
    <div class='lContainer'>
      <div class='LEContainer'>
        <div class='inline iDiv dVRed'></div>
        <h3 class='inline'>Zagrożenie dla życia (300+)<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dPurple'></div>
        <h3 class='inline'>Bardzo niezdrowa (201-300)<h3/>
      </div>
      <div class='LEContainer'>
          <div class='inline iDiv dRed'></div>
          <h3 class='inline'>Niezdrowa (151-200)<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dOrange'></div>
        <h3 class='inline'>Niezdrowa dla osób wrażliwych (101-150)<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dYellow'></div>
        <h3 class='inline'>Średnia (51-100)<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dGreen'></div>
        <h3 class='inline'>Dobra (0-50)<h3/>
      </div>
    </div>
    `
    legend.classList.add('lContainerContain')
    return legend;
  },

  onRemove: function (map) {},
});

export const LegendControl = createControlComponent(
  (props) => new Control.Watermark(props)
);