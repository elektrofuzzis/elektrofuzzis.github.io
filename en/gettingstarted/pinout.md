---
title: Connections
layout: category
lang: en
classes: wide
sidebar:
    nav: gettingstarted-en
---
Each controller has a USB port which you can use to flash the firmware or your control program. This is described in detail on the next page.

Although the controller can be booted via the USB port, the external 9V supply must be active in order to be able to use the controller's inputs and outputs.

The sensors in the model are connected to inputs A1 to A8 of the controller. Various analog or digital sensors can be connected to these connections (e.g. buttons, reed contacts, phototransistors, temperature sensors). The sensor is simply connected to the <span class="red">red</span> and <span class="green">green</span> terminals. With some sensors, the polarity must be observed, then the cable marked on the sensor is connected to the <span class="red">red</span> terminal. The terminals marked <span class="green">green</span> are GND or the fischertechnik "-" connection.

Most sensors can be connected to all inputs. Depending on the controller and input, there are individual restrictions - for example, an ultrasonic sensor can only be connected to A1 of the controller types ftSwarm and ftSwarmRS. You can read about this in detail in the description of the individual sensor classes in the API reference.

Normal actuators (e.g. DC motors, lamps, solenoid valves) are connected to the motor outputs M1 to M8. There are separate plugs for servo motors.

Some controllers have an RS485 connection to map Swarm communication via cable as an alternative. The connection diagram is described in a separate [RS485 chapter](../rs485).

<div class="flex-container">
  <div>
    <div><a href="../../products/ftSwarm">ftSwarm</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmJSTPinout.svg"></div>
    <div>
      <p class="pdetail">
        An MPU6050 gyro can be connected to the I²C/gyro connector.<br><br>For the connection of ftPixel there is a separate adapter which converts the pin header to a fischertechnik socket. <br><br>SD cards can be inserted into the slot on the side of the housing.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmRS">ftSwarmRS</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmRSPinout.svg"></div>
    <div>
      <p class="pdetail">
        In contrast to the previous model, ftPixel can be connected directly to the terminal strip without an adapter.<br><br>SD cards can be inserted into the slot on the side of the housing.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmXL">ftSwarmXL</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmXLPinout.svg"></div>
    <div>
      <p class="pdetail">
        In order to provide sufficient power for the 8 motor outputs, there are three 9V power supplies, all of which must be connected. Depending on the power requirement, this can be done via one or more power supply units.<br><br>Please note that the motor output M7 is switched on in your model when booting and when flashing the firmware.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmControl">ftSwarmControl</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmControlPinout.svg"></div>
    <div>
      <p class="pdetail">
        In addition to the normal inputs, the ftSwarmControl also has the two joysticks (J1, J2) and six buttons (F1, F2, S1 to S4).<br><br>
        The ftSwarmControl has an power switch (On) to save the battery in the compartment. 9V blocks and rechargeable batteries can be used as well.<br><br>
        The controller can also be powered via the 9V plug without any battery.<br><br>
        The SD card is hidden in the lower housing; the housing must be unscrewed to change it.
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmPwrDrive">ftSwarmPwrDrive</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmPwrDrivePinout.svg"></div>
    <div>
      <p class="pdetail">
        The controller is plugged into the I²C bus of the ftPwrDive and then provides the stepper motors as Step1 to Step4 in the Swarm.<br><br>Only digital sensors (push-buttons, phototransistors, red contacts) can be connected to the limit switches (ES1 to ES4) and the emergency stop (EM).
      </p>
    </div>
  </div>
  <div>
    <div><a href="../../products/ftSwarmDuino">ftSwarmDuino</a></div>
    <div><img class="zoom" src="/assets/img/ftSwarmDuinoPinout.svg"></div>
    <div>
      <p class="pdetail">
        The controller is plugged into the I²C bus of the ftPwrDive and then provides the motor outputs of the ftDuino as M1 to M4 and the inputs as A1 to A8 in the Swarm.<br><br>For the 9V power supply, it is sufficient to connect the <span class="red">red 9V terminal</span> to the adjacent 9V output of the ftDuino. The GND/minus connection is made automatically via the I²C connector.<br><br>
        Additionally, you need to flash the sketch ftDuino.ino on your ftDuino. Download arduino-firmware.zip from the release page at github.
      </p>
    </div>
  </div>
</div>
