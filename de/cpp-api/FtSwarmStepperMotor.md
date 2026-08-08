---
title: FtSwarmStepperMotor
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Schrittmotoren können Ihre Achse um feste Winkel/Schritte verstellen und diese Position halten. Sie werden deshalb in X-Y-Tischen wie Plottern und Scannern sowie Roboterarmen verwendet.<br><br> 
        Der ftSwarmStepperMotor kann nur in Verbindung mit einem ftSwarmPwrDrive verwendet werden.<br><br>
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: fischertechnik" src="/assets/img/motor/motor-stepper.png">Schrittmotor</div>
</div>

Bei der Ansteuerung von Schrittmotoren wird dem Controller die Zielposition über die Anzahl der zu verfahrenden Schritten vorgegeben. Der Controller "fährt" die eingestellte Anzahl von Schritten mit einer vorgegebenen Geschwindigkeit. Die Geschwindigkeit wird im Gegensatz zu den normalen fischertechnik Motoren in Schritten pro Sekunde angegeben.

Um einen Schrittmotor zu starten, sind mehrere Schritte notwendig:
- Setzen der Schrittgeschwindigkeit mit **setSpeed**.
- Zielvorgabe der zu verfahrenden Schritte mit **setDistance**.
- Start des Motors mit **run**.
- Sobald die Zielposition erreicht ist, hält der Motor selbständig an.

Der Schrittmotor zählt seine verfahrenen Schritte. Damit das Modell seine absolute Position kennt, muss nach dem Start des Controllers zunächst eine Referenzposition angefahren werden. Der ftSwarmPwrDrive-Controller nutzt hierfür die kombinierten Referenz-/Endstopeingänge ES1 bis ES4.
- Setzen der Schrittgeschwindigkeit mit **setSpeed**.
- Starten Sie mit **homing** das Anfahren der Referenzposition. Die angegebene Distanz bestimmt über das Vorzeichen die Fahrtrichtung; wird innerhalb der angegebenen Distanz keine Referenzposition gefunden, bricht der Prozess ab. Wird der Referenzpunkt erkannt, so fährt der Motor einige Schritte zurück - somit ist der Endstopeingang wieder inaktiv. Die Distanz kann mit **setHomingOffset** zuvor festgelegt werden.

Verwenden Sie für präzise Referenzpositionen Reedkontakte. Fischertechnik Taster prellen sehr stark, so dass die Referenzposition nur ungenau gemessen werden kann. Wenn Sie die Eingänge nur als Endstops verwenden wollen, reichen normale Taster völlig aus.

Mit dem Homingprozess wird ein absolutes Koordinatensystem festgelegt. Der entsprechende Motor steht dann an seiner 0-Position. Fahrkommandos über **setDistance** können sich sowohl auf die absolute Position im Koordinatensystem als auch auf relative Positionen beziehen. Mit jeder Bewegung wird die Position im Koordinatensystem "mitgezählt".
- Mit **setPosition** können Sie die aktuelle Position im Koordinatensystem festlegen.
- **getPosition** gibt die aktuelle Position im Koordinatensystem zurück.

Bei fischertechnik spielen Schrittmotoren keine große Rolle. Sie wurden bislang nur in zwei Bausätzen - Computing Plotter+Scanner (30571) und dem 3D-Printer (533624) - eingesetzt. Die Ansteuerung erfolgte über das heute praktisch nicht mehr nutzbare Computing Interface bzw. der 3D-Printer Steuereinheit. Die in den Bausätzen verwendeten Schrittmotoren sind nicht mit dem ftSwarmPwrDrive kompatibel.
{: .notice--info}

#### FtSwarmStepperMotor(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmStepperMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: **FTSWARM_STEP1** bis **FTSWARM_STEP4**

#### FtSwarmStepperMotor( const char *name )

Constructor um ein FtSwarmStepperMotor Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO-Ports.

#### void setSpeed( int16_t speed )

Setzt die Motorgeschwindigkeit.

- speed: Geschwindigkeit im Bereich von -4096 bis 4096 Schritte pro Sekunde.

#### uint16_t getSpeed()

Gibt die Motorgeschwindigkeit zurück.

#### void setDistance( int32_t distance, bool relative )

Setzt die zu verfahrende Distanz. Der Motor wird allerdings erst mit der Ausführung von **run** gestartet.

- distance: Anzahl zu Schritte
- relative: Ist relative true, so wird die Distanz relativ zur aktuellen Position verfahren. Ist der Wert false, so wird auf die absolute Position distance verfahren.

#### int32_t getDistance( void )

Gibt die Anzahl der noch zu verfahrenden Schritte zurück.

#### void run( void )

Startet den Motor.

#### bool isRunning( void )

True, wenn der Motor "fährt".

#### void stop( void )

Stoppt den Motor.

#### void setPosition( int32_t position )

Das Kommando setzt die Position im Koordinatensystem. Mit dem **homing**-Kommando wird der Motor in eine Referenzposition gefahren. Seine Position im Koordinatensystem ist nach dem homing-Kommando 0.

Wird mit **setDistance(5000, true)** und anschließendem **run()** der Motor um 5.000 Schritte gefahren, so ist seine absolute Position anschließend 5.000. Ein weiteres **setDistance(-500, true)** verfährt den Motor um 500 Schritte in die andere Richtung, die absolute Position ist nun 4.500.

Mit dem Kommando **setPosition** kann die Position im absoluten Koordinatensystem festgelegt werden. Hat die Achse einen Fahrbereich von 10.000 Schritten und soll die Nullposition in der Mitte des Verfahrbereiches gelegt werden, so gibt es zwei Möglichkeiten:
- **setHomingOffset(5000)** mit anschließendem **homing(-10000)** fährt zunächst an die Referenzposition und anschließend 5.000 Schritte in die Mitte des Verfahrbereiches. Die absolute Position des Motors ist 0.
- **homing(-10000)** fährt an die Referenzposition. **setPosition(-5000)** legt nun das absolute Koordinatensystem korrekt fest - die Mitte des Verfahrbereiches ist 0. Der Motor bleibt aber an der Referenzposition stehen und fährt nicht an die Mittenposition.

#### int32_t getPosition( void )

Liefert die Position des Motors im absoluten Koordinatensystem.

#### void homing( int32_t maxDistance )

Startet den Homing-Prozess. Dabei werden maximal maxDistance Schritte verfahren. Das Vorzeichen von maxDistance bestimmt die Drehrichtung des Motors im Homingprozess.

#### bool isHoming( void )

True, wenn der Homing-Prozess läuft.

#### void setHomingOffset( int32_t offset )

Setzt den Offset, der nach dem Auslösen des Referenzschalters in die umgekehrte Richtung gefahren wird.

#### void setMotionType( FtSwarmMotion_t motionType )

Diese Funktion stellt den Betriebsmodus der Endstufe ein:
- **FTSWARM_COAST** der Motor wird angehalten, lässt sich aber manuell verstellen.
- **FTSWARM_BRAKE** der Motor wird angehalten aber gebremst. Der Motor lässt sich manuell nicht verstellen.
- **FTSWARM_ON** schaltet die Endstufe mit der ursprünglichen Geschwindigkeit wieder ein.

#### FtSwarmMotion_t getMotionType()

Liefert den eingestellten MotionType aus.

#### void coast( void )

Stellt die Endstufe in den **FTSWARM_COAST** Modus.

#### void brake( void )

Stellt die Endstufe in den **FTSWARM_BRAKE** Modus.

#### void run( void )

Stellt die Endstufe in den **FTSWARM_ON** Modus.