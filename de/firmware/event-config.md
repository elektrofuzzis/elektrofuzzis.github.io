---
title: Remote/Event-Konfiguration
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

Die Steuerung von vielen Modellen ist recht einfach. Taster steuern Motoren. Mit Events können Sie Trigger auf Eingangssignale wie Taster oder Photowiederstände legen und bei Signaländerung automatisch einen Motor, Servo oder ftPixel ansteuern. Eine detaillierte Beschreibung und Einsatzbeispiele finden Sie in [Eventprogrammierung](../../programming/events).

```
***** Remote Konfiguration *****

( 1) ftSwarm1010.S1.TriggerUp -> ftSwarm1010.M1.setSpeed( 100 )
( 2) ftSwarm1010.S1.TriggerDown -> ftSwarm1010.M1.setSpeed( 0 )

(+)  neues Event
(-)  Event löschen
(s)  Konfiguration wechseln

(x)  Beenden
```

In der Eventliste sehen Sie die bereits definierten Events. Das Beispiel zeigt, wie mit dem Taster S1 eines ftSwarmControl der Motor M1 ein- und ausgeschaltet wird.

Ein Event besteht immer aus 
- Einem Trigger auf einem Eingang (TriggerDown, TriggerUp, ChangeValue). Ändert sich entsprechend der Triggerbedingung der EIngang, so wird das Evenet ausgeführt.
- Der Verarbeitung des Events. Dabei können der Wert des Sensors, der Wert des Aktors und ein konstanter Wert miteinander addiert oder multipliziert werden.
- Das Ergebnis der Verarbeitung wird beim Actor verwendet. Bei Motoren wird so die Geschwindigkeit, beim Servo die Position und bei einem ftPixel die Farbe angepasst.

**"(+) neues Event"** erzeugt ein neues Event. Events können mit **"(-) Event löschen"** gelöscht werden. 

**"(s) Konfiguration wechseln"** erlaubt es zwischen 4 Konfigurationen zu wechseln.

Setzt man einen ftSwarmControl z.B. als Fahrzeugsteuerung ein, so wird man die Geschwindigkeit auf den linken und die Lenkung auf den rechten Joystick legen. Will man nun mehrere Fahrzeuge nacheinander steuern - z.B. ein Bagger und ein Kipplaster - so wäre es praktisch, dafür nur eine Fernbedienung verwenden zu müssen und zwischen den Fahrzeugen umschalten zu können.

Dies wird durch die 4 Konfigurationen ermöglicht. Wenn Sie ein Event definieren, weisen Sie das Event automatisch der gerade aktiven Konfiguration zu. So können Sie in Konfiguration #1 den linken Joystick dem Antriebsmotor des Baggers und in Konfiguration 2 dem Antrieb des Kipplasters zuweisen. Am ftSwarmControl können Sie mit der SET-Taste zwischen den beiden Konfigurationen umschalten.
