---
title: Alias Namen
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---

Bislang wurden die IOs in den Beispielen über die Seriennummer des ftSwarm und dem Portnamen angesprochen. Das ist praktisch in kleinen Modellen, aber in größeren Modellen verliert man schnell die Übersicht. Dort ist es einfacher, die IOs anhand deren Funktion anzusprechen:

```cpp
  SwitchWithSN     = new FtSwarmSwitch( 4711, FTSWARM_A1 );  // Old style: with serial number and port
  SwitchWithAlias  = new FtSwarmSwitch( "MotorEndStop" );    // New style: call my alias name!
```

Das Beispiel nutzt den gleichen Aufbau wie zuvor:

![Home](/assets/img/examples/motor_switch_swarm.png)

Es müssen nun zunächst Aliasnamen für den Switch und den Motor vergeben werden. Dazu muss die Standradfirmware geladen sein. Starten Sie eine serielle Konsole und wechseln mit **setup** in die Firmware. Wählen Sie dort **"(i)  IO-Konfiguration"**.

```
***** IO-Konfiguration *****

     Name               Typ             Events Alias
( 1) A1                 DigitalInput    0        
( 2) A2                 DigitalInput    0        
( 3) A3                 DigitalInput    0        
( 4) A4                 DigitalInput    0        
( 5) A5                 DigitalInput    0        
( 6) A6                 DigitalInput    0        
( 8) PWRCTL             Powersensor     0        
( 9) ftSwarm1011.A1     DigitalInput    0        
(10) ftSwarm1011.A2     DigitalInput    0        
(11) ftSwarm1011.A3     DigitalInput    0        
(12) ftSwarm1011.A4     DigitalInput    0        
(13) ftSwarm1011.A5     DigitalInput    0        
(14) ftSwarm1011.A6     DigitalInput    0        
(15) ftSwarm1011.PWRCTL Powersensor     0   

(a)  Aktoren
(p)  Pixel/LEDs

(x)  Beenden

IO-Konfiguration>
```

Am zweiten Controller muss für **A1** der Name **switch** eingestellt werden. Wählen Sie deshalb **"( 9) ftSwarm1011.A1"** um den Port zu konfigurieren.

```
***** A1 *****

     Name:       A1
(t)  IO-Typ:     DigitalInput
(a)  Alias

(+)  neues Event
(s)  Konfiguration wechseln

(x)  Beenden

IO-Konfiguration/A1>
```

Wählen Sie **"("a)  Alias"** und vergeben den Alias-Namen **switch**. Kehren Sie mit **(x)  Beenden** in das Menu **IO Konfiguration zurück**.

Am ersten Controller muss nun der Motor **M2** den Alias-Namen **motor** bekommen. Schalten Sie mit **"(a)  Aktoren"** die Darstellung von den Sensoren auf die Aktoren um:

```
***** IO-Konfiguration *****

     Name               Typ             Events Alias
( 1) M1                 Motor           0        
( 2) M2                 Motor           0        
( 3) SERVO1             Servo           0        
( 4) SERVO2             Servo           0        
( 5) ftSwarm1011.M1     Motor           0        
( 6) ftSwarm1011.M2     Motor           0        
( 7) ftSwarm1011.SERVO1 Servo           0        
( 8) ftSwarm1011.SERVO2 Servo           0        

(i)  Eingänge
(p)  Pixel/LEDs

(x)  Beenden

IO-Konfiguration>
```

Wählen Sie mit **"( 1) M1"** den Motor aus und vergeben den Alias-Namen **motor**. Beenden Sie mit zweimal **(x)  Beenden** die Port- und die IO-Konfiguration. Beim Verlassen der IO-Konfiguration bestätigen Sie **"Änderungen speichern? (J/N)?"** mit "**J**.

```cpp
#include <ftSwarm.h>

FtSwarmSwitch *sw;
FtSwarmSMotor *mot;

void setup( ) {

  // start the swarm
  FtSwarmSerialNumber_t local = ftSwarm.begin( );
  
  // get switch and motor instances
  sw  = new FtSwarmSwitch( "switch" );
  mot = new FtSwarmSMotor( "motor" );

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

Auf der Statusseite des Swarms werden die Aliasnamen ebenfalls angezeigt.

Wird das Modell nun verändert, z.B. indem der Motor auf den Anschluss **M2**  des ersten Controllers gesteckt wird, muss das Programm nicht verändert werden. Der Aliasname **motor** muss nur auf dem ersten Controller eingetragen werden.

Achten Sie darauf, die Aliasnamen im Schwarm eindeutig zu vergeben! In diesem Beispiel ist es egal, ob Sie **motor** doppelt vergeben. Die Firmware verwendet immer zunächst den lokalen Controller. Werden mehrere Remotecontroller verwendet, so hängt das Ergebnis von der Bootreihenfolge der Controller ab.
{: .notice--info}
