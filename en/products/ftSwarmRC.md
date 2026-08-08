---
title: ftSwarmRC
layout: category
lang: en
classes: wide
sidebar:
    nav: products-en
---

The ftSwarmRC replaces both the 4-channel RC receiver (3246X) and the RC radio receiver (30272) from the 1980s.

Unfortunately, very few of these two receiver types—and the corresponding remote controls—are still in working order. Wheel drives and RC servos can now be used again with the ftSwarmRC. This makes it possible to restore classic vehicle models such as the truck with a flatbed trailer (30477), the utility vehicle (30481), or the telescopic mobile crane (30474). An ftSwarmControl is used as the remote control.

The old models receive their power supply via the battery compartment built into the wheel drive. The power output stages of the ftSwarmRC — and thus the motors and RC servos — can be powered by the battery via the **“6-9V”** or **“BAT”** input. For electrical reasons, the operation of the digital controller is separate from this. For this purpose, the ftSwarmRC has a built-in LiPo battery. It can be charged via the USB-C port.

The wheel drive can be operated on motor outputs M1 through M4. Please make sure to configure the output to “WheelDrive” in the firmware. Connect no more than one wheel drive to the ftSwarmRC.

Plug the brown connectors of the RC servos into terminals S1 through S4. Connect the servo’s motor to the corresponding motor output M1 through M4. You can use either the screw terminals or the 3-pin connectors. If the servo cannot be controlled properly, the motor output is usually “reversed.”

All connections are protected against reverse polarity.

## Technical Data

|---------------|------|
| | |
| **Pinout**    | <img alt="ftSwarm Pinout" src="/assets/img/ftSwarmRCPinout.svg" width="75%"> |
| **CPU**           | esp32-S3 |
| **Memory**        | 8 MB RAM, 4MB Flash |
| **connectors**    | screw terminal and 3-pin headers |
| **Motor outputs** | 2 x DC motors, lamps, RC-Servos and WheelDrive 9V, max. 1A each |
| **Sensor inputs** | 6 x analog or digital sensors |
| **Servo outputs** | 4 x RC-Servo |
| **RGB leds**      | 1 onboard led and up to 16 external ftPixel via extension port |
| **Gyro**          | onboard LSM6 gyro |
| **I²C interface** | 3.3V interface |
| **Communication** | wifi |
| **USB**           | USB-C |

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
- *fischertechnik* RC-Servo / 31495, max. 150mA
- *fischertechnik* WheelDrive / 31494, 1A

### Schematic

![](/assets/img/schematic/ftSwarmRS_CPU_210.svg)

![](/assets/img/schematic/ftSwarmRC_HAT_141a.svg)
