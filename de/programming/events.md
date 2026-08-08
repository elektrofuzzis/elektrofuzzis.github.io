---
title: Eventprogrammierug
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---
Die meisten Modelle benötigen nur ein sehr einfache Programme. Taster schalten Motoren. In **setup** werden die Taster und die Motoren definiert. Der Zustand der Taster wird in **loop** überwacht und die Motoren geschaltet.

Jeder Sensor - Eingang, Button oder Joystick - wird in der Firmware alle 25ms abgefragt. Die Firmware erkennt deren Signaländerungen und kann deshalb selbständig Motoren, Servos oder LEDs schalten.

### Versuch #1: Ein Taster schaltet einen Motor

![Home](/assets/img/examples/motor_switch.png)

Der Taster kennt - wie jeder Sensor - drei Trigger-Events:

- **TriggerUp:** Dieses Event wird ausgelöst, wenn das Signal eines digitalen Sensors von 0 auf 1 springt. Z.B. beim Drücken eines Buttons oder eines Tasters.
- **TriggerDown:** Dieses Event ist das Gegenteil von TriggerUp. Es wird ausgelöst, wenn Button oder Taster losgelassen werden.
- **ChangeValue:** Dieses Signal reagiert auf jede Statusänderung. Es ist dafür gedacht analoge Signale - wie z.B. einem Joystick - zur Steuerung der Motorgeschwindigkeit zu verwenden.

Jeder Trigger kann eine Aktion aulösen. In unseren Beispiel soll die Motorgeschwindigkeit gesteuert werden. Dazu benötigen wir zwei Events. Bei TriggerUp soll der Motor eingeschaltet werden, bei TriggerDown soll er wieder ausgeschaltet werden.

Flashen Sie auf den Controller ggf. die Firmware, verbinden sich mit einer seriellen Konsole und starten Sie mit **setup** die Firmware. Wählen Sie im Hauptmenü **"(r)  Remote/Event-Konfiguration"**:

```
***** Remote Konfiguration *****


(+)  neues Event
(s)  Konfiguration wechseln

(x)  Beenden

Remote Konfiguration>
```

Wählen Sie **"(+) neues Event"** und geben die folgenden Werte ein:

```
Name des Sensors ein: A1
Trigger Event - (0) Trigger down  (1) Trigger up  (2) Change Value [0]: 1

ftSwarm1010.A1.TriggerUp
Name des Aktors ein: M1

ftSwarm1010.A1.TriggerUp -> ftSwarm1010.M1.setSpeed( 
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert [0]: 0
Geschwindigkeit (-100..100) [0]: 100

ftSwarm1010.A1.TriggerUp -> ftSwarm1010.M1.setSpeed( 100
(1) Addieren oder  (2) Subtrahieren oder (3) Multiplizieren mit einem anderen Wert - (0) Fertig [0]: 0
```

Das Event sieht nun folgendermaßen aus:

```
ftSwarm1010.A1.TriggerUp -> ftSwarm1010.M1.setSpeed( 100 )
```

Wird der Taster A1 gedrückt (TriggerUp), so wird die Motorgeschwindigkeit auf 100 gesetzt.

Erzeugen Sie mit **"(+) neues Event"** ein zweites Event:

```
Name des Sensors: A1
Trigger Event - (0) Trigger down  (1) Trigger up  (2) Change Value [0]: 0

ftSwarm1010.A1.TriggerDown
Name des Aktors: M1

ftSwarm1010.A1.TriggerUp -> ftSwarm1010.M1.setSpeed( 
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert [0]: 0
Geschwindigkeit (-100..100) [0]: 0

ftSwarm1010.A1.TriggerDown -> ftSwarm1010.M1.setSpeed( 0
(1) Addieren oder  (2) Subtrahieren oder (3) Multiplizieren mit einem anderen Wert - (0) Fertig [0]: 0
```

Die beiden Events sehen nun so aus:
```
ftSwarm1010.A1.TriggerUp -> ftSwarm1010.M1.setSpeed( 100 )
ftSwarm1010.A1.TriggerDown -> ftSwarm1010.M1.setSpeed( 0 )
```

Beenden Sie die Remote Konfiguration mit **"(x) Beenden"** und speichern Sie die Änderung.

Drücken Sie den Taster. Der Motor läuft. Lassen Sie den Taster los. Der Motor stoppt.

Sie haben ein Programm ohne eine Zeile Code geschrieben. Die Firmware erledigt die komplette Arbeit.

Die Eventprogrammierung ist nicht nur auf Taster und Motoren beschränkt. Alle Sensoren können Trigger auslösen und (fast) alle Aktoren können gesteuert werden. So lässt sich z.B. die Farbe eines ftPixels aufgrund der, mit einem Fototransistor gemessenen Raumhelligkeit anpassen.
{: .notice--info}

### Versuch #2: Code

Im ersten Beispiel haben wir die Events in der Firmware definiert. Dies lässt sich auch mit einem eigenen Programm kombinieren. Trigger erledigen einfache Aufgaben und das Programm fokusiert auf die komplexen Steueraufgaben. Da dieser Ansatz schnell unübersichtlich wird, ist es besser die Trigger im Programm definieren:

```cpp
FtSwarmSwitch *sw;
FtSwarmSMotor  *mot;

void setup( ) {

  // start the swarm
  ftSwarm.begin( );
	
  // get switch and motor instances
  sw  = new FtSwarmSwitch( "A1" );
  mot = new FtSwarmSMotor( "M1" );

  // set triggers
  sw.onTrigger( FTSWARM_TRIGGERUP,   FTSWARM_ASSIGN, FTSWARM_CONSTANT, FTSWARM_CONSTANT, mot, 100 ); 
  sw.onTrigger( FTSWARM_TRIGGERDOWN, FTSWARM_ASSIGN, FTSWARM_CONSTANT, FTSWARM_CONSTANT, mot, 0 ); 

}

void loop( ) {

  // wait some time
  delay(100);

}
```

Auch hier macht die Firmware die ganze Arbeit. Die Definition der Trigger reicht aus, um den Motor zu schalten.

Bitte löschen Sie vor dem Aufspielen des Programms vorhandene Trigger in der Firmware.
{: .notice--info}

### Versuch #3: Ein Joystick steuert die Motorgeschwindigkeit

![Home](/assets/img/examples/events.png)

Der Motor soll nun mit dem linken Joystick gesteuert werden. Wählen Sie im Hauptmenü der Firmware **"(r)  Remote/Event-Konfiguration"** und erzeugen Sie ein neues Event. Passen Sie abei die Seriennummern passend zu Ihrem Versuchsaufbau an:

```
Name des Sensors: ftSwarm1012.JOY1FB
Trigger Event: Change Value
ftSwarm1012.JOY1FB.ChangeValue

Namen des Aktors: ftSwarm1010.M1

ftSwarm1012.JOY1FB.ChangeValue -> ftSwarm1010.M1.setSpeed( 
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert [0]: 1

ftSwarm1012.JOY1FB.ChangeValue -> ftSwarm1010.M1.setSpeed( ftSwarm1010.JOY1FB.getValue()
(1) Addieren oder  (2) Subtrahieren oder (3) Multiplizieren mit einem anderen Wert - (0) Fertig [0]: 0

ftSwarm1012.JOY1FB.ChangeValue -> ftSwarm1010.M1.setSpeed( ftSwarm1010.JOY1FB.getValue() )
```

Bewegen Sie den linken Joystick vor und zurück. Die Motorgeschwindigkeit wird entsprechend der Auslenkung des Joysticks gesetzt. Drücken Sie nach vorne, so dreht der Motor in eine Richtung. Drehen Sie nach hinten, so wechselt die Drehrichtung.

### Versuch #4: Ein ftPixel schalten

Wir wollen nun mit dem Button S1 eine OnBoard-Pixel am ftSwarmRS die Farbe wechseln lassen. Der Aufbau von Versuch #3 kann weiter verwendet werden. Wechseln Sie in der Firmware wieder zu **"(r)  Remote/Event-Konfiguration"** und fügen Sie das folgende Event hinzu:

```
Name des Sensors: S1
Trigger Event - (0) Trigger down  (1) Trigger up  (2) Change Value [0]: 1

ftSwarm1012.S1.TriggerUp
Name des Aktors: LED1

ftSwarm1012.S1.TriggerUp -> ftSwarm1010.LED1.setColor( 
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert (4) Blinkeffekt [0]: 0
RGB-Wert (0..#FFFFFF) [#000000]: #FF0000

ftSwarm1012.S1.TriggerUp -> ftSwarm1010.LED1.setColor( #FF0000
(1) Addieren oder  (2) Subtrahieren oder (3) Multiplizieren mit einem anderen Wert - (0) Fertig [0]: 0

ftSwarm1012.S1.TriggerUp -> ftSwarm1010.LED1.setColor( #FF0000 )
```

Erstellen Sie einen zweiten Trigger auf S1, bei dem Sie mit TriggerDown die Farbe #FF00 setzen:

```
ftSwarm1012.S1.TriggerDown -> ftSwarm1010.LED1.setColor( #00FF00 )
```

Drücken Sie den Button S1. Der Pixel wechselt die Farbe auf <span class="red">rot</span>. Sobald Sie den Button wieder loslassen, wechselt die Farbe zurück auf <span class="green">grün</span>.

### Versuch #5: Blinken

Wir wollen nun mit dem Button S1 eine OnBoard-Pixel am ftSwarmRS blinken lassen. Der Aufbau von Versuch #3 kann weiter verwendet werden. Wechseln Sie in der Firmware wieder zu **"(r)  Remote/Event-Konfiguration"**. Löschen Sie alle Events mit **"*"** und fügen mit **"+"** die folgenden Events hinzu:

```
Name des Sensors: S1
Trigger Event - (0) Trigger down  (1) Trigger up  (2) Change Value [0]: 1

ftSwarm1012.S1.TriggerUp
Name des Aktors: LED1

ftSwarm1012.S1.TriggerUp -> ftSwarm1010.LED1.setColor( 
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert (4) Blinkeffekt [0]: 4
Takt in 1/10s (0..31) [0.00]: 2
Anzahl Signaltakte (0..15) [0]: 5
Pulsbreite (0) 25/75 (1) 50/50 (2) 75/25 [0]: 1
Anzahl der Pausentakte (0..15) [0]: 3
Signalfarbe (0) Black  (1) Red  (2) Green  (3) Blue  (4) Yellow  (5) Orange  (6) Cyan  (7) Pink  (8) Magenta  (9) White  [Black]: 1
Signal Pausenfarbe (0) Black  (1) Red  (2) Green  (3) Blue  (4) Yellow  (5) Orange  (6) Cyan  (7) Pink  (8) Magenta  (9) White  [Black]: 2
Pausenfarbe (0) Black  (1) Red  (2) Green  (3) Blue  (4) Yellow  (5) Orange  (6) Cyan  (7) Pink  (8) Magenta  (9) White  [Black]: 0
ftSwarm1012.S1.TriggerUp -> ftSwarm1010.LED1.setColor( Blink( period: 1000 ms, Signaltakte: 5, Pulsbreite: 1, Pausentakte: 3, Signalfarbe Red, Signal Pausenfarbe Green, Pausenfarbe Black ) )
```

Erstellen Sie einen zweiten Trigger auf S2, bei dem Sie mit TriggerDown die Farbe 0 setzen:

```
ftSwarm1012.S1.TriggerDown -> ftSwarm1010.LED1.setColor( #000000 )
```

Drücken Sie den Button S1. Der Pixel wechselt 5 mal die Farbe von <span class="red">rot</span> auf <span class="green">grün</span>. Anschließend ist die LED für 3 Takte aus.

Neben LEDs können auch Lampen blinken. Hier wird anstatt der Farbe die Helligkeit der Lampe gesetzt.

![Home](/assets/img/examples/blink-de.png)

### Berechnen der Stellgröße

Die Firmware fragt nach der Eingabe des Aktors nach der Berechung seines Stellwertes:
```
(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert (4) Blinkeffekt [0]:
```

- **Konstante**: Hier können Sie einen festen Wert wie z.B. eine Motorgeschwindigkeit, eine Servoposition oder die Farbe der LED eingeben.
- **Sensor Messwert**: Nutzt den aktuellen Messwert des Sensors. So kann z.B. über den Messwert des Joysticks (-100..100) die Motorgeschwindigkeit gesetzt werden.
- **Sensor Delta**: Anstatt des Sensormesswertes wird hier die Veränderung des Sensormesswertes verwendet. Damit lassen sich z.B. Raupenantreibe umsetzen.
- **Aktor Stellwert**: Dies ist z.B. die Geschwindigkeit des Motors.
- **Blinkeffekt**: Der ftPixel oder die Lampe werden in einen Blinkmodus (s.o.) geschaltet.

Sie können nun den gewählten Wert mit einem zweiten Wert verarbeiten:

```
(1) Addieren oder  (2) Subtrahieren oder (3) Multiplizieren mit einem anderen Wert - (0) Fertig [0]: 

(0) Konstante (1) Sensor Messwert (2) Sensor Delta (3) Aktor Stellwert [0]:
```

So kann z.B. die Motorgeschwindigkeit über das Drücken von Tasten verändert werden:

```
(1) ftSwarm1012.F1.TriggerUp -> ftSwarm1012.M1.setSpeed( ftSwarm1012.M1.getSpeed() + 10 )
(2) ftSwarm1012.F2.TriggerUp -> ftSwarm1012.M1.setSpeed( ftSwarm1012.M1.getSpeed() - 10 )
```

Mit 4 Events lässt sich ein Raupenantrieb realisieren:
```
( 1) ftSwarm1010.JOY1FB.ChangeValue -> ftSwarm1010.M1.setSpeed( ftSwarm1010.M1.getSpeed() + ftSwarm1010.JOY1FB.getDelta() )
( 2) ftSwarm1010.JOY2LR.ChangeValue -> ftSwarm1010.M1.setSpeed( ftSwarm1010.M1.getSpeed() + ftSwarm1010.JOY2LR.getDelta() )
( 3) ftSwarm1010.JOY1FB.ChangeValue -> ftSwarm1010.M2.setSpeed( ftSwarm1010.M2.getSpeed() - ftSwarm1010.JOY1FB.getDelta() )
( 4) ftSwarm1010.JOY2LR.ChangeValue -> ftSwarm1010.M2.setSpeed( ftSwarm1010.M2.getSpeed() - ftSwarm1010.JOY2LR.getDelta() )
```

Bitte beachten Sie, dass der Blinkeffekt nicht mit anderen Werten verarbeitet werden kann.