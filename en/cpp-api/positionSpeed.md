---
title: Position & Speed
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
counterFrequency:
 - url: "/en/cpp-api/FtSwarmCounter/"
   image_path: "/assets/img/switches/counter.png"
   title: "Counter"
 - url: "/en/cpp-api/FtSwarmFrequencyMeter/"
   image_path: "/assets/img/switches/frequency.png"
   title: "Frequency measurement"
rotary:
 - url: "/en/cpp-api/FtSwarmRotaryEncoder/"
   image_path: "/assets/img/switches/rotary.png"
   title: "Rotary encoder"
gyro:
 - url: "/en/cpp-api/FtSwarmGyro/"
   image_path: "/assets/img/gyro/gyro.png"
   title: "Gyro"
---

These sensors are not available as off-the-shelf *fischertechnik* components, but they can be assembled from *fischertechnik* parts.

### Counter & Frequency Measurement

Suitable input signals for the counter and frequency meter include:

- the encoder on an encoder motor
- roller wheel 32367 with a forked light barrier (e.g. CNY37)
- neodymium magnets on a turntable 60 (31019) with a reed contact (36120, 36137, 210332, 219834)
- light barriers assembled from *fischertechnik* LEDs and the phototransistor (36134)

The roller wheel combined with a *fischertechnik* push-button does not produce good results because the button bounces and may generate multiple readings for each pulse.

Forked light barrier 5 (32357) from the Computing Training Robot (30572) can also be used instead of the CNY37. However, it requires an additional 5 V power supply. On the ftSwarmRS and ftSwarmJST, the 5 V supply can be provided through the servo connector; see the pinout diagrams. Caution: Incorrect polarity can destroy the ftSwarm and/or the light barrier.

{% include gallery id="counterFrequency" %}

### Rotary Encoder

The following work very well:

- the encoders on two encoder motors
- ftKnob

Rotary encoders can also be built from a roller wheel, neodymium magnets, and light barriers. However, they are too imprecise for most applications.

{% include gallery id="rotary" %}

### Gyro

Newer ftSwarm controllers have a built-in gyro (ftSwarmRS, ftSwarmRC, ftSwarmControlUSBC). On older models (ftSwarmControlMicro, ftSwarmJST, and ftSwarmXL), an MPU6050 breakout board can optionally be connected to the extension port.

{% include gallery id="gyro" %}