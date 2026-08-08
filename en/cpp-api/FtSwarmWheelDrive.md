---
title: FtSwarmWheelDrive
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        The wheel drive was designed for vehicle models from the 1980s. It is a 6V motor; use it exclusively with the ftSwarmRC in battery mode. Other ftSwarm controllers cannot be connected to the wheel drive’s battery supply — when the wheel drive starts up, the batteries’ voltage drops too sharply, causing the controllers to reboot.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/motor/wheeldrive.png">wheel drive (31494)</div>
</div>

#### FtSwarmWheelDrive(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmWheelDrive object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: Port number, **FTSWARM_M1** to **FTSWARM_M8**

#### FtSwarmWheelDrive( const char *name )

Constructor to create a FtSwarmWheelDrive object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void setSpeed( int16_t speed )

Sets the motors speed.

- speed: speed value in the range from -100 to 100

#### uint16_t getSpeed()

Returns the motor's speed.