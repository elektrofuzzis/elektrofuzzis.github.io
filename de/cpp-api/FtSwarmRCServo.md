---
title: FtSwarmRCServo
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Diese Klasse dient zur Ansteuerung eines fischertechnik RC-Servos am ftSwarmRC.<br><br>
        Die Kommados der Klasse stellen den Winkel des Servohebels ein.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Image source: fischertechnik" src="/assets/img/otherActors/motor-rcservo.png">RC Servo (31495)</div>
</div>

RC-Servos bestehen aus einem Potentiometer zur Winkelmessung und einem Motor. Im Gegensatz zu neueren Servos, findet die Regelung nicht im Servo selbst, sondern über den ftSwarmRC-Controller statt. Sollte der RC-Servo nicht auf Steuerkommandos reagieren, so drehen Sie die Polung der Motoransteuerung um.

Um die Servomotoren zu vereinfachen gibt es zwei Parameter:
- **Offset** wird dazu verwendet, um die Nullstellung des Servohebels zu trimmen. Es ist somit die elektrische Variante des Trimmrads am BT Control Set.
- **Position** wird zur eigentlichen Steuerung des Winkels in der Applikation verwendet.

#### FtSwarmRCServo(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmRCServo Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: **FTSWARM_SERVO1** bis **FTSWARM_SERVO4**

#### FtSwarmRCServo( const char *name )

Constructor um ein FtSwarmRCServo Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setPosition( int16_t position )

Setzt die Position bzw. den Winkel des Servoarms.

- position: Wert zwischen -45 und 45.

#### int16_t getPosition()

Gibt die Position bzw. den Winkel des Servoarms zurück.

#### void setOffset( int16_t offset )

Setzt die Nullstellung des Servoarms. Der Defaultwert ist 45 für eine mittlere Position.

- offset: Wert zwischen 0 und 90.

#### int16_t getOffset()

Gibt den Offest bzw. die Nullstellung des Servoarms zurück.
