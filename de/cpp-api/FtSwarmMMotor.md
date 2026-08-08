---
title: FtSwarmMMotor
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Die klassischen "grauen" M-Motoren aus den 1970er und 1980er Jahren.
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/motor/motor-m.png">M-Motoren (31039, 32618)</div>
</div>

#### FtSwarmMMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmMMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: je nach Controllertyp von **FTSWARM_M1** bis **FTSWARM_M8**

#### FtSwarmMMotor( const char *name )

Constructor um ein FtSwarmMMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -100 bis 100.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.