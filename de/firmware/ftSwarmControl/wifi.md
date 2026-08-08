---
title: WLAN-Einstellungen
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

In diesem Menü stellen Sie das WLAN des Controllers ein.

![Home](/assets/img/ftSwarmControl/wifi/wifi-de.png){:.align-center style="width: 25%;"}

Wenn Sie Änderungen an den WLAN-Einstellungen vornehmen, so müssen diese gespeichert und der Controller neu gestartet werden.

### WLAN Modus

Hier stellen Sie ein, ob der Controller ein vorhandenes WLAN benutzt oder selbst ein WLAN für die anderen Controller im Swarm bereitstellt.

- CLIENT-MODE nutzt ein vorhandenes WLAN. Im Regelfall ist dies das WLAN Ihres Internetrouters.
- AP benötigt keinen Router, der ftSwarm-Controller erzeugt ein eigenes WLAN Netzwerk.
- AUS schaltet WLAN aus und reduziert deutlich den Stromverbrauch.

![Home](/assets/img/ftSwarmControl/wifi/mode-de.png){:.align-center style="width: 25%;"}

Ist ein WLAN bereits vorhanden, so sollten Sie dieses unbedingt verwenden. Bitte beachten Sie dabei, dass die ESP32-Prozessoren ausschließlich das 2.4 GHz-Band unterstützen. 

Wenn es in Ihrem WLAN mehrere Repeater/Access Points gibt, so strahlt jeder Access Point die SSID auf einem anderen Kanal aus. Dies kann zu Kommunikationsproblemen im Swarm führen, wenn sich die Controller mit unterschiedlichen Access Points verbinden. Eine Lösungsmöglichkeit ist, eine eigene SSID für Ihren Swarm über nur einen Access Point bereitzustellen. Ist das nicht möglich, so nutzen Sie den AP Modus.

Der AP-Modus wird nur auf einem Controller aktiviert. Er fungiert dann als Access Point und alle anderen Controller im Swarm werden auf Client-Modus betrieben. Bitte beachten Sie dass in diesen Fall sich nur max. 10 Geräte im WLAN befinden können.

### SSID

Wenn Sie diesen Menüpunkt im WLAN-Modus CLIENT starten, so scannt der Controller nach passenden WLANs in der Umgebung, so dass Sie nur noch das gewünschte WLAN auswählen müssen.

![Home](/assets/img/ftSwarmControl/wifi/ssid.png){:.align-center style="width: 25%;"}

Haben Sie den WLAN-Modus AP gewählt, so geben Sie hier die SSID über die Bildschirmtastatur ein.

Beim Scannen der WLANs in Ihrer Umgebung zeigt der Controller nur WLANs aus dem 2.4 GHz Band und guter Signalstärke an.
{:.notice--info}

### Passwort

Tragen Sie hier das Passwort Ihres WLANs ein. Ist der Controller im AP-Modus, müssen Sie ab Version 0.7.0 der Firmware ein mindestens 8 Zeichen langes Passwort vergeben.

![Home](/assets/img/ftSwarmControl/wifi/password-de.png){:.align-center style="width: 25%;"}



