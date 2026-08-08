---
title: USB-Anschluß
layout: category
lang: de
classes: wide
sidebar:
    nav: gettingstarted-de
---

Um ftSwarm-Applikationen auf den Controller zu laden, muss er über USB an einen PC angeschlossen werden.

Für die ersten Schritte wird keine extene Stromversorgung benötigt. Da später die Ein- und Ausgänge ohne 9V-Versorgung nicht funktionieren werden, bietet es sich an gleich die 9V-Versorgung mit anzuschließen.

1. Verbinden Sie Ihr 9V Netzteil mit dem 9V-Eingang des Controllers. Sobald der Controller gestartet ist, werden am ftSwarm beide LEDs grün leuchten. Beim ftSwarmControl zeigt das Display einen Startbildschirm an. Sollten die LEDs nicht an sein oder das Display nicht funktionieren so muss die Stormversorgung überprüft werden.

2. Verbinden Sie den Controller über ein USB-Kabel mit Ihrem PC. Windows installiert in der Regel die notwendigen Treiber selbständig. Unter MacOS und Linus müssen Sie ggf. den richtigen Treiber installieren und konfigurieren. Fast alle Controller nutzen einen [CH340C-Chip](http://www.wch-ic.com/downloads/CH341SER_ZIP.html). Nur beim ftSwarmControlUSBMicro wurde ein [CP210x-Chip](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) verwendet.

3. Ist der Treiber installiert, so meldet sich der Controller als COM-Schnittstelle im Windows Device Manager. Die COM-Schnittstelle dess Controllers lässt sich identifizieren, indem Sie das USB-Kabel mehrfach abziehen und wieder anschließen.

### Linux

Um den Gerätenamen für den seriellen Anschluss Ihres ftSwarm zu ermitteln, führen Sie den folgenden Befehl zweimal aus, zuerst mit ausgestecktem, dann mit eingestecktem ftSwarm.

Die Schnittstelle, die beim zweiten Mal zusätzlich erscheint, ist die des ftSwarm:
```
ls /dev/tty*
```

Ihr im Linux angemeldeter User benötigt Schreib- und Leserechte auf dem seriellen Port.
In den meisten Linux Distributionen muss dazu dem obigen Port die Gruppe **dialout** zugewiesen werden:

```
sudo usermod -a -G dialout $USER
```

Bei Arch Linux muss **uucp** verwendet werden:

```
sudo usermod -a -G uucp $USER
```

### macOS

Um den Gerätenamen für den seriellen Anschluss Ihres ftSwarm zu ermitteln, führen Sie den folgenden Befehl zweimal aus, zuerst mit ausgestecktem, dann mit eingestecktem ftSwarm.

Die Schnittstelle, die beim zweiten Mal zusätzlich erscheint, ist die des ftSwarm:

```
ls /dev/cu.*
```