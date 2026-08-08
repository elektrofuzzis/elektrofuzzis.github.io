---
title: FtSwarmLamp
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        With this class fischertechnik lamps and LEDs can be operated at the outputs M1 and M2. Use class <a href="FtSwarmPixel">FtSwarmPixel</a> to run RGB-LEDs or ftPixels.
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: fischertechnik" src="/assets/img/LampLedDisplay/kombi.png">several LEDs and lamps</div>
</div>

If an LED is connected to a motor output with both cables, the polarity must be tested. If the LED does not light up, reverse the connections to the LED.

With the *fischertechnik* TX and TXT controllers the outputs can be extended to eight independent ports (O1..O8). This is only conditionally possible with the ftSwarm controllers. Two LEDs can be switched to GND at M1 or M2. These can be switched on alternately but not simultaneously. In this case use one instance of the class FtSwarmMotor for both LEDs. **setSpeed(255)** switches on one of the two LEDs, **setSpeed(-255)** the other LED. **setSpeed(0)** turns off both LEDs.
{: .notice--info}

#### FtSwarmLamp(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmLamp object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: **FTSWARM_M1** or **FTSWARM_M2**

#### FtSwarmLamp( const char *name )

Constructor to create a FtSwarmLamp object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void on( uint8_t power = 255 )

This function set the lamp or LED "on". Brightness could be specified optionally..

#### void off( void )

Set the lamp or LED off. Same as **on(0)**.

#### void setBlink( uint32_t periodMS, uint8_t signal, uint8_t duty, uint8_t pause, uint8_t b1, uint8_t b2, uint8_t b3 )

Sets the Lamp to blink effect.

- periodMS: Duration of a beat in ms
- signal: Number of signal beats
- pause: Number of pause beats
- b1: Lamp's brightness during signal
- b2: Lamp's brightness during signal pause
- b3: Lamp's brightness during pause

![Home](/assets/img/examples/blink-en.png)

#### void revokeEffect( uint8_t brightness )

Revoke the blink effect and set the lamp's brightness.
