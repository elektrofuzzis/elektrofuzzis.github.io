---
title: USB/Serial Connection
layout: category
lang: en
classes: wide
sidebar:
    nav: gettingstarted-en
---

Writing ftSwarm applications, you need to connect your ftSwarm controller to your PC to upload your program. 

During the first steps, you don't don't need to a power suppy. But your program will fail without a 9V power supply. So it's best to add an external power supply as well:

1. Connect your 9V power supply to the controller's 9V port. Once the controller has started, both ftSwarm RGB LEDs will be green. In case of the ftSwarmControl the OLED display will show a start screen as well. If there is no green led or working OLED display, please check 9V polarity as shown in the tech specs.

2. Connect the controller to your PC using a USB cable. Windows usually installs the necessary drivers automatically. On macOS and Linux, you may need to install and configure the correct driver. Almost all controllers use a [CH340C chip](http://www.wch-ic.com/downloads/CH341SER_ZIP.html). Only the ftSwarmControlUSBMicro uses a [CP210x chip](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

3. Check the list of identified COM ports in the Windows Device Manager. Disconnect your controller and connect it back, to verify which port disappears from the list and then shows back again.

### Linux

To check the device name for the serial port of your ftSwarm, run this command two times, first with the ftSwarm unplugged, then with plugged in.
The port which appears the second time is the one you need:

```
ls /dev/tty*
```

The currently logged user should have read and write access the serial port over USB. 
On most Linux distributions, this is done by adding the user to `dialout` group with the following command:

```
sudo usermod -a -G dialout $USER
```

On Arch Linux this is done by adding the user to `uucp` group with the following command:

```
sudo usermod -a -G uucp $USER
```

### macOS

To check the device name for the serial port of your ftSwarm, run this command two times, first with the ftSwarm unplugged, then with plugged in.
The port which appears the second time is the one you need:

```
ls /dev/cu.*
```