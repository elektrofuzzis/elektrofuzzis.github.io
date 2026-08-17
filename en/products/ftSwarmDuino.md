---
title: ftSwarmDuino
layout: category
lang: en
classes: wide
sidebar:
    nav: products-en
---

With this controller, you can integrate your existing ftDuinos controller into the Swarm. 

Therefore the ftSwarmDuino controller is plugged into the I²C interface of the ftDuino and supplied externally with 9V.

### Technical Data

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmDuinoPinout.svg" width="250"> |
| **CPU**             | esp32-S3                                          | 
| **Memory**        | 2 MB RAM, 4MB Flash                               | 
| **Connectors**      | screw terminal (ftSwarmDuino)<br>4mm Bananenbuchsen (via ftDuino controller) |
| **Motor outputs**  | 2 x DC motors or lamps (via ftDuino controller) |
| **Sensor inputs** | 8 x analog or digital sensors (via ftDuino controller) |
| **RGB LEDs**        | 2 onboard LEDs                                    |
| **I²C Interface**   | 5V interface for communication between ftSwarmDuino and ftDuino|
| **Communication**   | wifi or RS485                                     | 
| **USB connector**    | USB-C                                             | 

The plug-on controller requires an external 9V power supply. If only the USB socket is used, only the firmware or programs can be flashed; communication with the ftDuino will not work.

To prevent damage to the hardware, disconnect the power supply and USB port on the controllers used before plugging them together. Plug in the controllers carefully and in the orientation shown.