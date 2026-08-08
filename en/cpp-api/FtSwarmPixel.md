---
title: FtSwarmPixel
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---
<div class="apicontainer">
    <div class="apileft">
        The ftSwarm has two built-in RGB LEDs that indicate the operational status of the controller. These LEDs can also be used by the control program.
        Additionally, up to 16 external ftPixels can be connected to the LED port of the ftSwarm. 
    </div>
    <div class="apiright apiimg"><img title="Bildnachweis: elektrofuzzis" src="/assets/img/LampLedDisplay/ftPixel-api.png">ftPixel</div>
</div>

External ftPixels are connected via the LED Extention Port. On the ftSwarm the ftPixel adapter can be used, on the ftSwarmRS the first ftPixel is connected directly to the screwterminal. The ftPixels additionally require a 9V power supply. Please consider the current consumption of the LEDs when selecting the power supply for the ftPixels!

![Anschluss](/assets/img/LampLedDisplay/ftPixelChain.png)

On the left side of the ftPixel's housing you will see "+" and "-" markings. Connect the middle pin on the marked side of the ftPixel to the LED Extention Port of the ftSwarm. "+" and "-" are connected to the power supply.

Further ftPixels could be simply cascaded. The three pins of the unmarked/right side of the previous ftPixel are connected to the pins of the marked/left side of the next ftPixel.

#### FtSwarmLED(FtSwarmSerialNumber_t serialNumber, FtSwarmPort_t port)

Constructor to create a FtSwarmLED object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- serialNumber: Serial number of the used ftSwarm controller.
- port: Port number, use **FTSWARM_LED1** and **FTSWARM_LED2** for the built-LEDs, **FTSWARM_LED3** ... **FTSWARM_LED18** for external ftPixel. 

#### FtSwarmLED( const char *name )

Constructor to create a FtSwarmLED object. If the referenced controller isn't connected to the swarm yet, the firmware will waits until the controller gets online.

- name: Alias name of the IO port.

#### void setColor(uint32_t color)

Sets the LED's color. Color is a RGB value, you could use FastLEDs CRGB-constants.

#### uint32_t getColor()

Gets the LED's color.

#### void setBrightness(uint8_t brightness)

Set the LED's brightness. 255 is maximum power, 0 will turn off the LED.

#### uint8_t getBrightness()

Get the LED's brightness.


#### void setBlink( uint32_t periodMS, uint8_t signal, uint8_t duty, uint8_t pause, FtSwarmEffectColor_t c1, FtSwarmEffectColor_t c2, FtSwarmEffectColor_t c3 )

Sets the ftPixel's blink effect on.

- periodMS: Duration of a beat in ms
- signal: Number of signal beats
- pause: Number of pause beats
- c1: ftPixel's color during signal
- c2: ftPixel's color during signal pause
- c3: ftPixel's color during pause

![Home](/assets/img/examples/blink-en.png)

Colors c1 bis c3 are using the following values:

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

Revoke the blink effect and set the ftPixel's color.