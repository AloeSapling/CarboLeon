import { createControlComponent } from "@react-leaflet/core";
import { Control, DomUtil } from "leaflet";

Control.Watermark = Control.extend({
  onAdd: function (map) {
    const legend = DomUtil.create("div");
    legend.innerHTML += `
    <div class='lContainer'>
      <div class='LEContainer'>
        <div class='inline iDiv dVRed'></div>
        <h3 class='inline'>Extremely Bad<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dPurple'></div>
        <h3 class='inline'>Very Bad<h3/>
      </div>
      <div class='LEContainer'>
          <div class='inline iDiv dRed'></div>
          <h3 class='inline'>Bad<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dOrange'></div>
        <h3 class='inline'>Slightly Bad<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dYellow'></div>
        <h3 class='inline'>Fine<h3/>
      </div>
      <div class='LEContainer'>
        <div class='inline iDiv dGreen'></div>
        <h3 class='inline'>Very Good<h3/>
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