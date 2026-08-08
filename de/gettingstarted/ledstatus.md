---
title: LED Statusanzeige
layout: category
lang: de
classes: wide
sidebar:
    nav: gettingstarted-de
---

Über die Farbe der RGB-Leds, signalisieren die ftSwarm-Controller ihren Betriebszustand.

| LED | Beschreibung |
|:--|:--|
| ![Home](/assets/img/status/black.png) | Controller ist ausgeschaltet. Stromversorgung überprüfen. |
| ![Home](/assets/img/status/blue.png) | Controller bootet. |
| ![Home](/assets/img/status/yellow.png) | Starte das WLAN. |
| ![Home](/assets/img/status/green.png) | Controller ist betriebsbereit. |
| ![Home](/assets/img/status/red.png) | Der Controller ist auf einen Fehler gelaufen. Häufig sind WLAN Verbingungsprobleme die Ursache. |
| ![Home](/assets/img/status/cyan.png) | Warte auf einen IO der noch offline ist. Log prüfen. |
| ![Home](/assets/img/status/aquamarine.png) | Identify. Um einen Controller in einem grösseren Schwarm zu finden, kann er per CLI hellblau markiert werden. |
| ![Home](/assets/img/status/deeppink.png) | Es ist ein fataler Fehler aufgetreten. Alle Motoren wurden ausgeschaltet und die Programmausführung beendet. Checken Sie die Logs.|
| ![Home](/assets/img/status/purple.png) | Wird beim Reset eines Controllers die Taste S1 oder ein Taster an A6 gedrückt und solange die LEDs lila leuchten wieder losgelassen, so setzt sich der Controller auf Werkeinstellungen zurück.|

Der ftSwarmControl hat keine LEDs und zeigt dafür seinen Zustand über das OLED-Display an.