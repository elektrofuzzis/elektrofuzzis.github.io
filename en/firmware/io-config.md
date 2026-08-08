---
title: IO Configuration
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-en
---

The IO configuration allows you to set the IO type and alias name for your IOs in Swarm.

- Alias names simplify programming but are not required. IOs with an alias name are displayed as active IOs on the status page under mySwarm.
- Assign the correct sensor or motor type to the IOs so that you can control your model via the status page even during assembly, without programming.
- Selecting the correct motor type is important. Each fischertechnik motor has its own characteristic curve and requires a different starting voltage to start. These characteristic curves are stored in the firmware, so that the motor rotates at a speed of 1 even without a mechanical load.

```
***** IO configuration *****

     Name               Type            Events Alias
( 1) A1                 DigitalInput    0        
( 2) A2                 DigitalInput    0        
( 3) A3                 DigitalInput    0        
( 4) A4                 DigitalInput    0        
( 5) A5                 DigitalInput    0        
( 6) A6                 DigitalInput    0        
( 7) PWRCTL             Powersensor     0        
( 8) ftSwarm1011.A1     DigitalInput    0        
( 9) ftSwarm1011.A2     DigitalInput    0        
(10) ftSwarm1011.A3     DigitalInput    0        
(11) ftSwarm1011.A4     DigitalInput    0        
(12) ftSwarm1011.A5     DigitalInput    0        
(13) ftSwarm1011.A6     DigitalInput    0        
(14) ftSwarm1011.PWRCTL Powersensor     0        

(a)  show actors
(p)  show pixels

(x)  Exit
```

If you access the IO configuration from the main menu, it displays the IOs for the entire swarm. If you access it from the swarm configuration, you will see only the IOs for the selected controller.

Since even a swarm consisting of just a few controllers has a large number of sensors and actors, only one base type is displayed at a time. Use **“(s) show sensors”**, **“(a) show actors”**, and **“(p) pixels”** to switch between the individual types. Use **“(<) Previous Page”** and **“(>) Next Page”** to scroll through the displayed type. A maximum of 18 IOs are displayed per page.

If you exit the menu with **“(x) Exit”** after making changes to individual I/Os, you can save the configuration to the controller.

### Configuring an I/O

To configure an IO, enter the IO number from the list displayed:

```
***** A1 *****

     Name:       A1
(t)  IO type:     DigitalInput
(a)  alias

(+)  add event
(s)  switch configuration

(x)  Exit
```

If events have already been assigned to the IO, they are displayed as a list.

**“(t) IO type”** selects the type of the IO.

**“(a) alias”** assigns an alias name to the IO. The IO is now displayed in the mySwarm overview on the status page.

**“(+) add event”** creates a new event. Events can be deleted using **“(-) delete event”**. 

**“(s) switch configuration”** allows you to switch between 4 configurations.

If you use an ftSwarmControl, for example, to control a vehicle, you’ll assign speed to the left joystick and steering to the right joystick. If you want to control multiple vehicles one after another — for example, an excavator and a dump truck — it would be convenient to use just one remote control and be able to switch between the vehicles.

This is made possible by the 4 configurations. When you define an event, it is automatically assigned to the currently active configuration. For example, in Configuration #1, you can assign the left joystick to the excavator’s drive motor, and in Configuration #2, to the dump truck’s drive motor. On the ftSwarmControl, you can switch between the two configurations using the SET button.

**“(l) Label”** assigns a label to an IO, which is then displayed in the ftSwarmControl status display. This allows assigned functions — e.g. S1 turns on the light — to be displayed on the screen with the label “LIGHT.” Like events, labels are also tied to a configuration. Labels can only be assigned to the buttons and joysticks of the local ftSwarmControl.
