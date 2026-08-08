---
title: FtSwarmSMotor
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Für diesen Motortyp werden unter der Produktnummer 32293 die Bezeichnungen S-Motor bzw. (neuer) Minimotor verwendet. Bitte beachten Sie, dass die Klasse FtSwarmMiniMotor für die alten Minimotoren gedacht ist.
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: fischertechnik" src="/assets/img/motor/motor-s.png">S Motor bzw. neuer Minimotor (32293)</div>
</div>

#### FtSwarmSMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: Je nach COntrollertyp **FTSWARM_M1** bis **FTSWARM_M8**

#### FtSwarmSMotor( const char *name )

Constructor um ein FtSwarmSMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -100 bis 100.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.