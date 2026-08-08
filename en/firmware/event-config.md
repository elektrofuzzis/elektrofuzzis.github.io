---
title: Remote/Event Configuration
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-en
---

Controlling many models is quite simple. Buttons control motors. With events, you can set triggers for input signals such as buttons or photoresistors and automatically control a motor, servo, or ftPixel when the signal changes. A detailed description and examples of use can be found in [Event Programming](../../programming/events).

```
***** Remote configuration *****

( 1) ftSwarm1010.S1.TriggerUp -> ftSwarm1010.M1.setSpeed( 100 )
( 2) ftSwarm1010.S1.TriggerDown -> ftSwarm1010.M1.setSpeed( 0 )

(+)  add event
(-)  delete event
(s)  change configuration

(x)  Beenden
```

The event list shows the events that have already been defined. The example demonstrates how to turn motor M1 on and off using button S1 on an ftSwarmControl.

An event always consists of 
- A trigger on an input (TriggerDown, TriggerUp, ChangeValue). If the input changes according to the trigger condition, the event is executed.
- The processing of the event. Here, the sensor value, the actuator value, and a constant value can be added together or multiplied.
- The result of the processing is applied to the actuator. For motors, this adjusts the speed; for servos, the position; and for an ftPixel, the color.

**“(+) add event”** creates a new event. Events can be deleted with **“(-) delete event”**. 

**“(s) switch configuration”** allows you to switch between 4 configurations.

If you use an ftSwarmControl, for example, as a vehicle controller, you’ll assign speed to the left joystick and steering to the right joystick. If you now want to control multiple vehicles one after another—for example, an excavator and a dump truck—it would be convenient to use just one remote control and be able to switch between the vehicles.

This is made possible by the four configurations. When you define an event, it is automatically assigned to the currently active configuration. For example, in Configuration #1, you can assign the left joystick to the excavator’s drive motor, and in Configuration #2, to the dump truck’s drive. On the ftSwarmControl, you can use the SET button to switch between the two configurations.
