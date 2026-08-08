---
title: Ein erster Schwarm
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---

In das "[Das erste Programm](../MotorSwitch)" haben Sie ein einfaches Programm geschrieben uns es auf einem Controller gestartet. Doch wie funktioniert eine Applikation im Schwarm? In diesem Beispiel wird nun die gleiche Aufgabe - die Steuerung eines Motors durch einen Taster - mit zwei Controllern realisiert. 

![Home](/assets/img/examples/motor_switch_swarm.png)

### Einen Swarm bilden

Der zweite Controller muss jetzt dem Swarm hinzugefügt werden. Dazu müssen Sie auf den Controller aus dem ersten Beispiel die [Standard-Firmware](/de/firmware/flash) flashen. 

Verbinden Sie sich nun mit einer seriellen Konsole mit dem Controller und wechseln mit **setup** in die Firmware.

````
***** Hauptmenü *****

(w)  WLAN & Lokale Einstellungen
(s)  Swarm-Konfiguration
(i)  IO-Konfiguration
(r)  Remote/Event-Konfiguration
(f)  Werkseinstellungen

(x)  Beenden

Setup>
````

Wählen Sie **"(s)  Swarm-Konfiguration"**.
````
***** Swarm-Konfiguration *****

     Swarm Name: ftSwarm1010
     Kelda: ftSwarm1010
(w)  WLAN-Kommunikation: an
     Pin: 1010

     Name         Status   NW-Age    Alias
( 1) ftSwarm1010  ONLINE   [000022]  


(n)  neuen Swarm erstellen
(+)  Controller hinzufügen
(a)  Alias-Name

(x)  Beenden

Swarm-Konfiguration>
````

Fügen Sie mit **"(+)  Controller hinzufügen"** den zweiten Controller zu Ihrem Swarm hinzu. 

````
     Name         Status   NW-Age    Alias
( 1) ftSwarm1010  ONLINE   [000022]  
( 2) ftSwarm1011  ONLINE   [000019]  

````

Die Controller kommunizieren über WLAN. Deshalb muss Ihr zweiter Controller ebenfalls das gleiche WLAN verwenden. Hierfür gibt es zwei Möglichkeiten: Sie konfigurieren seine WLAN-Einstellung über die serielle Konsole oder die Kelda überträgt diese an den neuen Swarm-Member. Findet die Kelda den neuen Swarm-Member nicht im WLAN, so sucht sie nach dem Default-WLAN des zweiten Controllers und überträgt so die eigene WLAN-Konfiguration an den neuen Swarm-Member.
{: .notice--info}

Auf der Web-UI der Kelda werden nun beide Controller angezeigt. Der zweite Controller zeigt nur seine eigenen Ein- und Ausgänge an. 

### Eine verteilte Anwendung

Sobald beide Controller einen Schwarm gebildet haben, kann das folgende Beispiel auf der Kelda gestartet werden. Bitte tragen Sie bei **#define REMOTE 2** die Seriennummer Ihres zweiten Controllers ein:

```cpp
#include <ftSwarm.h>

// serial number of the second controller - change it to your 2nd device serial number
#define REMOTE 2

FtSwarmSwitch *sw;
FtSwarmSMotor  *mot;

void setup( ) {

  // start the swarm
  FtSwarmSerialNumber_t local = ftSwarm.begin( );
	
  // get switch and motor instances
  sw  = new FtSwarmSwitch( REMOTE, FTSWARM_A1 );
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

Das Programm unterscheidet sich kaum vom [ersten Programm](../MotorSwitch). Es gibt nur zwei kleine Änderungen:

- **#define REMOTE 2** definiert die Seriennummer des zweiten Controllers. Ändern Sie diese entsprechend Ihrer Controller ab.
- **FtSwarmSwitch( REMOTE, FTSWARM_A1 );** nutzt nun die Seriennummer des zweiten Controllers. 

### Was passiert, wenn der zweite Controller nicht online ist?

Verbinden sie ein Terminalprogramm mit dem ersten Controller und trennen Sie am zweiten Controller die Stromversorgung. Starten Sie nun den ersten Controller. Bei **FtSwarmSwitch( REMOTE, FTSWARM_A1 );** kommt es nun zu einer Warning: ***Waiting on device***. Beide onboard RGB Leds werden blau, da die Firmware darauf wartet, dass der zweite Controller mit dem Taster online geht.

Schalten Sie am zweiten Controller die Stromversorgung jetzt wieder ein. Sobald der zweite Controller gestartet ist, registriert er sich bei der Kelda und das Programm kann fortgesetzt werden.
