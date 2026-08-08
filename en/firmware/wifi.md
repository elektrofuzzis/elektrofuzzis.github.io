---
title: Wifi & Local Settings
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-en
---

In this section, you can configure the Wi-Fi settings and set up the controller's local hardware.

```
***** Wifi & Local Settings *****

hostname:            ftSwarm125
ip-address:          172.16.16.41

(w)  wifi mode: Client-Mode
(s)  SSID: Elektrofuzzis24
(p)  Password: *****
(c)  Channel: 1
(u)  Web UI: an
(f)  ftPixels in UI: 2
(e)  Extension Port: off
(g)  Gyro: off

(x)  Exit
```

### wifi-Modus

- CLIENT MODE uses an existing Wi-Fi network. This is usually the Wi-Fi network provided by your internet router.
- AP MODE does not require a router; the ftSwarm controller creates its own Wi-Fi network.
- OFF turns Wi-Fi off and significantly reduces power consumption.

If Wi-Fi is already available, you should definitely use it. Please note that ESP32 processors support only the 2.4 GHz band. 

If your Wi-Fi network has multiple repeaters or access points, each access point will broadcast your SSID on a different channel. This can lead to communication problems within the swarm, if the controllers connect to different access points. One possible solution is to provide a dedicated SSID for your swarm using only one access point. If that is not possible, use AP mode.

AP mode is enabled on only one controller. That controller then functions as an access point, and all other controllers in the swarm operate in client mode. Please note that in this case, there can be a maximum of 10 devices on the Wi-Fi network.

Turn off Wi-Fi only if you have just one controller in the swarm or if communication is handled entirely via RS485.

### SSID

Enter the name of your Wi-Fi network here.

### Passwort

Enter your Wi-Fi password here. If the controller is in AP mode, you must set a password that is at least 8 characters long starting with firmware version 0.7.0.

### Channel

This option is available only when the controller is in AP mode. 

You share Wi-Fi channels with other Wi-Fi networks. That’s why it’s important to select the “right” channel. ESP32 processors use the 2.4 GHz band. This band is divided into 11 channels, and adjacent channels overlap. If two adjacent channels are used by two Wi-Fi networks, they will interfere with each other. That’s why, on the 2.4 GHz band, it’s best if all Wi-Fi networks use only channels 1, 6, and 11. Ideally, there should be an unused channel. If one isn’t available, use a channel that’s already in use but whose adjacent channels are not in use. You can check which channels are already in use on most internet routers. You can also analyze this using your smartphone with the [wifiman](https://play.google.com/store/apps/details?id=com.ubnt.usurvey&hl=de&gl=US&pli=1) app.
{: .notice--info}


### WebUI

This option allows you to enable or disable the WebUI/status page.

### ftPixels in UI

This option allows you to specify how many ftPixels are displayed in the WebUI/status page. This is intended solely to improve the clarity of the status page. You can still control all connected ftPixels independently through your program.

### Extension Port

Some of the controllers have an extension port to which external hardware can be connected. 

Unlike the controller's other connections, this connection is not protected against overvoltage or reverse polarity.

| Controller             | I2C-Master | I2C-Slave | Output | Servo | Lidar |
|------------------------|:----------:|:---------:|:------:|:-----:|:-----:|
| ftSwarmJST             | X          | X         | X      | X     | X     |
| ftSwarmRS              | X          | X         | X      | X     | X     |
| ftSwarmXL              | X          | X         | X      | X     | X     |
| ftSwarmControlUSBMicro | X          |           |        |       |       |
| ftSwarmControlUSBC     | X          |           |        |       |       |

**Mode** sets the operating mode of the extension port.
- **off** turns the port off.
- **I2C Master** configures the port as an I²C bus. The controller acts as the bus master. Use this option if you want to connect your own I²C sensors. Wire.begin is executed by the firmware, so you do not need to perform any initialization.
- **I2C Slave** also configures the port as an I²C bus. In this case, the controller acts as the slave. This function can only be used to exchange data with a TXT controller.
- **Outputs** The two I/O pins of the extension port can then be configured via software as motor outputs. A PWM signal corresponding to the set speed value of the motor output is then present at the I/O pins. Please note that the I/O pin only provides a 3.3V logic level and cannot switch any actuators without additional hardware.
- **Servo** The two I/O pins of the extension port can then be configured via software as servo outputs. A PWM signal corresponding to the set servo position is then present at the IO pins. Please note that the provided 3.3V and 5V supply voltages cannot be used for the additional servos.
- **Lida** Connection of an external lidar sensor for distance measurement. This option is not yet stable.

If you have selected I2C slave mode, the following additional options are available:
- **I2C Slave Address**: The I2C address to which your controller responds
- **Interrupt Output**: When new data is available for the TXT, this motor output signals to the TXT that it must retrieve the data.
- **Interrupt Value for 0**: This value is set for the output when no interrupt is pending.
- **Interrupt Value for 1**: This value is set for the output when an interrupt is pending.
- **I2C Registers**: Number of I2C registers provided by the client.

### Gyro

If your controller has a gyro, it is turned off by default due to its power consumption. If you want to use the gyro, you must enable it using this option.

If you want to use an MPU6040 gyro with the ftSwarmJST or ftSwarmControlUSBMicro, set the “Extension Port” option to “I2C Master” and the ‘Gyro’ option to “On.”
