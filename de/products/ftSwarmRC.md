---
title: ftSwarmRC
layout: category
lang: de
classes: wide
sidebar:
    nav: products-de
---

Der ftSwarmRC ist ersetzt den 4-Kanal-RC-Empfänger (3246X) als auch den RC-Funk-Empfänger (30272) aus den 1980er Jahren. 

Von beiden  Empfängertypen und auch der zugehörigen Fernbedienung funktionieren leider nur noch sehr wenige. Radantrieb und RC-Servos können nun wieder mit dem ftSwamRC eingesetzt werden. Somit lassen sich klassische Fahrzeugmodelle wie der Truck mit Planenauflieger (30477), dem Universalfahrzeug (30481) oder Teleskop-Mobilkran (30474) restaurieren. Als Fernbedienung wird ein ftSwarmControl eingesetzt.

Die alten Modelle erhalten ihre Spannungsversorgung über das, im Radantrieb eingebaute, Batteriefach. Die Leistungsendstufen des ftSwarmRC - und somit Motoren und RC-Servos - können über den Eingang **"6-9V"** bzw. **"BAT"** von der Batterie versorgt werden. Der Betrieb der digitalen Steuerung ist davon aus elektrischen Gründen getrennt. Dazu hat der ftSwarmRC ein eingebautes LiPo-Akku. Es kann durch den USB-C-Anschluss geladen werden.

Der Radantrieb kann an den Motorausgängen M1 bis M4 betrieben werden. Bitte achten Sie darauf, den Ausgang in der Firmware auf WheelDrive zu konfigurieren. Schließen Sie an den ftSwarmRC maximal einen Radantrieb an.

Die braunen Stecker der RC-Servos werden auf die Anschlüsse S1 bis S4 gesteckt. Der Motor des Servos wird an den korrespondierenden Motorausgang M1 bis M4 angeschlossen. Dabei können sowohl die Schraubquellen als auch die 3-poligen Stecker verwendet werden. Lässt sich der Servo nicht korrekt steuern, so ist in der Regel der Motorausgang "verpolt".

Alle Anschlüsse sind gegen Verpolung geschützt.

### Technische Daten

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmRCPinout.svg" width="75%"> |
| **CPU**             | esp32-S3 |
| **Speicher**        | 8 MB RAM, 4MB Flash |
| **Anschlüsse**      | Schraubklemmen, 3-pol. Stiftleisten |
| **Motor Ausgänge**  | 4 DC Motoren, Lampen, Radantrieb, RC-Servos, max. 1A pro Ausgang |
| **Sensor Eingänge** | 6 x analoge oder digitale Sensoren |
| **Servo Ausgänge**  | 4 X RC-Servo |
| **RGB LEDs**        | 1 onboard LEDs und bis zu 16 externe ftPixel |
| **Gyro**            | onboard LSM6 Gyro |
| **I²C Interface**   | 3.3V Interface |
| **Kommunikation**   | wifi |
| **USB Anschluß**    | USB-C - es werden 0,5A zum Laden des LiPo Akkus benötigt. |

Der Controller benötigt eine externe 9V Stromversorgung. Wird nur die USB-Buchse verwendet, so können nur die Firmware oder Programme geflashed werden; die Ein- und Ausgänge funktionen dann nicht.

Der Controller wird durch eine 2A Sicherung geschützt. Der maximale Stromverbrauch eines Controllers ist so auf 2A begrenzt. Wenn alle Ausgänge benutzt werden, muss der Gesamtverbrauch berechnet werden.
{: .notice--info}

- *ftSwarm* Controller, max. 270mA
- *fischertechnik* XM Motor / 135485, max. 950mA
- *fischertechnik* XS Motor / 137096, max. 265mA
- *fischertechnik* Mini Motor / 32293, max. 300 mA
- *fischertechnik* Encoder Motor / 153422, max. 465 mA
- *fischertechnik* Encoder Motor Competition / 186175, max. 1.200mA
- *fischertechnik* alle LED-Varianten, max. 10mA
- *fischertechnik* Linsenlampe / 37875, max. 150mA
- *fischertechnik* Compressor / 121470, max. 200mA
- *fischertechnik* 3/2-Weg Ventil / 35327, max. 133mA
- *fischertechnik* Micro Servo 4.8/6V / 132292, max. 250mA
- *fischertechnik* RC-Servo / 31495, max. 150mA
- *fischertechnik* Radantrieb / 31494, 1A

### Schaltplan

![](/assets/img/schematic/ftSwarmRS_CPU_210.svg)

![](/assets/img/schematic/ftSwarmRC_HAT_141a.svg)
