---
title: WLAN und Statusseite
Lang:  de
layout: category
classes: wide
sidebar:
    nav: gettingstarted-de
---

Damit die einzelnen ftSwarm-Controller als Schwarm agieren können, müssen sie untereinander kommunizieren. Dies findet in der Regel über WLAN statt, der ftSwarmRS kann auch über RS485 kommunizieren. Über das WLAN kann zusätzlich die Statusseite des Controllers aufgerufen werden. Hier wird der Pegel der Eingänge angezeigt; Motoren, Servos und LEDs können manuell gesteuert werden.

Für die WLAN-Konfiguration muss der ftSwarm-Controller über die USB-Schnittstelle eingestellt werden. Starten Sie wie zuvor beschrieben ein Terminalprogramm und booten Sie den Controller über den Resettaster.

Der Controller meldet sich nun mit seiner Bootmeldung. Geben Sie **setup** ein, um in das Konfigurationsmenü der ftSwarm-Firmware kommen:

```
***** Hauptmenü *****

(w)  WLAN & Lokale Einstellungen
(s)  Swarm-Konfiguration
(i)  IO-Konfiguration
(r)  Remote/Event-Konfiguration
(f)  Werkseinstellungen

(x)  Beenden

Setup>
```

Wählen Sie **(w) WLAN & Lokale Einstellungen**.

```
***** WLAN & Lokale Einstellungen *****

hostname:            ftSwarm1010
ip-address:          172.16.16.111

(w)  WLAN-Modus: Client-Mode
(s)  SSID: Elektrofuzzis24
(p)  Passwort: *****
(u)  Web UI: an
(g)  Gyro: aus

(x)  Beenden
```

Im WLAN-Menü stellen Sie nun den **"(w) WLAN-Modus"** auf **CLIENT-MODE** und geben Sie die Zugangsdaten zu Ihrem WLAN in den Menüpunkten **"(s) SSID"** und **"(p) Passwort"** ein.
Beenden Sie mit **"(x) Beenden"** das Menü und speichern Sie die Einstellungen. Der Controller startet neu und verbindet sich mit Ihrem WLAN.

Sie können jetzt auf die Statusseite des Controllers über **`http:\\ftSwarm<SerialNumber>`** im Browser zugreifen. Dabei muss <SerialNumber> mit der Seriennummer des verwendeten ftSwarm-Controllers ersetzt werden. Sie können auch die angezeigte IP-Adresse verwenden.

![Monitoring ftSwarm](/assets/img/ftSwarm_Monitor.png)

Um die Aktoren wie Motoren zu bedienen, müssen Sie sich mit dem LOGIN-Button am Controller anmelden. Dabei wird der Swarm-Pin abgefragt, werksseitig ist dies die 4-stellige Seriennummer des Controllers (im Beispiel 1010).