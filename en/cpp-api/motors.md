---
title: Motors
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
gallery:
 - url: "/en/cpp-api/FtSwarmMiniMotor"
   image_path: "/assets/img/motor/motor-mini.png"
   title: "old Minimotors<br>(31077, 31062)"
 - url: "/en/cpp-api/FtSwarmMMotor"
   image_path: "/assets/img/motor/motor-m.png"
   title: "M-Motor<br>(31039 , 32618)"
 - url: "/en/cpp-api/FtSwarmXSMotor"
   image_path: "/assets/img/motor/motor-xs.png"
   title: "XS-Motor<br>(137096)"
 - url: "/en/cpp-api/FtSwarmSMotor"
   image_path: "/assets/img/motor/motor-s.png"
   title: "S-Motor or<br>new Minimotor<br>(32293)"
 - url: "/en/cpp-api/FtSwarmXMMotor"
   image_path: "/assets/img/motor/motor-xm.png"
   title: "XM-Motor<br>(135485)"
 - url: "/en/cpp-api/FtSwarmTractorMotor"
   image_path: "/assets/img/motor/motor-tractor.png"
   title: "Tractor Motor<br>(151178)"
 - url: "/en/cpp-api/FtSwarmEncoderMotor"
   image_path: "/assets/img/motor/motor-encoder.png"
   title: "Encoder Motor<br>(153422)"
 - url: "/en/cpp-api/FtSwarmEncoderMotor"
   image_path: "/assets/img/motor/motor-encoder-competition.png"
   title: "Encoder Motor<br>(186175)"
 - url: "/en/cpp-api/FtSwarmStepperMotor"
   image_path: "/assets/img/motor/motor-stepper.png"
   title: "Stepper Motor"
 - url: "/en/cpp-api/FtSwarmRCMotor"
   image_path: "/assets/img/otherActors/motor-rcservo.png"
   title: "RC-Servo as Motor<br>(31495)"
 - url: "/en/cpp-api/FtSwarmWheelDrive"
   image_path: "/assets/img/motor/wheeldrive.png"
   title: "Wheel Drive<br>(31494)"
---

Depending on the type, the controllers have between two and eight independent motor outputs (M1 through M8). These can be used to control all black *fischertechnik* 9V DC motors as well as the gray 6V versions.

The wheel drive (31494) can only be controlled by a ftSwarmRC.

Stepper motors can only be used with an ftSwarmPwdDrive.

### setSpeed & getSpeed

The motor speed is controlled using the **setSpeed** function:
- A positive value between 1 and 100 starts the motor.
- A negative value between -1 and -100 reverses the motor’s direction of rotation.
- 0 turns the motor off.

For stepper motors, the speed can be set to values between -4096 and 4096.

**getSpeed** returns the current speed.

### setMotionType

*fischertechnik* uses two different types of motors: those with a drive shaft, such as the tractor motor, and those with a spindle, such as the XS motor.

When spindle motors drive gears, the mechanism is self-locking. If the power is turned off, the model stops and the mechanism remains in its last position.

If motors with drive shafts are used, the drive is not self-locking: when powered off, the weight of the model can move the motor. Therefore, for these motors, the behavior when the power amplifier is turned off can be set via **setMotionType**:
- **FTSWARM_COAST** stops the motor and completely turns off the power amplifier. The motor can be turned by hand.
- **FTSWARM_BRAKE** stops the motor but does not turn off the driver. The motor is locked and cannot be turned manually.

Unlike **setSpeed(0)**, these two methods do not change the set speed. **setMotionType( FTSWARM_ON )** starts the motor at the previously set speed.

{% include gallery caption="Image source: fischertechnik & elektrofuzzis" %}