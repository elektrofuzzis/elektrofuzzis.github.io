---
title: ftSwarmJST
layout: category
lang: de
classes: wide
sidebar:
    nav: products-de
---

Dieser Controller ist die Urfassung des ftSwarm und ist nicht mehr verfügbar. Sein Nachfolger ist der leistungsfähigere ftSwarmRS.

Die Ein- und Ausgänge sind gegen Verpolung und Überspannung geschützt. Ein Verpolungsschutz ist bei den Stiftleisten (I²C-, Servo- und ftPixel-Stecker) nicht möglich.

### Technische Daten

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmJSTPinout.svg" width="50%"> |
| **CPU**             | esp32-Wrover                                      | 
| **Speicher**        | 2 MB RAM, 4MB Flash                               |
| **Anschlüsse**      | JST                                               | 
| **Motor Ausgänge**  | 2 DC Motoren or Lampen, 9V, max. 1A pro Ausgang   | 
| **Sensor Eingänge** | 4 analoge oder digitale Sensoren                  | 
| **Servo Ausgänge**  | 1 x 6V Servo                                      | 
| **RGB LEDs**        | 2 onboard LEDs und bis zu 16 externe ftPixel      | 
| **Gyro**            | optional MPU6040 Gyro                             | 
| **I²C Interface**   | 3.3V Interface, sofern kein Gyro angeschlossen.   | 
| **Kommunikation**   | wifi                                              | 
| **USB Anschluß**    | Micro-USB                                         | 

### Stromversorgung

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


### Schaltplan

![](/assets/img/schematic/ftSwarmJST_CPU_1v15.svg)

![](/assets/img/schematic/ftSwarmJST_HAT_1v1.svg)