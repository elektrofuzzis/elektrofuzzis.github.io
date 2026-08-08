---
title: WLAN & Lokale Einstellungen
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

In diesem Bereich werden die WLAN-Einstellungen vorgenommen und die lokale Hardware des Controller konfiguriert.

```
***** WLAN & Lokale Einstellungen *****

hostname:            ftSwarm1010
ip-address:          172.16.16.111

(w)  WLAN-Modus: AP-Mode
(s)  SSID: Elektrofuzzis24
(p)  Passwort: *****
(c)  Channel: 1
(u)  Web UI: an
(f)  ftPixels in UI: 2
(e)  Extension Port: off
(g)  Gyro: aus

(x)  Beenden
```

### WLAN-Modus

- CLIENT-MODE nutzt ein vorhandenes WLAN. Im Regelfall ist dies das WLAN Ihres Internetrouters.
- AP-MODE benötigt keinen Router, der ftSwarm-Controller erzeugt ein eigenes WLAN Netzwerk.
- OFF schaltet WLAN aus und reduziert deutlich den Stromverbrauch.

Ist ein WLAN bereits vorhanden, so sollten Sie dieses unbedingt verwenden. Bitte beachten Sie dabei, dass die ESP32-Prozessoren ausschließlich das 2.4 GHz-Band unterstützen. 

Wenn es in Ihrem WLAN mehrere Repeater/Access Points gibt, so strahlt jeder Access Point die SSID auf einem anderen Kanal aus. Dies kann zu Kommunikationsproblemen im Swarm führen, wenn sich die Controller mit unterschiedlichen Access Points verbinden. Eine Lösungsmöglichkeit ist, eine eigene SSID für Ihren Swarm über nur einen Access Point bereitzustellen. Ist das nicht möglich, so nutzen Sie den AP Modus.

Der AP-Modus wird nur auf einem Controller aktiviert. Er fungiert dann als Access Point und alle anderen Controller im Swarm werden auf Client-Modus betrieben. Bitte beachten Sie dass in diesen Fall sich nur max. 10 Geräte im WLAN befinden können.

Schalten Sie WLAN nur dann aus, wenn Sie entweder nur einen Controller im Swarm haben oder die Kommunikation komplett über RS485 realisiert ist.

### SSID

Tragen Sie hier den Namen Ihres WLANs ein.

### Passwort

Tragen Sie hier das Passwort Ihres WLANs ein. Ist der Controller im AP-Modus, müssen Sie ab Version 0.7.0 der Firmware ein mindestens 8 Zeichen langes Passwort vergeben.

### Channel

Diese Option steht nur Zur Verfügung, wenn sich der Controller im AP-Modus befindet. 

Die WLAN-Kanäle teilen Sie mit anderen WLANs. Deshalb ist es wichtig, den "richtigen" Kanal auszuwählen. Die ESP32-Prozessoren verwenden das 2.4 GHz-Band. Dieser Bereich ist in 11 Kanäle aufgeteilt, dabei überlappen sich benachbarte Kanäle. Werden zwei benachbarte Kanäle durch ein WLAN verwendet, so stören diese sich gegenseitig. Deshalb ist es im 2.4GHz-Band am Besten, wenn alle WLANs nur die Kanäle 1, 6 und 11 verwenden. Optimalerweise gibt es einen nicht verwendeten Kanal. Ist dieser nicht verfügbar, so nutzen Sie einen bereits verwendeten Kanal dessen Nachbarkanäle nicht in Verwendung sind. Welche Kanäle bereits verwendet sind, können Sie sich auf dem meisten Internetroutern anzeigen lassen. Mit der App [wifiman](https://play.google.com/store/apps/details?id=com.ubnt.usurvey&hl=de&gl=US&pli=1) können Sie das auch über Ihr Smartphone analysieren.
{: .notice--info}


### WebUI

Mit dieser Option können Sie die WebUI/Statusseite ein- und ausschalten.

### ftPixels in UI

Mit dieser Option können Sie festlegen, wieviele ftPixel in der WebUI/Statusseite angezeigt werden. Dies dient nur der besseren Übersicht auf der Statusseite. Sie können davon unabhängig durch Ihr Programm alle angeschlossenen ftPixel ansteuern.

### Extension Port

Einige der Controller verfügen über einen Extention Port, an den externe Hardware angeschlossen werden kann. 

Der Anschluß ist im Gegensatz zu den anderen Anschlüssen des Controllers nicht gegen Überspannung oder Verpolung geschützt.

| Controller             | I2C-Master | I2C-Slave | Output | Servo | Lidar |
|------------------------|:----------:|:---------:|:------:|:-----:|:-----:|
| ftSwarmJST             | X          | X         | X      | X     | X     |
| ftSwarmRS              | X          | X         | X      | X     | X     |
| ftSwarmXL              | X          | X         | X      | X     | X     |
| ftSwarmControlUSBMicro | X          |           |        |       |       |
| ftSwarmControlUSBC     | X          |           |        |       |       |

**Mode** legt den Betriebsmodus des Extention Ports fest.
- **aus** schaltet den Port aus.
- **I2C-Master** schaltet den Port als I²C-Bus. Der Controller ist Busmaster. Verwenden Sie diese Option, wenn Sie eigene I²C-Sensoren anschließen wollen. Wire.begin wird von der Firmware ausgeführt, so dass Sie keine Initialisierung durchführen müssen.
- **I2C-Slave** schaltet den Port ebenfalls als I²C-Bus. Der Controller ist in diesem Fall Slave. Diese Funktion kann nur dazu verwendet werden um Daten mit einem TXT-Controller auszutauschen.
- **Outputs** Die beiden IO-Pins des Extention Ports können dann softwareseitig als Motorausgänge angesprochen werden. An den IO-Pins liegt dann ein PWM-Signal entsprechend dem eingestellten Speed-Wert des Motorausgangs an. Bitte beachten Sie, dass der IO-Pin nur ein 3.3V-Logikpegel liefert und ohne Zusatzhardware keine Aktoren schalten kann.
- **Serco** Die beiden IO-Pins des Extention Ports können dann softwareseitig als Servoausgänge angesprochen werden. An den IO-Pins liegt dann ein PWM-Signal entsprechend der eingestellten Serevoposition an. Bitte beachten Sie, dass die bereitgestellte 3.3V- und 5V-Versorgungsspannungen nicht für die zusätzlichen Servos verwendet werden können.
- **Lida** Anschluss eines extenen Lidar-Sensors zur Abstandsbestimmung. Diese Option ist noch nicht stabil.

Wenn Sie den Modus I2C-Slave ausgewählt haben, stehen Ihnen zusätzlich folgende Optionen zur Verfügung:
- **I2C-Slave-Adresse**: I2C-Adresse, auf die Ihr Controller reagiert
- **Interrupt-Ausgang**: Stehen für den TXT neue Daten bereit, so wird über diesen Motorausgang dem TXT signalisiert, dass er Daten abholen muss.
- **Interrupt-Wert für 0**: Dieser Wert wird für den Ausgang gesetzt, wenn kein Interrupt ansteht.
- **Interrupt-Wert für 1**: Dieser Wert wird für den Ausgang gesetzt, wenn ein Interrupt ansteht.
- **I2C-Registers**: Anzahl der I2C-Register die der Client bereitstelt.

### Gyro

Verfügt Ihr Controller über einen Gyro, so ist dieser wegen seinem Stromverbrauch im Standard ausgeschaltet. Wenn Sie den Gyro nutzen möchten, müssen Sie ihn über diese Option aktivieren.

Wenn Sie beim ftSwarmJST oder ftSwarmControlUSBMicro einen MPU6040-Gyro verwenden wollen, so stellen Sie die Option Extension Port auf I2C-Master und Gyro auf ein.
