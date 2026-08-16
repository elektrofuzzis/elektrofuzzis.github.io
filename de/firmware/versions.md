---
title: Upgrade guide
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-de
---

Mit Version 0.7.0 verändert sich die Handhabung der Controller in einigen wesentlichen Punkten:

- Bislang wurde der Controllertyp über die entsprechende Bibliothek, z.B. ftSwarm-rs ausgewählt. Mit der neuen Version sind die Controller als Boards in Arduino bzw. PlatformIO vorhanden und verwenden nur noch eine gemeinsame ftSwarm-Bibliothek. Bitte richten Sie Ihre [Arduino-IDE](../../ide/arduino) bzw. [VSCode/Platform-IDE](../../ide/platformio) entsprechend ein.
- Die Firmware für die Swarm Member muss nicht mehr selbst compiliert werden. Flashen Sie die Firmware bequem über diese [Webseite](../flash). Beim Upgrade auf Version 0.7.0 werden aus technischen Gründen nur die WLAN- und Swarmeinstellungen übernommen.
- Motoren werden nun mit Geschwindigkeiten zwischen "-100" und "100" angesteuert. Jede Motorklasse, wie z.B. FtSwarmXSMotor, hat eine hinterlegte Motorkennlinie, so dass ein mechanisch nicht belasteter Motor bereits mit der Geschwindigkeit "1" startet. Es ist deshalb wichtig, die richtige Motorklasse zu verwenden. Bei Schrittmotoren gilt weiterhin der Bereich von -4096 bis 4096.
- Am ftSwarmControl lassen sich fast alle Einstellungen auch über das OLED-Display durchführen. Im neuen [Fernsteuerungsmodus](../../remote/remote) können Standardmodelle ohne Programmierung konfiguriert werden.
- Blinkeffekt bei Lampen und ftPixeln.

### Version 0.7.0 08/2026

Features:
- Umstellung auf offizielle Arduino/PIO-Boards
- Firmware Updates über die WebSeite
- Motorkennlinien: Motoren werden nun im Bereich von -100..100 (Ausnahme Schrittmotoren -4096/4096) angesteuert. Durch eine Motorkennlinie dreht der Motor ohne mechanische Lsst bereits ab Geschwindigkeit 1.
- ftSwarmControl: Firmware kann über das eingebaute OLED Display konfiguriert werden
- WLAN-Passwort
- Neue Statusseite/WebUI
- Controller ohne serielle Konsole auf Werkseinstellungen zurücksetzen
- OLED Menüs
- neue Controllertypen ftSwarmRC und ftSwarmControlUSBC
- neuer Servotyp RC-Servo
- neuer Motortypen RC-Motor, Radantrieb
- Blinken bei Lampen und ftPixeln.
- Bandbreitenoptimiertes WLAN-/RS485-Protokoll
- WLAN-Client-Modus: Die SSIDs „ftSwarmXXX“ entfallen.

### Version 0.6.2 05/2024

Features:
- I2C-Kommunikation mit TXT
- Firmware/Swarm Communication: Invite Controller
- Firmware/Swarm Communication: Reject Controller
- ftSwarmFrequencyMeter & ftSwarmCounter können auch als Remote Sensoren verwendet werden

Bugfixes:
- Beim Verwenden von analogen Sensoren startete der Controller neu.

### Version 0.6.1 04/2024

Bugfixes:
- Instabilitäten beim Ansteuern von Servos.
- Beim I2C-Slavemode wird die Busfrequenz auf 400kHz gesetzt. 

### Version 0.6.0 02/2024

Das Protokoll zur Swarm-Bildung wurde geändert. Bitte erzeugen Sie nach dem Update einen neuen Swarm.

Features:

- Unterstützung der neuen Controllertypen ftSwarmXL, ftSwarmPwrDrive und ftSwarmDuino.
- Neue Sensortypen FtSwarmFrequencyMeter und FtSwarmCounter
- In der Firmware können nun auf der Kelda Swarm Member hinzugefügt werden.  
- Servos können bei der Fernsteuerung und Eventprogrammierung verwendet werden. 
- Für Modelle mit langer RS485-Kabellänge kann die Übertragungsgeschwindigkeit reduziert werden.

Bugfixes:

- Stabilitätsverbesserungen beim Start eines Swarms.
- Alias Namen von Servos werden korrekt gespeichert. 

Bitte beachten Sie die Upgrade-Anweisungen der Version 0.5.0!

### Version 0.5.4 12/2023

Diese Version enthält Bugfixes beim ANsprechen von remote IOs über Alias Namen. Bitte beachten Sie die Upgrade-Anweisungen der Version 0.5.0!

### Version 0.5.3 11/2023

Diese Version enthält Bugfixes für die Ansteuerung von Motorausgängen. Bitte beachten Sie die Upgrade-Anweisungen der Version 0.5.0!

### Version 0.5.0 11/2023

In den bisherigen Versionen war derjenige Controller die Kelda, auf dem das Steuerprogramm mit ``ftSwarm.begin`` gestartet wurde.
Dies führte jedoch zu einigen Kommunikationsproblemen.
Deshalb wird nun der Kelda-Controller bereits auf Firmwareebene festgelegt.

(1) Upgrade der Kelda

- Führen Sie zunächst das Upgrade auf Ihrem Kelda-Controller durch und spielen Sie dort die normale Firmware ein.
- Wechseln Sie in das interaktive Firmwaremenu. In **(2) swarm configuration** stellen Sie mit dem Menüpunkt **(1) Kelda** diesen Controller auf Kelda-Modus.
- Nach dem Neustart der Kelda wechselt diese nicht mehr automatisch in das Konfigurationsmenü. Geben Sie das Kommando ``setup`` ein.
- Erzeugen Sie nun mit **(3) create a new swarm** einen neuen Schwarm.

(2) Upgrade der Swarm Member

- Führen Sie nun der Reihe nach den Upgrade auf allen Swarm Membern durch, indem Sie die neue Firmwareversion einspielen.
- Im interaktiven Firmwaremenü wählen Sie **(2) swarm configuration** und treten mit **(3) join an existing swarm** dem neuen Swarm bei.


(3) Upgrade bestehender Programme

- Bitte beachten Sie, dass ftSwarm, ftSwarmRS und ftSwarmControl nun eigene Bibliotheken haben. Nutzen Sie in Ihrem Projekt die entsprechenden include-Anweisungen - ftSwarmRS ``#include <ftSwarmRS.h>``, ftSwarm ``#include <ftSwarm.h>``, ftSwarmControl ``#include <ftSwarmControl.h>``  
- Bisher wurde die Kelda durch den Start des Swarms mit ``ftSwarm:begin`` festgelegt. Dies geschieht nun, wie oben beschrieben, auf Firmwareebene. Spielen Sie nun auf einem Swarm-Member Ihr Programm ein, so erhalten Sie eine Fehlermeldung und der Swarm stoppt.
- Der optionale Parameter ``verbose`` bei ``ftSwarm:begin`` legt fest, ob beim Start des Swarms detailierte Informationen ausgegeben werden sollen. 

Die Swarm Member im Swarm "kennen" nur noch Ihre Kelda. Deshalb zeigen die Swarm Member auch nur noch Swarms mit 2 Mitgliedern an.
Die Kelda muss natürlich alle Swarm Member kennen und zeigt in der Firmware die richtige Anzahl der Controller im Swarm an. 

In der Web-UI wird der komplette Swarm nur auf der Kelda angezeigt. Die anderen Controller zeigen nur ihren eigenen Status an.

**Neu in dieser Version:**

- Unterstützung des ftSwarmRS.
- Pythonintegration [ftSwarm.py](https://bloeckchengrafik.de/ftswarm.py/)
- Direkte Steuerung der IOs im CLI über die serielle Schnittstelle. Für detaillierte Informationen ``help`` im interaktiven Modus der seriellen Schnittstelle eingeben.
- Neues Web-UI.  
- Das ftSwarm-Protokoll wurde verbessert. Führen Sie deshalb den Upgrade auf die Version 0.5.0 für alle Controller im Swarm durch!
- Viele Stabilitätsbugfixes.  

### Version 0.4.2 11/2022

- neu: OLED type support

### Version 0.4.1 11/2022

- Remote Motoren konnten keine negaviven Speed-Werte verarbeiten
- Remote LED's funktionierten nicht korrekt
- "ghost" toggles bei ftSwarmControl-Buttons beim Start werden unterdrückt
- ESP Board Defintion V2.0.5 ist nun stabil. Die weitere Entwicklung der Firmware findet mit Version 2.0.5 statt.
- Arduino IDE 2.0.2 is stable now.

### Version 0.4.0 07/2022

Verwenden Sie bitte die ESP32 Board Definition V2.0.4. Die neue Version 2.0.5 funktioniert noch nicht stabil.

- Servo-Alias-Namen werden im NVS gespeichert.
- Support von 2 internen und 16 externen RGB LEDs.
- Die IP Addresse wird korrekt angezeigt.
- Negative Speed-Parameter ändern die Drehrichtung.
- wifi schaltet nicht mehr in den sleep-Modus
- Di AP Mode Parameter wurden geändert.

### Version 0.3.0 07/2022

- [Fernbedieung](/de/gettingstarted/RemoteControl/) ohne Code zu schreiben.
- [Event-Programming](/de/gettingstarted/EventControlled/)
- Bugfix: Höhere Frequenz beim Auslesen der Sensoren.

### Version 0.2.0 05/2022

- Redesign des Web-UIs.
- Unterstützung des ftSwarmControls OLED Display.
- Es werden bis zu 14 externe ftRGBLeds unterstützt.
- Schwarm & Device Status im ftSwarmControl OLED Display.
- Neue Klasse FtSwarmLightBarrier.
- Neue Klasse FtSwarmXMMotor.
- Neue Klasse FtSwarmValve.
- Neue Klasse FtSwarmCompressor.
- Neue Klasse FtSwarmBuzzer.
- Flexible Paketgröße
- Bugfix: Sende Alias Namem zu Kelda.

### Version 0.11.0 04/2022

Bugfixes.

### Version 0.10.0 03/2022

Erste Version.