---
title: FtSwarmRCServo
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        This class is used to control a fischertechnik RC servo on the ftSwarmRC.<br><br>
        The commands of this class set the angle of the servo lever.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Image source: fischertechnik" src="/assets/img/otherActors/motor-rcservo.png">RC Servo (31495)</div>
</div>

RC servos consist of a potentiometer for angle measurement and a motor. Unlike newer servos, control does not take place within the servo itself, but rather via the ftSwarmRC controller. If the RC servo does not respond to control commands, reverse the polarity of the motor control.

To simplify servo control, there are two parameters:
- **Offset** is used to trim the zero position of the servo lever. It is, therefore, the electronic equivalent of the trim wheel on the BT Control Set.
- **Position** is used to actually control the angle within the application.

#### FtSwarmRCServo(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create an FtSwarmRCServo object. If the specified controller is not online, the firmware waits until the corresponding controller is started.

- serialNumber: Serial number of the ftSwarm controller.
- port: **FTSWARM_SERVO1** through **FTSWARM_SERVO4**

#### FtSwarmRCServo( const char *name )

Constructor to create an FtSwarmRCServo object. If the specified controller is not online, the firmware waits until the corresponding controller is started.

- name: Alias name of the I/O port.

#### void setPosition( int16_t position )

Sets the position or angle of the servo arm.

- position: Value between -45 and 45.

#### int16_t getPosition()

Returns the position or angle of the servo arm.

#### void setOffset( int16_t offset )

Sets the zero position of the servo arm. The default value is 45 for a center position.

- offset: Value between 0 and 90.

#### int16_t getOffset()

Returns the offset or zero position of the servo arm.
