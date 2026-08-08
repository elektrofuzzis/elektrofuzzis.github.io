---
title: Fernsteuerung
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

Über den Menüpunkt Fernsteuerung können Sie die Fernsteuerungsfunktion des ftSwarmControl aktivieren:

![Home](/assets/img/ftSwarmControl/remote/remote-de.png){:.align-center style="width: 25%;"}

Mit **SET** können Sie die Funktion verändern. Wählen Sie als erstes den Controller aus, für den Sie eine Funktion hinterlegen wollen:

![Home](/assets/img/ftSwarmControl/remote/controller.png){:.align-center style="width: 25%;"}

Anschließend wählen Sie die Funktion des Controllers aus:

![Home](/assets/img/ftSwarmControl/remote/type-de.png){:.align-center style="width: 25%;"}

Die Firmware legt nun fest, welcher Motor von welchem Bedienelement angesteuert wird.

<hr>

<style>
  .options-group { display: flex; gap: 20px; margin-bottom: 20px; justify-content: center; }
  .options-group label { display: flex; align-items: center; gap: 5px; cursor: pointer; }
  .vehicle-content { display: flex; flex-wrap: wrap; gap: 20px; }
  .vehicle-content div { flex: 0 0 calc((100% - (2 * 20px)) / 3); }
  .vehicle-content img { width: 100%; height: auto; display: block; }
  .vehicle-content img:hover { transform: scale(1.5); }
  .hidden { display: none !important; }
</style>

<div class="options-group">
  <p>W&auml;hlen Sie die gew&uuml;nschte Modellfunktion aus:</p>
  <label><input type="radio" name="vehicle" value="IDCAR" onclick="toggleVehicle(this.value)" checked><p>Auto</p></label>
  <label><input type="radio" name="vehicle" value="IDCATAPILLAR" onclick="toggleVehicle(this.value)"><p>Raupenfahrzeug</p></label>
  <label><input type="radio" name="vehicle" value="IDCRANE" onclick="toggleVehicle(this.value)"><p>Kran</p></label>
  <label><input type="radio" name="vehicle" value="IDTRAILER" onclick="toggleVehicle(this.value)"><p>Anhänger</p></label>
</div>

<div id="IDCAR" class="vehicle-content">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
</div>

<div id="IDCATAPILLAR" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<div id="IDCRANE" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<div id="IDTRAILER" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<script>
function toggleVehicle(selectedId) {
  const panels = document.querySelectorAll('.vehicle-content');
            
  panels.forEach(panel => {
    if (panel.id === selectedId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}
</script>



