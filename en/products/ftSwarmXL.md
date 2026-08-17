---
title: ftSwarmXL
layout: category
lang: en
classes: wide
sidebar:
    nav: products-en
---

This controller is build for hard work. All connections to the screw terminals are protected against reverse polarity. Reverse polarity protection is not possible for the signals on the pin headers.

## Technical Data

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmXLPinout.svg" width="250"> |
| **CPU**           | esp32-S3 |
| **Memory**        | 2 MB RAM, 4MB Flash |
| **connectors**    | screw terminal |
| **Motor outputs** | 8 x DC motors or lamps, 9V, max. 1A each |
| **Sensor inputs** | 8 x analog or digital sensors |
| **RGB leds**      | 2 onboard leds |
| **I²C interface** | 3.3V interface |
| **Communication** | wifi or RS485 |
| **USB**           | USB-C |

### Power Supply
The device needs an external 9V power supply. Using USB power only you could flash your program or firmware but the IO's won't work correctly.

Three onboard 2A PTC fuses limits the device max. power budget. If you use all actor options, you need to calculate your power budget.
{: .notice--info}

- *ftSwarm* device, max. 270mA
- *fischertechnik* XM Motor / 135485, max. 950mA
- *fischertechnik* XS Motor / 137096, max. 265mA
- *fischertechnik* Mini Motor / 32293, max. 300 mA
- *fischertechnik* Encoder Motor / 153422, max. 465 mA
- *fischertechnik* Encoder Motor Competition / 186175, max. 1.200mA
- *fischertechnik* all types of LEDs, max. 10mA
- *fischertechnik* Lens tip lamp / 37875, max. 150mA
- *fischertechnik* Compressor / 121470, max. 200mA
- *fischertechnik* 3/2-way solenoid valve / 35327, max. 133mA
- *fischertechnik* Micro Servo 4.8/6V / 132292, max. 250mA

### Schematic

![](/assets/img/schematic/ftSwarmXL_1v00.svg)