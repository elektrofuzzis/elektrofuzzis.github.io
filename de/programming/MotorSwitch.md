---
title: Das erste Programm
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---
Das erste Programm wird einen Motor mit einem einfachen Taster steuern. 
Dazu werden ein ftSwarm-Controller, ein Taster, ein Motor oder eine Lampe sowie eine 9V-Stromversorgung benötigt.

Der Versuchsaufbau ist einfach:

![Home](/assets/img/examples/motor_switch.png)

Kopieren Sie das folgende Programm und flashen Sie es auf Ihrem ftSwarm-Controller. Wird der Taster gedrückt, so startet der Motor. Lässt man den Taster los, stoppt der Motor.

```cpp
#include <ftSwarm.h>

FtSwarmSwitch *sw;
FtSwarmSMotor *mot;

void setup( ) {

  // start the swarm
  FtSwarmSerialNumber_t local = ftSwarm.begin( );
	
  // get switch and motor instances
  sw  = new FtSwarmSwitch( local, FTSWARM_A1 );
  mot = new FtSwarmSMotor( local, FTSWARM_M1 );

}

void loop( ) {

  // check if switch is pressed or released
  if ( sw->isPressed() )
    mot->setSpeed(100);
  else
    mot->setSpeed(0);
	
  // wait some time
  delay(100);

}
```
Der Sketch ist sehr einfach. Wie alle Arduino-Programme basieren sie auf den beiden Funktionen **`setup`** und **`loop`**. 

- Die **`setup`** Funktion wird beim Start des Sketches automatisch aufgerufen. In dieser Funktion wird normalerweise die Hardware initialisiert.
- Danach wird die **`loop`** Funktion ausgeführt. Wird diese beendet, startet der Sketch diese immer wieder von neuem. In der **`loop`** findet die eigentliche Steuerung des Modells statt. 

**`#include "ftSwarm.h"`** lädt die  ftSwarm-Bibliothek. 
Danach werden die IOs **`switch`** und **`motor`** definiert.

In **`setup`** wird zunächst der Schwarm initialisiert:

```cpp
// start the swarm
FtSwarmSerialNumber local = ftSwarm.begin( );
```

Es wird die Seriennummer des lokalen Controllers zurückgegeben. Mit der Seriennummer werden nun Instanzen für Taster und Motor erzeugt:

```cpp
sw  = new FtSwarmSwitch( local, FTSWARM_A1 );
mot = new FtSwarmMiniMotor( local, FTSWARM_M1 );
```

Der Swarm muss immer als erstes mit **ftSwarm.begin();** initialisiert werden. Um IOs global zu definieren, müssen sie deshalb als Pointer implementiert werden. So können Sie initialisiert werden, nachdem der Schwarm gestartet wurde.

In **`loop`** wird der Taster abgefragt und der Motor gestartet und wieder angehalten.

```cpp
if ( sw->isPressed() )
  mot->setSpeed(100);
else
  mot->setSpeed(0);
```

Die Auswahl des richtigen Motortyps ist wichtig. Jeder fischertechnik Motor hat seine eigene Kennlinie und benötigt eine andere Spannung um zu starten. Diese Kennlinien sind in der Firmware hinterlegt, so dass der Motor ohne mechanische Belastung sich bereits mit **mot->setSpeed(1)** dreht.

Der Motortyp hat in unserem Beispiel keine Auswirkung, da der Motor entweder mit voller Geschwindigkeit arbeitet oder ausgeschaltet ist.

Die Motorgeschwindigkeit wird in Prozent angegeben - bei einem Wert von -100 dreht der Motor mit voller Geschwindigkeit in eine Richtung, bei 100 in die andere Richtung. Schrittmotoren weichen davon ab und arbeiten in einem Bereich von -4096 bis 4096.
