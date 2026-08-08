---
title: FtSwarmMMotor
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        Classic "gray" 70's & 80's motors.
    </div>
    <div class="apiright apiimg"><img title="Image source: fischertechnik" src="/assets/img/motor/motor-m.png">M Motors(31039, 32618)</div>
</div>

#### FtSwarmMMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmMMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: Port number, **FTSWARM_M1** to **FTSWARM_M8**

#### FtSwarmMMotor( const char *name )

Constructor to create a FtSwarmMMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void setSpeed( int16_t speed )

Sets the motors speed.

- speed: speed value in the range from -100 to 100

#### uint16_t getSpeed()

Returns the motor's speed.