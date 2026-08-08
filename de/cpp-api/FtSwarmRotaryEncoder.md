---
title: FtSwarmRotaryEncoder
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        RotaryEncoder bzw. Drehgeber messen eine Drehbewegung in beide Richtungen. Der Sensor am ftSwarm ist ein Zähler, der je nach Drehrichtung aufwärts bzw. abwärts zählt. Dazu werden technisch zwei, zeitlich etwas versetzte Signale benötigt.
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/switches/rotary-api.png">Drehgeber</div>
</div>
<br>
Anwendungsfälle für Drehgeber sind Steuerelemente (Lenkräder, Regler für den Offset eines Servos, Drehrad zur Auswahl) sowie die Messung von Bewegung oder Winkeln (Seilbewegung einer Seilbahn, Winkelstellung einer Wippe) im Modell.

Von fischertechnik gibt es keine RotaryEncoder. Man kann zwar einen Encodermotor als Zähler benutzen, die Drehrichtung lässt sich mit ihm nicht bestimmen.

<div class="table-2-col">

  <div>
    <div>
      ftRotaryEncoder und ftKnob<hr>
    </div>
    <div>
      <img  class="zoom" width="100%" src="/assets/img/rotary/rotary_encoder.png">
    </div>  
    <div>
    <p>
        Mit Hilfe einer kleinen <a href="http://jtxp.org/tech/schrittmotordrehgeber.htm">Zusatzschaltung</a> können Schrittmotoren als Messgeber eingesetzt werden. Dabei wird die Eigeninduktion eines bipolaren Schrittmotors verstärkt und somit die Auflösung des Schrittmotors gemessen. So lassen sich leicht Auflösungen von 1/200 Umdrehung erreichen.
        <br><br>
        Beim ftRotaryEncoder ist diese Schaltung fertig in einem Gehäuse verbaut. Als Sensor wird ein bipolarer Schrittmotor angeschlossen. Das Gehäuse kann platzsparend mit langen M3-Schrauben am Kopf der  NEMA-14 Schrittmotoren des ftPwrDrive verschraubt werden.
        <br><br>
        Der ftKnob ist als Drehregler gedacht. In ihm ist bereits ein passender Schrittmotor verbaut.
        <br><br>
        Beide Sensoren müssen mit 9V versorgt werden, die beiden Anschlüsse Q1 und Q2 werden an die entsprechenden <span class="red">rot</span> markierten Eingänge am ftSwarm angeschlossen. Beim ftRotaryEncoder wird zusätzlich der Schrittmotor angeschlossen - an die beiden oberen Anschlüsse wird die erste Spule, an die beiden unteren Anschlüsse die untere Spule des Schrittmotors.
        <br><br>
        Achtung! Die Anschlüsse Q1, Q2 können durch Verpolung zerstört werden. Die Schrittmotoranschlüsse sind nur für kleine Ströme geeignet - in keinem Fall darf zum ftRotaryEncoder der Schrittmotor durch eine Leistungsendstufe wie dem ftPwrDrive parallel versorgt werden!
      </p>
    </div>
  </div>

  <div>
    <div>
      fischertechnik Bordmittel<hr>
    </div>
    <div>
      <img  class="zoom" width="100%" src="/assets/img/rotary/rotary_principle.png">
    </div>  
    <div>
      <p>
        Einfache Drehgeber lassen sich mit fischertechnik Bordmitteln selbst bauen. Sie bestehen aus zwei Teilen, einer Kodierscheibe und zwei Sensoren. 
        <br><br>
        Als Kodierscheibe können die Drehscheibe 60 oder Innenzahlrad 30 verwendet werden. Als Sensoren eignen sich entweder zwei Lichtschranken, die die Löcher in der Kodierscheibe messen. Steckt man in die Löcher der Kodierscheibe Neodymmagnete so kann man auch mit Hilfe von zwei Reedkontakten messen. 
        <br><br>
        So lassen sich Bewegungen in Schritten von 1/6 bzw. 1/12 Umdrehungen messen.
        <br><br>
        Verwendet man als Kodierscheibe die seltenen Walzenräder und Lichtschranken vom Typ CNY 37 so wird eine Auflösung von 1/24 Umdrehung erreicht.
        <br><br>
        fischertechnik-Taster sind für Drehgeber ungeeignet, da sie zu sehr prellen.  
      </p>
    </div>
  </div>

</div>

Fertige Drehgeber gibt es als Arduino-Breakoutboards - diese haben häufig eine geringe Auflösung und benötigen eine 5V Spannungsquelle - oder sie kommen aus dem professionellen CNC-Bereich und sind verhältnismäßig teuer.


#### FtSwarmRotaryEncoder(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmRotaryEncoder Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: Portnummer, **FTSWARM_A1**, **FTSWARM_A2**, ..., **FTSWARM_A8**.

Auch wenn ein RotaryEncoder zwei Ports benötigt, wird im Konstruktor nur ein Port angegeben. Der zweite Port wird automatisch ermittelt - es ist der nächste Port auf dem gleichen Controller. Wird z.B. als Port FTSWARM_A3 angegeben, so nutzt die API als zweiten Port FTSWARM_A4.

#### FtSwarmRotaryEncoder(const char *name)

Constructor um ein FtSwarmRotaryEncoder Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

Auch wenn ein RotaryEncoder zwei Ports benötigt, wird im Konstruktor nur ein Port angegeben. Der zweite Port wird automatisch ermittelt - es ist der nächste Port auf dem gleichen Controller. Wird z.B. als Port über den Alias der Eingang A3 angegeben, so nutzt die API als zweiten Eingang A4.

#### int16_t getCounter()

Gibt die Anzahl der gezählten Impulse zurück.

#### void resetCounter()

Setzt den Zähler auf 0 zurück.

