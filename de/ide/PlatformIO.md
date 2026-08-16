---
title: PlatformIO mit VSCode
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---

<style>

.img-and-text {
  display: grid;
  /* Die erste Spalte passt sich dem Bild an, die zweite nimmt den Rest */
  grid-template-columns: max-content 1fr; 
  /* 10px Abstand zwischen den Spalten (und Zeilen, falls es umbricht) */
  gap: 10px; 
  /* Entfernt eventuelle Standard-Rahmen */
  border: none; 
  align-items: start;
}

/* Sorgt dafür, dass das Bild seine natürliche Breite behält */
.img-and-text img {
  display: block;
  max-width: 100%;
  height: auto;
}

.img-and-text ol {
  margin: 0;
  padding: 1em;
  list-style-position: outside;
  text-align: left;
}

.img-and-text li {
  text-align: left;
  margin-bottom: 5px;
}

</style>

### Installation VSCode

Installieren Sie zunächst VSCode:

  - **Windows:** Nutzen Sie die Installation über den Windows Store
  - **Linux:** Verwenden Sie die Anleitung auf [code.visualstudio.com](https://code.visualstudio.com/docs/setup/linux)
  - **MacOS:** Verwenden Sie die Anleitung auf [code.visualstudio.com](https://code.visualstudio.com/docs/setup/mac)

### Installation von PlatformIO

Starten Sie hierfür VSCode.

<div class="img-and-text">
  <div>
    <img src="/assets/img/pio/pio.png" alt="PlatformIO IDE Installation" />
  </div>
  <div>
    <ol>
      <li>Öffnen Sie den VSCode Extension Manager</li>
      <li>Suchen Sie Platform IO IDE</li>
      <li>Installieren Sie PlatformIO IDE</li>
      <li>Lesen Sie den <a href="https://docs.platformio.org/page/ide/vscode.html#quick-start" target="_blank">quick start guide</a></li>
    </ol>
  </div>
</div>

### Erzeugen Sie Ihr Projekt

Um Ihr Modell zu programmieren benötigen Sie nun ein neues PlatformIO-Projekt. Ab Version 0.7.0 benutzt die ftSwarm-Umgebung auf Boarddefinitionen. Die Boarddefinitionen sind noch nicht in PlatformIO online verfügbar. Sie müssen diese übergangsweise lokal in Ihrem Projektverzeichnis mit eintragen. Um dabei Fehler zu vermeiden, ist es am einfachsten eine ZIP-Datei mit einem Starter-Projekt zu verwenden:

<div class="img-and-text">
  <div>
    <img src="/assets/img/pio/pio-pick.png" alt="Neues Projekt" />
  </div>
  <div>
    <ol>
      <li>Downloaden Sie <a href="../../../assets/firmware/pio-starter-0.7.1.zip">pio-starter-0.7.1.zip</a></li>
      <li>Entpacken Sie die zip-Datei in ein Verzeichnis Ihrer Wahl.</li>
      <li>Wechseln Sie zu VSCode und clicken auf das PlatformIO-Icon</li>
      <li>Wählen Sie bei "Pick a folder" Ihr gerade Verzeichnis aus.</li>
    </ol>
  </div>
</div>

Als letzten Schritt müssen sie Ihren Controlltertyp auswählen. Am unteren Bildschirmrand finden Sie die PIO-Statusbar. Clicken Sie auf das Project Environment und wählen Sie Ihren Controllertyp aus:

![Home](/assets/img/pio/statusbar.png)

Jeder Controllerttyp wird doppelt angezeigt, z.B. ftSwarmRS und ftSwarmRS-DE. Mit der ersten Varianten compilieren Sie eine englischsprachige Firmware, mit der zweiten Variante sind die Ausgaben auf der seriellen Console in Deutsch.

### Ein Testprogramm flashen

Die ZIP-Datei enthält auch ein fertiges Hauptprogramm *src/main.cpp*. Dieses hat nur wenige Zeilen und startet die Firmware. Diese soll nun testweise geflashed werden:

![Home](/assets/img/pio/statusbar2.png)

1. Schließen Sie den Controller über ein USB-Kabel an den PC an und wählen Sie die entsprechende USB-Schnittstelle in der Statusbar aus.
2. Clicken Sie auf den Upload-Button. Die Software wird compiliert und auf den Controller geflashed.
3. Starten Sie die serielle Console und drücken Sie den Reset-Taster des Controllers. Es meldet sich die Firmware.

Wenn Sie die Fehlermeldung **"A fatal error occurred: This chip is ESP32-S3, not ESP32. Wrong --chip argument?"** beim flashen Ihres Programms erhalten oder die Firmware dem Fehler **"FATAL: Incompatible firmware hardware settings."** nach dem Starten/Reset des Controllers in der seriellen Console ausgibt, so müssen Sie den richtigen Controller im Project Environment auswählen.
{: .notice--info}

In der Statusbar stehen Ihnen die folgenden Buttons zur Verfügung:

<style>
img { vertical-align: middle;important! }
</style>

- ![build](/assets/img/pio/vs_build.png) oder <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd> compiliert Ihr Programm. 
- ![upload](/assets/img/pio/vs_upload.png) oder <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd> flashed Ihr Programm auf den Controller.
- ![serial](/assets/img/pio/vs_serial.png) oder <kbd>Strg</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd> startet den seriellen Monitor.

