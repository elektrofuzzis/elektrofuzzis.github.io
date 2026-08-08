---
title: IO-Konfiguration
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

Mit der IO-Konfiguration können Sie IO-Typ und Alias-Name Ihrer IOs im Swarm einstellen.

- Alias-Namen vereinfachen die Programmierung, sind aber nicht zwingend notwendig. IOs, die einen Alias-Namen haben, werden auf der Statusseite unter mySwarm als aktiver IO angezeigt.
- Weisen Sie den IOs den richtigen Sensor- oder Motortyp zu, so dass Sie Ihr Modell bereits während dem Aufbau ohne Programmierung über die Statusseite bedienen können.
- Die Auswahl des richtigen Motortyps ist wichtig. Jeder fischertechnik Motor hat seine eigene Kennlinie und benötigt eine andere Startspannung um zu starten. Diese Kennlinien sind in der Firmware hinterlegt, so dass der Motor ohne mechanische Belastung sich bereits mit einer Geschwindigkeit von 1 dreht.

```
***** IO-Konfiguration *****

     Name               Typ             Events Alias
( 1) A1                 DigitalInput    0        
( 2) A2                 DigitalInput    0        
( 3) A3                 DigitalInput    0        
( 4) A4                 DigitalInput    0        
( 5) A5                 DigitalInput    0        
( 6) A6                 DigitalInput    0        
( 7) PWRCTL             Powersensor     0        
( 8) ftSwarm1011.A1     DigitalInput    0        
( 9) ftSwarm1011.A2     DigitalInput    0        
(10) ftSwarm1011.A3     DigitalInput    0        
(11) ftSwarm1011.A4     DigitalInput    0        
(12) ftSwarm1011.A5     DigitalInput    0        
(13) ftSwarm1011.A6     DigitalInput    0        
(14) ftSwarm1011.PWRCTL Powersensor     0        

(a)  Aktoren
(p)  Pixel/LEDs

(x)  Beenden
```

Wird die IO-Konfiguration aus dem Hauptmenü heraus aufgerufen, so zeigt sie die IOs des kompletten Swarms. Wird Sie aus der Swarm-Konfiguration heraus aufgerufen, so sehen Sie nur die IOs des gewählten Controllers.

Da bereits ein Swarm aus nur wenigen Controllern eine hohe Anzahl an Sensoren und Aktoren hat, wird immer nur ein Basistyp angezeigt. Mit **"(s) Sensoren"**, **"(a) Aktoren"** und **"(p) Pixel/LEDs"** schalten Sie zwischen den einzelnen Typen um. Mit **"(<) Vorherige Seite"** und **"(>) Nächste Seite"** können Sie innerhalb des angezeigten Typs blättern. Pro Seite werden max. 18 IOs angezeigt.

Wenn Sie nach Änderungen an einzelnen IOs das Menü mit **"(x) Beenden"** verlassen, können Sie die Konfiguration im Controller speichern.

### Konfiguration eines IOs

Um einen IO zu konfigurieren, geben Sie die Nummer des IOs in der angezeigten Liste ein:

```
***** A1 *****

     Name:       A1
(t)  IO-Typ:     DigitalInput
(a)  Alias

(+)  neues Event
(s)  Konfiguration wechseln

(x)  Beenden
```

Sofern der IO bereits zugewiesene Events, werden diese als Liste dargestellt.

**"(t) IO-Typ"** wählt den Typ des IOs aus.

**"(a) Alias"** weist dem IO einen Alias-Namen zu. Auf der Statusseite wird der IO nun in der Übersicht mySwarm angezeigt.

**"(+) neues Event"** erzeugt ein neues Event. Events können mit **"(-) Event löschen"** gelöscht werden. 

**"(s) Konfiguration wechseln"** erlaubt es zwischen 4 Konfigurationen zu wechseln.

Setzt man einen ftSwarmControl z.B. als Fahrzeugsteuerung ein, so wird man die Geschwindigkeit auf den linken und die Lenkung auf den rechten Joystick legen. Will man nun mehrere Fahrzeuge nacheinander steuern - z.B. ein Bagger und ein Kipplaster - so wäre es praktisch, dafür nur eine Fernbedienung verwenden zu müssen und zwischen den Fahrzeugen umschalten zu können.

Dies wird durch die 4 Konfigurationen ermöglicht. Wenn Sie ein Event definieren, weisen Sie das Event automatisch der gerade aktiven Konfiguration zu. So können Sie in Konfiguration #1 den linken Joystick dem Antriebsmotor des Baggers und in Konfiguration 2 dem Antrieb des Kipplasters zuweisen. Am ftSwarmControl können Sie mit der SET-Taste zwischen den beiden Konfigurationen umschalten.

**"(l) Label"** weist einem IO ein Label zu, das anschließend in der Statusanzeige des ftSwarmControl angezeigt wird. Damit können zugewiese Funktionen - z.B. S1 schaltet das Licht an - auf dem Display mit dem Label "LIGHT" angezeigt werden. Wie die Events, sind Label auch an eine Konfiguration gebunden. Label können nur für die Taster und Joysticks des lokalen ftSwarmControl vergeben werden.
