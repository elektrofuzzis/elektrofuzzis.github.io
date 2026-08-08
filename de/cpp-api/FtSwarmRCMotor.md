---
title: FtSwarmRCMotor
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        RC-Servos bestehen technisch aus einen Motor und einem Potentiometer. Der Motor kann auch ohne Servo verwendet werden.<br><br>
        Dieser Motortyp steht nur am ftSwarmRC zur Verfügung.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/otherActors/motor-rcservo.png">RC-Servo (31495)</div>
</div>

#### FtSwarmRCMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmRCMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: **FTSWARM_M1** bis **FTSWARM_M4**

#### FtSwarmRCMotor( const char *name )

Constructor um ein FtSwarmRCMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -100 bis 100.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.