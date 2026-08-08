---
title: ftPixel
layout: category
lang: de
classes: wide
sidebar:
    nav: manual-de
---
Der ftSwarm hat zwei eingebaute RGB-LEDs, um den Betriebszustand anzeigen. Die LEDs können aber auch über das Steuerprogramm geschaltet werden. Bis zu 16 ftPixels können  zusätzliche extern an den LED-Port angeschlossen werden.

![Home](/assets/img/examples/ftPixel.png)


Externe ftPixel können nur an den ftSwarmJST, den ftSwarmRS und ftSwarmRC angeschlossen werden.
{: .notice--info}

```cpp
#include <ftSwarm.h>
#include <FastLED.h>

FtSwarmPixel *led1;
FtSwarmPixel *led2;

void setup( ) {

  // start the swarm
  FtSwarmSerialNumber_t local = ftSwarm.begin( );
  
  // get led instances
  led1 = new FtSwarmPixel( local, FTSWARM_LED1 );
  led2 = new FtSwarmPixel( local, FTSWARM_LED2 );
  
}

void loop( ) {

  Serial.println("colors...");
  led1->setColor( CRGB::Blue );
  led2->setColor( CRGB::Cyan);
  delay(500);
  led1->setColor( CRGB::Red);
  led2->setColor( CRGB::Orange);
  delay(500);
  led1->setColor( CRGB::Green);
  led2->setColor( CRGB::Yellow);
  delay(500);

  Serial.println("brightness");
  for (uint8_t i=64; i!=0; i-=16) {
    led1->setBrightness(i);
    delay(500);
  }
  
  led1->setBrightness(64);

}
```

Die Firmware verwendet intern die FastLED-Bibliothek. Der Import **#include "FastLED.h "** wird benötigt, um auf die FastLED Farbdefinitionen wie **CRGB::Blue** zuzugreifen. Die LEDs werden mit den Funktionne  **setColor** und **setBrightness** gesteuert. setColor erwartet eine uint32_t als Farbe [0..0xFFFFFF] und setBrightness setzt die Helligkeit von 0 bis 255.

In älteren Versionen konnte die Helligkeit nur für alle LEDs gesetzt werden. Ab Version 0.7.0 kann die Helligkeit auch für einzelne LEDs gesetzt werden.
{: .notice--info}

RGB-LEDs haben einen hohen Strombedarf. Eine auf CRGB::White und maximaler Helligkeit geschaltete LED hat einen Stromverbrauch von 60 mA. Zwei LEDs mit maximaler Helligkeit benötigen genauso viel Strom wie der ESP32 Chip mit aktivem WLAN. Reduziert man die Helligkeit auf einen Wert zwischen 16 und 64, so sinkt der Stromverbrauch auf 6%..25%.
{: .notice--info}