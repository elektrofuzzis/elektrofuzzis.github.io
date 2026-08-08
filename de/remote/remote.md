---
title: Fernsteuerung
layout: category
lang: de
classes: wide
sidebar:
    nav: remote-de
---

Der ftSwarmControl kann sehr einfach als Fernsteuerung eingesetzt werden. Dabei wird der ftSwarmControl zur "gelbe" Fernsteuerung und ein zweiter ftSwarm-Controller zum Empfänger. Wie beim "roten" IR Control Set von fischertechnik ist die Zuordnung, welches Bedienelement welchen Motor steuert, fest vorgegeben.

![Home](/assets/img/ftSwarmControl/remote/example-de.png)

| Bedienelement | Aktor | Funktion |
|---|:---:|---|
| linker Joystick | Motor M1 | Der Motor kann als Antrieb für ein Fahrzeug verwendet werden. |
| rechter Joystick | Servo | Mit dem Servo kann die Lenkung realisiert werden. |
| Funktion+/- | Motor M2 | Wird der Button **Funktion+** gedrückt, so läuft der Motor M2 mit einer festen Geschwindigkeit. Mit Button **Funktion-** dreht der Motor in die umgekehrte Richtung. Dieser Motor kann z.B. für das Kippen der Mulde eines LKWs verwendet werden. |

Um verschiedene Modelltypen steuern zu können, kann zwischen vier verschiedenen Belegungen ausgewählt werden:
- **Auto**: Der linke Joystick steuert M1, der rechte Joystick einen Servo - Antrieb und Lenkung. Die Buttons F1/F2 können eine zusätzliche Funktion wie eine Mulde steuern. Über die Tasten S1/S2/S3 lassen sich mit ftPixeln Scheinwerfer, Blinker und Rücklichter realisieren.
- **Raupenfahrzeug**: Die beiden Joysticks steuern die Motoren M1 und M2 an. Somit lassen sich Fahrzeuge mit Raupenantrieb wie Planierraupen oder Panzer bauen.
- **Kran**: Der linke Joystick steuert den Kranharken an M1, mit dem rechten Joystick kann der Kran über M2 gedreht werden. F1 und F2 steuern entweder die Laufkatze bei Turmdrehkran oder das Wippwerk eines Autokrans. (Nur bei Controllern mit mehr mindestens 4 Motorausgängen.)
- **Anhänger**: Die Tasten F1/F2 steuern einen Motor, z.B. das Stützrad eines Trailes.

*Welche Funktionen bereitgestellt werden, ist vom verwendeten Empfänger abhängig. Ein ftSwarmRS hat z.B. "nur" 2 Motor- aber einen Servoausgang. Der ftSwarmXL hat 8 Motorausgänge aber kein Servoausgang. Die genauen Belegungen sind am Ende der Seite dargestellt.*

Am ftSwarmControl können Sie bis zu vier verschiedene Konfigurationen hinterlegen. So können Sie mit einer Fernbedienung z.B. bis zu vier verschiedene Fahrzeuge steuern oder zwischen verschiedenen Betriebsmodi eines Fahrzeugs hin- und herschalten. Bei einem Autokran kann in einer Konfiguration das Fahren und in einer zweiten Konfiguration die Arbeit mit dem Kran hinterlegt sein.

Die Fernsteuerung benötigt keine Programmierung, die Funktion wird über das Display des ftSwarmControl eingerichtet.

### Step-by-Step Anleitung

Schalten Sie den ftSwarmController über den Schalter **ON** ein. Er zeigt auf dem Display eine Bootmeldung und schaltet kurz darauf auf den Statusbildschirm um:

![Home](/assets/img/ftSwarmControl/main.png){:.align-center style="width: 25%;"}

Drücken Sie nun den Button **SET** bzw. S4 um in die Einstellungen des ftSwarmControl zu gelangen.

![Home](/assets/img/ftSwarmControl/config-de.png){:.align-center style="width: 25%;"}

Sie können nun mit den Bedienelementen des ftSwarmControl die Menüs bedienen:
- Mit dem linken Joystick können Sie auf dem Bildschirm navigieren. 
- Drücken Sie auf den Joystick (Button J1), um eine markierte Option auszuwählen.
- Der Button F2 ist immer die "Escape"-Taste und bricht das jeweils aktuelle Menü ab. Die Funktion wird rechts oben mit dem ^-Zeichen visualisiert.
- Werden die Buttons S1 bis S4 verwendet, so ist deren Funktion am unteren Bildschirmrand eingeblendet.

### Firmware Version

Alle Controller benötigen immer die gleiche Firmwareversion. Sie können die Firmware direkt über diese Webseite [flashen](../../firmware/flash).

### WLAN

Die Controller kommunizieren untereinander über WLAN. Deshalb müssen Sie als nächsten das WLAN Ihres ftSwarmControl einstellen. Wählen Sie hierfür in **Einstellungen** den Menüpunkt **WLAN Einstellungen**:

![Home](/assets/img/ftSwarmControl/wifi/wifi-de.png){:.align-center style="width: 25%;"}

Stellen Sie den WLAN-Mode auf **Client**, wenn Sie zu Hause sind. **AP** ist der richtige Modus, wenn Sie im Außenbereich oder auf einer Ausstellung sind. In diesem Modus stellt der ftSwarmControl das WLAN-Netzwerk selbst zur Verfügung.

Wählen Sie anschließend die **SSID** und geben Sie das **Passwort** Ihres WLANs ein. 

Speichern Sie mit **Save** die Einstellungen. Der Controller startet neu.

Das WLAN muss nur auf der Fernbedienung, dem ftSwarmControl eingestellt werden. Wenn Sie möchten, können Sie auch das WLAN der Empfänger einrichten. Dies erfolgt über die serielle Konsole. Beim verbinden der Controller im nächsten Schritt, kann der ftSwarmControl die WLAN-Einstellungen auch an den Empfänger übertragen.

Weitere Informationen zur Konfiguration des WLANs finden Sie [hier](../../firmware/ftSwarmControl/wifi).

### Controller verbinden

Um einen oder mehrere Empfänger steuern zu können, müssen diese mit dem ftSwarmControl verbunden werden. Sie bilden dann einen Swarm.

Welchseln Sie in **Einstellungen** in den Menüpunkt **Swarm Konfiguration**. In der Swarm-Konfig werden Ihnen die Mitglieder im Swarm angezeigt:

![Home](/assets/img/ftSwarmControl/swarm/list-de.png){:.align-center style="width: 25%;"}

Mit den Buttons **+** und **-** können Sie weitere Controller/Empfänger hinzufügen oder löschen.

Ist das WLAN des neuen Controllers noch nicht konfiguriert, kann der ftSwarmControl die WLAN-Einstellungen an dem Empfänger übertragen. Dazu muss sich der Empfänger im Auslieferzustand  ([Werkseinstellungen](../../firmware/factoryreset)) befinden. Dabei wird das WLAN-Passwort einmalig unverschlüsselt übertragen.

Weitere Informationen zur Konfiguration des Swarms finden Sie [hier](../../firmware/ftSwarmControl/swarm).

### Funktion festlegen

Ihrem Controller müssen Sie im letzten Schritt eine Funktion zuweisen - welches Bedienelement des ftSwarmControl soll welchen Motor, Servo oder LED ansteuern?

Wechseln Sie in **Einstellungen** in den Menüpunkt **Fernsteuerung**:

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



