---
title: FtSwarmMiniMotor
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        In der Ansteuerung sind die alte Mini-Motoren und der neue XS-Motor identisch. Sie haben nur unterschiedliche Produktnummern.<br><br>
        Die Klassen FtSwarmXSMotor und FtSwarmMiniMotor können alternativ verwendet werden.
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: fischertechnik" src="/assets/img/motor/motor-mini.png">alte Minimotoren(31077, 31062)</div>
</div>

#### FtSwarmMiniMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmMiniMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: je nach Controllertyp von **FTSWARM_M1** bis **FTSWARM_M8**

#### FtSwarmMiniMotor( const char *name )

Constructor um ein FtSwarmMiniMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -100 bis 100.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.