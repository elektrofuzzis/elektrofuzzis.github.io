---
title: FtSwarmMiniMotor
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        In terms of control, the old mini motors and the new XS motor are identical. They only have different part numbers.<br><br>
        The FtSwarmXSMotor and FtSwarmMiniMotor classes can be used interchangeably.
    </div>
    <div class="apiright apiimg"><img title="Image source: fischertechnik" src="/assets/img/motor/motor-mini.png">old Minimotors(31077, 31062)</div>
</div>

#### FtSwarmMiniMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmMiniMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: Port number, **FTSWARM_M1** to **FTSWARM_M8**

#### FtSwarmMiniMotor( const char *name )

Constructor to create a FtSwarmMiniMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void setSpeed( int16_t speed )

Sets the motors speed.

- speed: speed value in the range from -100 to 100

#### uint16_t getSpeed()

Returns the motor's speed.