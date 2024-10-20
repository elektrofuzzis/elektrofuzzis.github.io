---
title: ftSwarmXL
layout: category
lang: de
classes: wide
sidebar:
    nav: products-de
---

Dieser Controller wurde für die echt großen Modelle designed. Alle Anschlüsse an den Schraubklemmen sind gegen Verpolung geschützt. Ein Verpolungsschutz ist bei den Signalen an den Stiftleisten nicht möglich.

### Technische Daten

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmXLPinout.svg" width="50%"> |
| **CPU**             | esp32-S3 |
| **Speicher**        | 2 MB RAM, 4MB Flash |
| **Anschlüsse**      | Schraubklemmen |
| **Motor Ausgänge**  | 8 DC Motoren or Lampen, 9V, max. 1A pro Ausgang |
| **Sensor Eingänge** | 8 x analoge oder digitale Sensoren |
| **RGB LEDs**        | 2 onboard LEDs und bis zu 16 externe ftPixel |
| **I²C Interface**   | 3.3V Interface |
| **Kommunikation**   | wifi oder RS485 |
| **USB Anschluß**    | USB-C |

Der Controller benötigt eine externe 9V Stromversorgung. Wird nur die USB-Buchse verwendet, so können nur die Firmware oder Programme geflashed werden; die Ein- und Ausgänge funktionen dann nicht.

Der Controller wird durch drei 2A-Sicherungen geschützt. Der maximale Stromverbrauch eines Controllers ist so auf 6 A begrenzt. Wenn alle Ausgänge benutzt werden, muss der Gesamtverbrauch berechnet werden.
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

![](/assets/img/schematic/ftSwarmXL_1v00.svg)
