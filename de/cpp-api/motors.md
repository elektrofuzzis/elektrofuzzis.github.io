---
title: Motoren
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
gallery:
 - url: "/de/cpp-api/FtSwarmMiniMotor"
   image_path: "/assets/img/motor/motor-mini.png"
   title: "alte Minimotoren<br>(31077, 31062)"
 - url: "/de/cpp-api/FtSwarmMMotor"
   image_path: "/assets/img/motor/motor-m.png"
   title: "M-Motor<br>(31039 , 32618)"
 - url: "/de/cpp-api/FtSwarmXSMotor"
   image_path: "/assets/img/motor/motor-xs.png"
   title: "XS-Motor<br>(137096)"
 - url: "/de/cpp-api/FtSwarmSMotor"
   image_path: "/assets/img/motor/motor-s.png"
   title: "S-Motor bzw.<br>neuer Minimotor<br>(32293)"
 - url: "/de/cpp-api/FtSwarmXMMotor"
   image_path: "/assets/img/motor/motor-xm.png"
   title: "XM-Motor<br>(135485)"
 - url: "/de/cpp-api/FtSwarmTractorMotor"
   image_path: "/assets/img/motor/motor-tractor.png"
   title: "Tractor Motor<br>(151178)"
 - url: "/de/cpp-api/FtSwarmEncoderMotor"
   image_path: "/assets/img/motor/motor-encoder.png"
   title: "Encoder Motor<br>(153422)"
 - url: "/de/cpp-api/FtSwarmEncoderMotor"
   image_path: "/assets/img/motor/motor-encoder-competition.png"
   title: "Encoder Motor<br>(186175)"
 - url: "/de/cpp-api/FtSwarmStepperMotor"
   image_path: "/assets/img/motor/motor-stepper.png"
   title: "Schrittmotor"
 - url: "/de/cpp-api/FtSwarmRCMotor"
   image_path: "/assets/img/otherActors/motor-rcservo.png"
   title: "RC-Servo als Motor<br>(31495)"
 - url: "/de/cpp-api/FtSwarmWheelDrive"
   image_path: "/assets/img/motor/wheeldrive.png"
   title: "Radantrieb<br>(31494)"
---

Die Controller haben je nach Typ zwischen zwei und acht unabhängigen Motorausgänge (M1 bis M8). Mit ihnen lassen sich alle schwarze  *fischertechnik* 9V DC Motoren als auch die grauen 6V Varianten steuern.

Der Radantrieb (31494) kann nur von einem ftSwarmRC gesteuert werden.

Schrittmotoren können nur an einem ftSwarmPwdDrive verwendet werden.

### setSpeed & getSpeed

Die Geschwingigkeit der Motors wird über die Funktion **setSpeed** gesteuert:
- Ein positiver Wert zwischen 1 und 100 startet den Motor.
- Ein negativer Wert zwischen -1 und -100 dreht den Motor in der umgekehrten Richtung.
- 0 schaltet den Motor aus.

Bei Schrittmotoren kann die Geschwindigkeit auf Werte zwischen -4096 und 4096 gesetzt werden.

**getSpeed** gibt die aktuelle Geschwindigkeit zurück.

### setMotionType

*fischertechnik* verwendet zwei unterschiedliche Motortypen: mit einer Antriebsachse wie beim TraktorMotor oder mit einer Spindel wie beim XSMotor.

Treiben Spindelmotoren Zahnräder an, so ist der Aufbau selbstblockierend. Schaltet man die Stromversorgung ab, so stoppt das Modell und die Mechanik bleibt an der letzten Position stehen.

Werden Motoren mit Antriebsachsen verwendet, so ist der Antrieb nicht selbstblockierend: Im ausgeschalteten Zustand kann das Gewicht des Modells den Motor bewegen. Deshalb kann für diese Motoren über **setMotionType** das Verhalten bei ausgeschalteter Endstufe eingestellt werden:
- **FTSWARM_COAST** stoppt den Motor und schaltet die Endstufe komplett aus. Der Motor kann mit der Hand gedreht werden.
- **FTSWARM_BRAKE** stoppt den Motor, schaltet die Endstufe allerdings nicht aus. Der Motor wird blockiert und kann nicht manuell gedreht werden.

Im Gegensatz zu **setSpeed(0)** verändern die beiden Methoden nicht die gesetzte Geschwindigkeit. **setMotionType( FTSWARM_ON )** startet den Motor in der zuvor gesetzten Geschwindigkeit.

{% include gallery caption="Bildnachweis: fischertechnik & elektrofuzzis" %}