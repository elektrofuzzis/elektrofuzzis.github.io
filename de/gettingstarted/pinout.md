---
title: Pinout
layout: category
lang: de
classes: wide
sidebar:
    nav: gettingstarted-de
---
Jeder Controller hat einen USB-Anschluß, über den Sie die Firmware oder Ihr Steuerprogramm flashen können. Dies wird auf der nächsten Seite im Detail beschieben.

Der Controller kann zwar über den USB-Port gebootet werden; um die Ein- und Ausgänge des Controllers nutzen zu können, muss unbedingt die externe 9V-Versorgung aktiv sein. 

Die Sensoren im Modell werden an die Eingänge A1 bis A8 der Controller angeschlossen. An diese Anschlüsse können verschiedene analoge oder digitale Sensoren angeschlossen werden (z.B. Taster, Reedkontakte, Fototransistoren, Temperatursensoren ). Der Sensor wird einfach an die <span class="red">rote</span> und die <span class="green">grüne</span> Klemme angeschlossen. Bei einigen Sensoren muss auf die Polung geachtet werden, dann wird das am Sensor markierte Kabel an die <span class="red">rote</span> Klemme aufgelegt. Die <span class="green">grün</span> markierten Klemmen sind GND bzw. der fischertechnik "-"-Anschluss.

Die meisten Sensoren können an allen Eingängen angeschlossen werden. Je nach Controller und Eingang gibt es einzelne Einschränkungen - so kann z.B. ein Ultraschallsensor nur an A1 der Controllertypen ftSwarm und ftSwarmRS angeschlossen werden. Dies können Sie im Detail bei der Beschreibung der einzelnen Sensorklassen in der API-Referenz nachlesen.

Normale Aktoren (z.B. DC-Motoren, Lampen, Elektroventile) werden an die Motorausgänge M1 bis M8 angeschlossen. Für Servo-Motoren gibt es eigene Stecker.

Einige Controller verfügen über einen RS485-Anschluss um die Swarm-Kommunikation alternativ über Kabel abzubilden. Das Anschlussschema ist in einem eigenenen [RS485-Kapitel](../rs485) beschrieben.

<div class="flex-container">
  <div>
    <div><a href="../../products/ftSwarm">ftSwarm</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmJSTPinout.svg"></div>
    <div>
      <p class="pdetail">
        An dem I²C/Gyro-Stecker kann ein MPU6050-Gyro angeschlossen werden.<br><br>Für den Anschluß von ftPixeln gibt es einen eigenen Adapter der die Stiftleiste auf einen fischertechnik-Buchse umsetzt.<br><br>
        SD-Karten können in den seitlichen Schlitz am Gehäuse gesteckt werden.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmRS">ftSwarmRS</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmRSPinout.svg"></div>
    <div>
      <p class="pdetail">
        Im Gegensatz zum Vorgängermodell können ftPixel direkt an der Klemmleiste ohne Adapter angeschlossen werden.<br><br>
        SD-Karten können in den seitlichen Schlitz am Gehäuse gesteckt werden.</p></div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmXL">ftSwarmXL</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmXLPinout.svg"></div>
    <div>
      <p class="pdetail">
        Um genügend Leistung für die 8 Motorausgänge zur Verfügung zu stellen, gibt es drei 9V-Spannungsversorgungen, die alle angeschlossen werden müssen. Je nach Strombedarf kann dies über ein oder über mehrere Netzteile erfolgen.<br><br>
        Bitte beachten Sie in Ihrem Modell, dass der Motorausgang M7 beim Booten und beim Flashen der Firmware eingeschaltet ist.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmRC">ftSwarmRC</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmRCPinout2.svg"></div>
    <div>
      <p class="pdetail">
        Der ftSwarmRC ist ersetzt den 4-Kanal-RC-Empfänger (3246X) als auch den RC-Funk-Empfänger (30272) aus den 1980er Jahren.
        <br><br>
        Von beiden Empfängertypen und auch der zugehörigen Fernbedienung funktionieren leider nur noch sehr wenige. Radantrieb und RC-Servos können nun wieder mit dem ftSwamRC eingesetzt werden. Als Fernbedienung wird ein ftSwarmControl eingesetzt.
        <br><br>        
        Er kann jedoch mehr als die klassischen fischertechnik RC-Empfänger: Es ist möglich sowohl einen Radantrieb, bis zu 4 RC-Servos und normale Motoren sowie bis zu 6 Sensoren steuern.
        <br><br>
        Da er besonders für den Batteriebetrieb ab 4.6V optimiert ist, kann er durch das Batteriefach des Radantriebs versorgt werden. Bitte beachten Sie, dass Sei für den Betrieb des ftSwarmRC ein LiPo-Akku im Gehäuse verbauen müssen.<br><br>
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmControl">ftSwarmControl</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmControlPinout.svg"></div>
    <div>
      <p class="pdetail">
        Neben den normalen Eingängen hat der ftSwarmControl zusätzlich die beiden Joysticks (J1, J2) sowie sechs Taster (F1, F2, S1 bis S4).<br><br>
        Da der ftSwarmControl hat einen Ein- und Ausschalter (On), um die Batterie im Batteriefach zu schonen. Es können sowohl 9V-Blöcke als auch Akkus eingesetzt werden.<br><br>
        Der Controller kann auch ohne Batterie über den 9V-Stecker versorgt werden.<br><br>
        Die SD-Karte ist im unteren Gehäuse versteckt, zum Wechseln der Karte muss das Gehäuse aufgeschraubt werden.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmPwrDrive">ftSwarmPwrDrive</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmPwrDrivePinout.svg"></div>
    <div><p class="pdetail">Der Controller wird auf den I²C-Bus des ftPwrDive aufgesteckt und stellt dann die Schrittmotoren als Step1 bis Step4 im Swarm bereit.<br><br>An die Endschalter (ES1 bis ES4) und den Notaus (EM) können nur digitale Sensoren (Taster, Fototransistoren, Reddkontakte) angeschlossen werden.</p></div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmDuino">ftSwarmDuino</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmDuinoPinout.svg"></div>
    <div><p class="pdetail">Der Controller wird auf den I²C-Bus des ftPwrDive aufgesteckt und stellt dann die Motorausgänge des ftDuino als M1 bis M4 und die Eingänge als A1 bis A8 im Swarm bereit.<br><br>
    Für die 9V-Stromversorgung reicht es aus, die <span class="red">rote 9V-Klemme</span> mit dem daneben liegenden 9V-Ausgang des ftDuino zu verbinden. Der GND/Minusanschluß erfolgt automatisch über den I²C-Stecker.<br><br>
    Auf dem ftDuino selbst muss der Sketch ftDuino.ino geflashed werden. Laden Sie hierfür arduino-firmware.zip von der Release-Seite auf github herunter.
    </p></div>
  </div>
</div>
