---
title: FtSwarmSMotor
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        For this motor type, the designations “S-Motor” and (more recently) “MiniMotor” are used under product number 32293. Please note that the FtSwarmMiniMotor class is intended for the older MiniMotors.
    </div>
    <div class="apiright apiimg"><img title="Image source: fischertechnik" src="/assets/img/motor/motor-M.png">S Motor or new Minimotor (32293)</div>
</div>

#### FtSwarmSMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmSMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: Port number, **FTSWARM_M1** to **FTSWARM_M8**

#### FtSwarmSMotor( const char *name )

Constructor to create a FtSwarmSMotor object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void setSpeed( int16_t speed )

Sets the motors speed.

- speed: speed value in the range from -100 to 100

#### uint16_t getSpeed()

Returns the motor's speed.