---
title: FtSwarmRotaryEncoder
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        Rotary encoders measure a rotary movement in both directions. The sensor on the ftSwarm is a counter that counts up or down depending on the direction of rotation. This technically requires two signals that are slightly offset in time.
    </div>
    <div class="apiright apiimg"><img title="Image: elektrofuzzis" src="/assets/img/switches/rotary-api.png">Rotary Encoder</div>
</div>
<br>
Applications for rotary encoders are control elements (steering wheels, servo offset control, rotary wheel for selection) and the measurement of movement or angles (cable movement of a cableway, angular position of a rocker).

There are no rotary encoders from fischertechnik available. Although you can use an fischertechnik encoder motor as a counter, it cannot be used to determine the direction of rotation.

<div class="table-2-col">

  <div>
    <div>
      ftRotaryEncoder and ftKnob<hr>
    </div>
    <div>
      <img  class="zoom" src="/assets/img/rotary/rotary_encoder.png">
    </div>  
    <div>
    <p>
        Using a small <a href="http://jtxp.org/tech/schrittmotordrehgeber.htm">additional circuit</a>, stepper motors can be used as encoders. The self-induction of a bipolar stepper motor is amplified and thus the resolution of the stepper motor is measured. So it's easy to achieve resolutions of 1/200 of a revolution.
        <br><br>
        The ftRotaryEncoder combines this circuit in a housing. A bipolar stepper motor is connected as the sensor. The housing can be screwed to the head of the NEMA-14 stepper motors of the ftPwrDrive using long M3 screws to save space.
        <br><br>
        The ftKnob is designed as a rotary control. A suitable stepper motor is already installed in it.
        <br><br>
        Both sensors must be supplied with 9V, the two connections Q1 and Q2 are connected to the corresponding <span class="red">red</span> marked inputs on the ftSwarm. The stepper motor is also connected to the ftRotaryEncoder - the first coil is connected to the two upper connections and the lower coil of the stepper motor is connected to the two lower connections.
        <br><br>
        Caution! The Q1 and Q2 connections can be destroyed if the polarity is reversed. The stepper motor connections are only suitable for low currents - under no circumstances should the stepper motor be supplied in parallel with the ftRotaryEncoder by a power output stage such as the ftPwrDrive!
      </p>
    </div>
  </div>

  <div>
    <div>
      fischertechnik equipment<hr>
    </div>
    <div>
      <img  class="zoom" src="/assets/img/rotary/rotary_principle.png">
    </div>  
    <div>
      <p>
        Simple rotary encoders can be built yourself with fischertechnik equipment. They consist of two parts, a coding disk and two sensors.  
        <br><br>
        The rotary disk 60 or inner number wheel 30 can be used as the coding disk. Either two light barriers that measure the holes in the coding disk are suitable as sensors. If you insert neodymium magnets into the holes in the coding disk, you can also measure with the aid of two reed contacts. 
        <br><br>
        This allows movements to be measured in steps of 1/6 or 1/12 revolutions.
        <br><br>
        If the rare CNY 37 roller wheels and light barriers are used as the coding disk, a resolution of 1/24 rotation is achieved.
        <br><br>
        fischertechnik pushbuttons are unsuitable for rotary encoders as they bounce too much.  
      </p>
    </div>
  </div>

</div>

Ready-made encoders are available as Arduino breakout boards - these often have a low resolution and require a 5V voltage source - or they come from the professional CNC sector and are relatively expensive.



#### FtSwarmRotaryEncoder(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create an FtSwarmRotaryEncoder object. If the addressed controller is not online, the firmware waits until the corresponding controller is started.

- serialNumber: Serial number of the ftSwarm-Controller.
- port: Port nummer, **FTSWARM_A1**, **FTSWARM_A2**, ..., **FTSWARM_A8**.

Even if a RotaryEncoder requires two ports, only one port is specified in the constructor. The second port is determined automatically - it is the next port on the same controller. If, for example, FTSWARM_A3 is specified as the port, the API uses FTSWARM_A4 as the second port.

#### FtSwarmRotaryEncoder(const char *name)

Constructor to create an FtSwarmRotaryEncoder object. If the addressed controller is not online, the firmware waits until the corresponding controller is started.

- name: Alias of the IO-port.

Even if a RotaryEncoder requires two ports, only one port is specified in the constructor. The second port is determined automatically - it is the next port on the same controller. If, for example, input A3 is specified as the port via the alias, the API uses A4 as the second input.

#### int16_t getCounter()

Returns the number of pulses counted.

#### void resetCounter()

Resets the counter to 0.

