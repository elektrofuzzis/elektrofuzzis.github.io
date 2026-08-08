---
title: Calibrating Joysticks and RC Servos
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-en
---

The joysticks of the ftSwarmControl and RC servos have manufacturing tolerances. To compensate for these, they must be calibrated:

- For joysticks, this allows the center position and travel range to be adjusted.
- The internal potentiometer reading of RC servos varies greatly depending on the servo. To use the full range of motion, these values must be measured/calibrated.

In the calibration menu, all joysticks and RC servos of the model are displayed first:

![Home](/assets/img/ftSwarmControl/calibration/calibration-en.png){:.align-center style="width: 25%;"}

Selecting a joystick/servo starts the calibration.

### Joysticks

For joysticks, the maximum deflection and the center position are measured. In the first step, move the joystick in all four directions to the end stop:

![Home](/assets/img/ftSwarmControl/calibration/joystick-step1-en.png){:.align-center style="width: 25%;"}

When a direction is measured, the corresponding triangle is shown filled:

![Home](/assets/img/ftSwarmControl/calibration/joystick-step2-en.png){:.align-center style="width: 25%;"}

After all directions have been measured, the center position must now be measured. Simply release the joystick for this:

![Home](/assets/img/ftSwarmControl/calibration/joystick-step3-en.png){:.align-center style="width: 25%;"}

In the final step, you can now save the calibration:

![Home](/assets/img/ftSwarmControl/calibration/joystick-step4-en.png){:.align-center style="width: 25%;"}
