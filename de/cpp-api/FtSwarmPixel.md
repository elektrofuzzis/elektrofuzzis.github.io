---
title: FtSwarmPixel
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---
<div class="apicontainer">
    <div class="apileft">
        Der ftSwarm hat zwei eingebaute RGB LEDs, die den Betriebszustand des Controllers anzeigen. Diese LEDs können auch durch das Steuerprogramm verwendet werden.
        Zusätzlich können am LED-Port des ftSwarm bis zu 16 externe ftPixel angeschlossen werden. 
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/LampLedDisplay/ftPixel-api.png">ftPixel</div>
</div>

Externe ftPixel werden über den LED Extention Port angeschlossen. Am ftSwarm kann dazu der ftPixelAdpater verwendet werden, am ftSwarmRS wird der erste ftPixel direkt an der Schraubklemme angeschlossen. Die ftPixel benötigen zusätzlich eine 9V-Spannungsversorgung. Bitte beachten Sie bei der Auswahl der Stromversorgung für die ftPixel den Stromverbrauch der LEDs!

![Anschluss](/assets/img/LampLedDisplay/ftPixelChain.png)

Am Gehäuse der ftPixel sind auf der linken Seite "+" und "-" Markierungen. Verbinden Sie den mittleren Pin auf der markierten Seite des ftPixel mit dem LED Extention Port des ftSwarms. "+" und "-" werden an die Stromversorgung angeschlossen.

Weitere ftPixel werden einfach kaskadiert. Dabei werden jeweils die drei Pins der nicht markierten/rechten Seite des vorherigen ftPixel mit den Pins der markierten/linken Seite des nächsten ftPixel verbunden. 

#### FtSwarmLED(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor um ein FtSwarmLED Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- serialNumber: Seriennummer des ftSwarm-Controllers.
- port: Port number. Verwenden Sie **FTSWARM_LED1**, **FTSWARM_LED2** für die internen RGB-LEDs, **FTSWARM_LED3**..., **FTSWARM_LED18** für die externen LEDs.

#### FtSwarmLED( const char *name )

Constructor um ein FtSwarmLED Objekt zu erzeugen. Ist der angesprochene Controller nicht online, so wartet die Firmware solange bis der entsprechende Controller gestartet wird.

- name: Aliasname des IO Ports.

#### void setColor(uint32_t color)

Setzt die Farbe der LED. Es können die Farbkonstante aus der FastLED-Bibliothek verwendet werden.

#### uint32_t getColor()

Bestimmt die Farbe der LED.

#### void setBrightness(uint8_t brightness)

Setzt die Helligkeit aller LEDs. Dabei ist 255 die maximale Helligkeit, 0 schaltet die LED aus.

#### uint8_t getBrightness()

Bestimmt die Helligkeit der LED.

#### void setBlink( uint32_t periodMS, uint8_t signal, uint8_t duty, uint8_t pause, FtSwarmEffectColor_t c1, FtSwarmEffectColor_t c2, FtSwarmEffectColor_t c3 )

Schaltet den Blinkeffekt des ftPixels ein.

- periodMS: Taktzeit in ms
- signal: Anzahl der Signaltakte
- pause: Anzahl der Pausentakte
- c1: Signalfarbe
- c2: Farbe während der Signalpause
- c3: Farbe in den Pausentakten

![Home](/assets/img/examples/blink-de.png)

Die Farben c1 bis c3 verwenden folgende Farbwerte:

  - <span class="black">FTSWARM_EFFECT_COLOR_BLACK</span>
  - <span class="red">FTSWARM_EFFECT_COLOR_RED</span>
  - <span class="green">FTSWARM_EFFECT_COLOR_GREEN</span>
  - <span class="blue">FTSWARM_EFFECT_COLOR_BLUE</span>
  - <span class="yellow">FTSWARM_EFFECT_COLOR_YELLOW</span>
  - <span class="orange">FTSWARM_EFFECT_COLOR_ORANGE</span>
  - <span class="cyan">FTSWARM_EFFECT_COLOR_CYAN</span>
  - <span class="pink">FTSWARM_EFFECT_COLOR_PINK</span>
  - <span class="magenta">FTSWARM_EFFECT_COLOR_MAGENTA</span>
  - <span class="gray">FTSWARM_EFFECT_COLOR_WHITE</span>

#### void revokeEffect( CRGB color )

Schaltet den Blinkeffect wieder aus und setzt die Farbe auf color.
