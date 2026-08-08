---
title: LED Status Indicator
layout: category
lang: en
classes: wide
sidebar:
    nav: gettingstarted-en
---

The ftSwarm controllers indicate their operating status via RGB LEDs:

| LED | Description |
|:--|:--|
| ![Home](/assets/img/status/black.png) | Controller is powered off. Check the power supply. |
| ![Home](/assets/img/status/blue.png) | Controller is booting. |
| ![Home](/assets/img/status/yellow.png) | wifi is starting. |
| ![Home](/assets/img/status/green.png) | Ready for operation. |
| ![Home](/assets/img/status/red.png) | The controller has encountered an error. Wifi connection issues are often the cause. |
| ![Home](/assets/img/status/cyan.png) | Waiting for an I/O that is still offline. Check the log. |
| ![Home](/assets/img/status/aquamarine.png) | Identify. To locate a controller within a larger swarm, it can be marked light blue via the CLI. |
| ![Home](/assets/img/status/deeppink.png) | A fatal error has occurred. All motors have been shut down and program execution has been terminated. Check the logs.|
| ![Home](/assets/img/status/purple.png) | If, when resetting a controller, the S1 button or a pushbutton on A6 is pressed and released while the LEDs are lit purple, the controller will reset to factory settings.|

The ftSwarmControl has no LEDs and instead displays its status via the OLED display.