---
title: FtSwarmWheelDrive
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Der Radantrieb wurde für die Fahrzeugmodelle der 1980er Jahre designed. Es ist ein 6V-Motor; verwenden Sie ihn ausschließlich am ftSwarmRC im Batteriebetrieb. Andere ftSwarm-Controller können nicht an die Batterieversorgung des Radantriebs angeschlossen werden - beim Anfahren des Radantriebs sinkt die Spannungskurve der Batterien zu stark ab und die Controller führen einen Neustart durch.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/motor/wheeldrive.png">Radantrieb (31494)</div>
</div>

#### FtSwarmWheelDrive(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmWheelDrive Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: **FTSWARM_M1** bis **FTSWARM_M4**

#### FtSwarmWheelDrive( const char *name )

Constructor um ein FtSwarmWheelDrive Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -100 bis 100.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.