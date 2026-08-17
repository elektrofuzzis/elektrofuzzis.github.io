---
title: ftSwarmPwrDrive
layout: category
lang: en
classes: wide
sidebar:
    nav: products-en
---

With this controller, you can integrate your existing ftPwrDrive controller into the Swarm. 

Therefore the ftSwarmPwrdrive controller is plugged into the I²C interface of the ftPwrDrive and supplied externally with 9V.

### Technical Data

|---------------|------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmPwrDrivePinout.svg" width="250"> |
| **CPU**             | esp32-S3                                          | 
| **Memory**        | 2 MB RAM, 4MB Flash                               | 
| **Connectors**      | screw terminal (ftSwarmPwrDrive) <br>4mm Bananenbuchsen (ftPwrDrive) |
| **Motor outputs**  | 4 x stepper motors (via ftPwrDrive controller)                   |
| **Sensor inputs** | 4 x digital limit switches, 1 emergency off (via ftPwrDrive controller)     |
| **RGB LEDs**        | 2 onboard LEDs                                    | 
| **I²C Interface**   | 5V interface for communication between ftSwarmPwrDrive and ftPwrDrive  |
| **Communictaion**   | wifi or RS485                                     | 
| **USB connector**    | USB-C                                             | 

The plug-on controller requires an external 9V power supply. If only the USB socket is used, only the firmware or programs can be flashed; communication with the ftPwrDrive will not work.

To prevent damage to the hardware, disconnect the power supply and USB port on the controllers used before plugging them together. Plug in the controllers carefully and in the orientation shown.