---
title: Position & Geschwindigkeit
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
counterFrequency:
 - url: "/de/cpp-api/FtSwarmCounter/"
   image_path: "/assets/img/switches/counter.png"
   title: "Zähler"
 - url: "/de/cpp-api/FtSwarmFrequencyMeter/"
   image_path: "/assets/img/switches/frequency.png"
   title: "Frequenzmessung"
rotary:
 - url: "/de/cpp-api/FtSwarmRotaryEncoder/"
   image_path: "/assets/img/switches/rotary.png"
   title: "Drehgeber"
gyro:
 - url: "/de/cpp-api/FtSwarmGyro/"
   image_path: "/assets/img/gyro/gyro.png"
   title: "Gyro"
---

Es gibt diese Sensoren nicht bei *fischertechnik* out-of-the-box. Sie lassen sich aber aus *fischertechnik*-Bauteilen zusammensetzen.

### Zähler & Frequenzmessung

Als Eingangssignal für den Zähler und das Frequencymeter eignen sich:

- der Encoder des Encoder-Motors 
- das Walzenrad 32367 kann mit einer Gabellichtschranke (z.B. CNY37)
- Neodymmagnete in einer Drehscheibe 60 (31019) mit einem Reedkontakt (36120, 36137, 210332, 219834) 
- Lichtschranken aus *fischertechnik* LEDs und dem Fototransistor (36134)

Das Impulsrad in Verbindung mit einem *fischertechnik* Taster liefert keine guten Ergebnisse, da der Taster "prellt" und mit jedem Impuls ggf. mehrere Messwerte liefert.

Die Gabellichtschranke 5 (32357) aus dem Computing-Trainings-Roboter (30572) kann anstatt der Gabellichtschranke CNY37 ebenfalls eingesetzt werden. Sie benötigt aber eine zusätzliche 5V-Versorgung. Am ftSwarmRS und ftSwarmJST kann die 5V-Versorgung über den Servo-Anschluss - s. Pinoutdiagramme - realisiert werden. Achtung: Es besteht Verpolungsgefahr, die den ftSwarm und/oder die Gabellichtschranke zerstören kann.

{% include gallery id="counterFrequency" %}

### Drehgeber

Sehr gut geeignet sind:

- die Encoder zweier Encoder-Motoren
- ftKnob

Prinzipell lassen sich auch aus dem Walzenrad, mit Neodymmagneten und Lichtschranken Drehgeberencoder bauen. Für die meisten Anwendungen sind diese aber zu ungenau.

{% include gallery id="rotary" %}

### Gyro

Bei den neueren ftSwarm-Controllern ist immer ein Gyro on board (ftSwarmRS, ftSwarmRC, ftSwarmControlUSBC). Bei den älteren Modellen ftSwarmControlMicro, ftSwarmJST und ftSwarmXL kann optional ein MPU6050-Breakoutboard am Extensionport angeschlossen werden.

{% include gallery id="gyro" %}