---
title: ftSwarmControlUDBMicro
layout: category
lang: de
classes: wide
sidebar:
    nav: products-de
---
Der ftSwarmControl ist ein fertiges Steuerpult für den Schwarm. Mit der Standardfirmware kann der ftSwarmControl auch als Fernbedienung genutzt werden, ohne dabei eine Zeile Code schreiben zu müssen. Er kann aber auch als Kelda mit einem eigenen Programm verwendet werden.

Die Ein- und Ausgänge sind gegen Verpolung und Überspannung geschützt. Ein Verpolungsschutz ist beim I²C-Stecker nicht möglich.

|---------------|------|
| **ftSwarmControl** | | 
| **Pinout**    | <img alt="ftSwarmControl Pinout" src="/assets/img/ftSwarmControlPinout.svg" width="50%">  |
| **CPU**           | esp32-Wrover                               | 
| **Speicher**        | 2 MB RAM, 4MB Flash                        | 
| **Anschlüsse**    | JST                                        | 
| **Motor Ausgänge** | 2 DC Motoren or Lampen, 9V, max. 1A pro Ausgang | 
| **Sensor Eingänge** | 1 analoger und 3 digitale Sensoren| 
| **Display**       | 128x64 Pixel OLED Display |
| **Buttons**       | 8 onboard Taster |
| **Joysticks**     | 2 onboard Joysticks |
| **Gyro**          | optionaler MPU6040 gyro |
| **I²C Interface** | 3.3V & 5V Interface |
| **Kommunikation** | wifi |
| **USB Anschluss** | Micro-USB |

Für den Betrieb benötigt der Controller benötigt eine externe 9V Stromversorgung. Das Flashen von Firmware oder von Programmen ist im reinen USB-Betrieb möglich. Ohne 9V Versorgung funktionieren die Ein- und Ausgänge nicht.

Der Controller wird durch eine 2A Sicherung geschützt. Werden alle Ausgänge verwendet, kann es sein dass das Powerbudget von 2A überschritten wird. 

- *ftSwarm* Controller, max. 150mA
- *ftSwarm* RGB-LED, max. 60mA each
- *fischertechnik* XM Motor / 135485, max. 950mA
- *fischertechnik* XS Motor / 137096, max. 265mA
- *fischertechnik* Mini Motor / 32293, max. 300 mA
- *fischertechnik* Encoder Motor / 153422, max. 465 mA
- *fischertechnik* Encoder Motor Competition / 186175, max. 1.200mA
- *fischertechnik* all types of LEDs, max. 10mA
- *fischertechnik* Lens tip lamp / 37875, 150mA
- *fischertechnik* Compressor / 121470, 200mA
- *fischertechnik* 3/2-way solenoid valve / 35327, max. 133mA
- *fischertechnik* Micro Servo 4.8/6V / 132292, max. 250mA
