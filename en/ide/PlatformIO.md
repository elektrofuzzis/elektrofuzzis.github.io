---
title: PlatformIO with VSCode
layout: category
lang: en
classes: wide
sidebar:
    nav: manual-en
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

### Installing VSCode

First, install VSCode:

  - **Windows:** Install it from the Windows Store
  - **Linux:** Follow the instructions at [code.visualstudio.com](https://code.visualstudio.com/docs/setup/linux)
  - **macOS:** Follow the instructions at [code.visualstudio.com](https://code.visualstudio.com/docs/setup/mac)

### Installing PlatformIO

To do this, launch VSCode.

<div class="img-and-text">
  <div>
    <img src="/assets/img/pio/pio.png" alt="PlatformIO IDE Installation" />
  </div>
  <div>
    <ol>
      <li>Open the VSCode Extension Manager</li>
      <li>Search for PlatformIO IDE</li>
      <li>Install PlatformIO IDE</li>
      <li>Read the <a href="https://docs.platformio.org/page/ide/vscode.html#quick-start" target="_blank">quick start guide</a></li>
    </ol>
  </div>
</div>

### Create Your Project

To program your model, you now need a new PlatformIO project. Starting with version 0.7.0, the ftSwarm environment uses board definitions. The board definitions are not yet available online in PlatformIO. For the time being, you’ll need to include them locally in your project directory. To avoid errors, the easiest way is to use a ZIP file containing a starter project:

<div class="img-and-text">
  <div>
    <img src="/assets/img/pio/pio-pick.png" alt="New Project" />
  </div>
  <div>
    <ol>
      <li>Download <a href="../../../assets/firmware/pio_ftSwarm.zip">pio_ftSwarm.zip</a></li>
      <li>Extract the ZIP file to a directory of your choice.</li>
      <li>Switch to VSCode and click the PlatformIO icon</li>
      <li>Under “Pick a folder,” select the directory you just created.</li>
    </ol>
  </div>
</div>

As a final step, you must select your controller type. At the bottom of the screen, you’ll find the PIO status bar. Click on the Project Environment and select your controller type:

![Home](/assets/img/pio/statusbar.png)

Each controller type is displayed twice, e.g., ftSwarmRS and ftSwarmRS-DE. The first option compiles English-language firmware, while the second option displays output on the serial console in German.

### Flashing a Test Program

The ZIP file also contains a ready-to-use main program *src/main.cpp*. It consists of only a few lines and launches the firmware. Let’s now flash it for testing purposes:

![Home](/assets/img/pio/statusbar2.png)

1. Connect the controller to the PC using a USB cable and select the appropriate USB port in the status bar.
2. Click the Upload button. The software will be compiled and flashed to the controller.
3. Open the serial console and press the controller’s reset button. The firmware will initialize.

If you receive the error message **"A fatal error occurred: This chip is ESP32-S3, not ESP32. Wrong --chip argument?“** while flashing your program, or if the firmware displays the error **”FATAL: Incompatible firmware hardware settings."** in the serial console after starting or resetting the controller, you must select the correct controller in the Project Environment.
{: .notice--info}

The following buttons are available in the status bar:

<style>
img { vertical-align: middle;important! }
</style>

- ![build](/assets/img/pio/vs_build.png) or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>B</kbd> compiles your program.
- ![upload](/assets/img/pio/vs_upload.png) or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>U</kbd> flashes your program to the controller.
- ![serial](/assets/img/pio/vs_serial.png) or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>S</kbd> launches the serial monitor.
