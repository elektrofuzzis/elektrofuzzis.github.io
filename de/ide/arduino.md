---
title: Installation der Arduino IDE 
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---

Die Arduino IDE gibt es in zwei Versionen. Unterstützt werden 1.8.19 oder die jeweils neueste 2.x Version. Version 1.8.19 ist auf älteren PCs schneller.

Für die Installation sind mehrere Schritte notwendig. Die Anleitung bezieht sich auf Version 2.x der IDE. Die Konfigurationsschritte in der alten Version sind die gleichen, die Menüführung ist etwas anders.

### Download der IDE

Download und Installation der Arduino IDE von [arduino.cc](https://www.arduino.cc/en/software).

### Eintrag der Boardverwalter-URLs

Öffnen Sie den Arduino IDE den Voreinstellungen-Dialog *Datei/Einstellungen öffnen*.

In *Zusätzliche Boardverwalter-URLs* müssen Sie die URLs **https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json** eintragen.

Zu *Werkzeuge/Board/Boardverwaltung* wechseln and die neueste Version von *esp32 by espressif systems* installieren. Sollten nur 1.x-Versionen angezeigt werden, die Einstellung der Boardverwalter URL aus dem vorherigen Schritt überprüfen.

### 3rd-Party Bibliotheken installieren

Unsere ftSwarm Firmware benötigt einige Drittbibliotheken. Diese werden über *Werkzeuge\Bibliotheken verwalten* installiert:

- *VL53L0X by Pololu* Version 1.3.1 oder neuer
- *MPU6050 by electroniccats* Version 1.4.4 oder neuer
- *U8g2 by oliver <olikraus@gmail.com>* Version 2.36.19 oder neuer
- *FastLED by Daniel Garcia* Version 3.10.3 oder neuer
- *STM32duino LSM6DSR by SRA* Version 2.2.0 oder neuer

Wenn Sie einen ftSwarmDuino verwenden, so benötigen Sie ausserdem die [ftDuino-Umgebung](https://harbaum.github.io/ftduino/www/manual/installation.html#2).

### Die ftSwarm Bibliotek installieren

Downloaden Sie die neueste ftSwarm-Bibliothek <a href="https://github.com/elektrofuzzis/ftSwarm/releases">ftSwarm.zip</a>. Installieren Sie das ZIP-File über *Sketch\Bibliothek einbinden\ZIP Bibliothek hinzufügen*. Alle Controller verwenden die gleiche Bibliothek.

### Ein Testprogramm flashen

Erzeugen Sie in der Arduino-IDE über *"Datei/Neuer Sketch"* ein neues Projekt. Kopieren Sie das folgende Programm in den neuen Sketch und speichern diesen mit *"Datei/Speichern unter"* als *"Firmware"*.

```cpp
#include "SwOS.h"

void setup( void ) {

  firmware();
  ESP.restart();
  
}

void loop( void ) {

  delay(1000);

}
```

![Home](/assets/img/arduino/statusbar.png)

1. Schließen Sie den Controller über ein USB-Kabel an den PC an und wählen Sie den entsprechende Controllertyp und USB-Schnittstelle aus.
3. Clicken Sie auf den Upload-Button. Die Software wird compiliert und auf den Controller geflashed.
4. Starten Sie die serielle Console und drücken Sie den Reset-Taster des Controllers. Es meldet sich die Firmware.

Wenn Sie die Fehlermeldung **"A fatal error occurred: This chip is ESP32-S3, not ESP32. Wrong --chip argument?"** beim flashen Ihres Programms erhalten oder die Firmware dem Fehler **"FATAL: Incompatible firmware hardware settings."** nach dem Starten/Reset des Controllers in der seriellen Console ausgibt, so müssen Sie den richtigen Controller im Project Environment auswählen.
{: .notice--info}

Sie können in der Arduino-IDE die Sprache der Firmware in der seriellen Console über *"Werkzeuge/Language"* auf Englisch oder Deutsch einstellen.
{: .notice--info}