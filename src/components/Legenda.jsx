import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";

Control.Watermark = Control.extend({
  onAdd: function (map) {
    const legend = DomUtil.create("div");
    legend.innerHTML += `
    <div class='lContainer'>
      <div class='LEContainer'>
        <div class='inline iDiv dVRed'></div>
        <h3 class='inline'>Ekstremalnie Słabe<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dPurple'></div>
        <h3 class='inline'>Bardzo Słabe<h3/>
      </div>
      <div class='LEContainer'>
          <div class='inline iDiv dRed'></div>
          <h3 class='inline'>Słabe<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dOrange'></div>
        <h3 class='inline'>Średnie<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dYellow'></div>
        <h3 class='inline'>W Porządku<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dGreen'></div>
        <h3 class='inline'>Bardzo dobre<h3/>
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