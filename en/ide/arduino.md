---
title: Arduino IDE 
layout: category
lang: en
classes: wide
sidebar:
    nav: manual-en
---

The are two Arduino IDE versions available. Supported versions are 1.8.19 or the latest 2.x version. Version 1.8.19 is faster on older PCs.

There are several necessary steps to installation install your environment. The instructions refer to version 2.x of the IDE. The configuration steps in the old version are the same, the menu navigation is slightly different.

### Download IDE

Download and install Arduino IDE from [arduino.cc](https://www.arduino.cc/en/software).

### Add boards manager URLs

Open *File/Preferences* in your Arduino IDE.

Please add at *additional boards manager URLs* **https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json**.

Goto *Tools/Board/Boards Manaager* and install the newest version of *esp32 by espressif systems*. If you just see 1.x-version please check the added URLs above.

### Install 3rd Party Libraries

You ftSwarm Firmware needs some additional 3rd-party-libraries. You could install them using *Tools\Manage libraries":

- *VL53L0X by Pololu* Version 1.3.1 or newer
- *MPU6050 by electroniccats* Version 1.4.4 or newer
- *U8g2 by oliver <olikraus@gmail.com>* Version 2.36.19 or newer
- *FastLED by Daniel Garcia* Version 3.10.3 or newer
- *STM32duino LSM6DSR by SRA* Version 2.2.0 or neuer

If you are using an ftSwarmDuino, you will also need the [ftDuino environment](https://harbaum.github.io/ftduino/www/manual/installation.html#2).

### Install ftSwarm Library

Download the latest ftSwarm library <a href="../../../assets/firmware/ftSwarm-0.7.1.zip">ftSwarm.zip</a>. Install the ZIP file via *Sketch\Import Library\Add ZIP Library*. All controllers use the same library.

### Flashing a Test Program

Create a new project in the Arduino IDE via *“File/New Sketch”*. Copy the following program into the new sketch and save it as *‘Firmware’* using *“File/Save As”*.

```cpp
#include “SwOS.h”

void setup( void ) {

  firmware();
  ESP.restart();

}

void loop( void ) {

  delay(1000);

}
```

![Home](/assets/img/arduino/statusbar.png)

1. Connect the controller to the PC via a USB cable and select the appropriate controller type and USB port.
3. Click the Upload button. The software will be compiled and flashed to the controller.
4. Launch the serial console and press the controller’s reset button. The firmware will initialize.

If you receive the error message **"A fatal error occurred: This chip is ESP32-S3, not ESP32. Wrong --chip argument?“** while flashing your program, or if the firmware displays the error **”FATAL: Incompatible firmware hardware settings."** in the serial console after starting or resetting the controller, you must select the correct controller in the Project Environment.
{: .notice--info}

In the Arduino IDE, you can set the firmware language in the serial console to English or German via *“Tools/Language”*.
{: .notice--info}