---
title: ftSwarmJST
layout: category
lang: en
classes: wide
sidebar:
    nav: products-en
---

This controller is the original version of the ftSwarm and is no longer available. Its successor is the more powerful ftSwarmRS. All connections on the JST connectors are protected against reverse polarity. Reverse polarity protection isn't possible for the signals of the two pin headers.

### Technical Data

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmJSTPinout.png" width="250"> |
| **CPU**           | esp32-Wrover                               | 
| **Memory**        | 2 MB RAM, 4MB Flash                        | 
| **connectors**    | JST                                        | 
| **Motor outputs** | 2 x DC motors or lamps, 9V, max. 1A each   | 
| **Sensor inputs** | 4 x analog or digital sensors              | 
| **Servo outputs** | 1 x 6V servo                               |
| **RGB leds**      | 2 onboard leds<br>up to 16 external ftPixel via extension port|
| **Gyro**          | optional MPU6040 gyro                    | 
| **I²C interface** | 3.3V interface, if no gyro is installed. | 
| **Communication** | wifi |
| **USB**           | micro USB | 

### Power Supply

The device needs an external 9V power supply. Using USB power only you could flash your program or firmware but the IO's won't work correctly.

An onboard 2A PTC fuse limts the device max. power budget. If you use all actor options, you need to calculate your power budget.
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

![](/assets/img/schematic/ftSwarmJST_CPU_1v15.svg)

![](/assets/img/schematic/ftSwarmJST_HAT_1v1.svg)