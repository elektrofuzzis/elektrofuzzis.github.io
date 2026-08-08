---
title: Remote Control
layout: category
lang: en
classes: wide
sidebar:
    nav: remote-en
---

The ftSwarmControl can be used very easily as a remote control. In this setup, the ftSwarmControl acts as the “yellow” remote control, and a second ftSwarm controller acts as the receiver. As with the “red” IR Control Set from fischertechnik, the mapping of which control element controls which motor is predefined.

![Home](/assets/img/ftSwarmControl/remote/example-en.png)

| Control Element | Actor | Function |
|---|:---:|---|
| left joystick | Motor M1 | The engine can be used to power a vehicle. |
| right joystick | Servo | The servo can be used to implement the steering system. |
| function+/- | Motor M2 | When the **Function+** button is pressed, motor M2 runs at a constant speed. Pressing the **Function-** button causes the motor to rotate in the opposite direction. This motor can be used, for example, to tilt the bed of a truck. |

To control different model types, you can choose from four different control configurations:
- **Car**: The left joystick controls M1, and the right joystick controls a servo — propulsion and steering. The F1/F2 buttons can control an additional function, such as a dump bed. The S1/S2/S3 buttons can be used to control headlights, turn signals and backlights using ftPixels.
- **Catapillar**: The two joysticks control motors M1 and M2. This allows you to build crawler-driven vehicles such as bulldozers or tanks.
- **Crane**: The left joystick controls the crane hook via M1; the right joystick rotates the crane via M2. F1 and F2 control either the trolley on a tower crane or the luffing mechanism of a truck crane. (Only for controllers with at least 4 motor outputs.)
- **Trailer**: The F1/F2 keys control a motor, e.g., the support wheel of a trailer.

*The available functions depend on the receiver used. For example, an ftSwarmRS has “only” 2 motor outputs but one servo output. The ftSwarmXL has 8 motor outputs but no servo output. The exact pin assignments are shown at the bottom of the page.*

You can save up to four different configurations on the ftSwarmControl. This allows you, for example, to control up to four different vehicles with a single remote control or to switch back and forth between different operating modes on a single vehicle. For a truck crane, one configuration can be set up for driving, and a second configuration for operating the crane.

The remote control requires no programming; the function is set up via the ftSwarmControl display.

### Step-by-Step Instructions

Turn on the ftSwarmController using the **ON** switch. A boot message will appear on the display, and shortly thereafter, the screen will switch to the status screen:

![Home](/assets/img/ftSwarmControl/main.png){:.align-center style="width: 25%;"}

Now press the **SET** button or S4 to access the ftSwarmControl settings.

![Home](/assets/img/ftSwarmControl/config-en.png){:.align-center style="width: 25%;"}

You can now use the ftSwarmControl controls to navigate the menus:
- Use the left joystick to navigate the screen.
- Press the joystick (button J1) to select a highlighted option.
- The F2 button always acts as the “Escape” key and exits the current menu. This function is indicated by the ^ symbol in the upper-right corner.
- When buttons S1 through S4 are used, their functions are displayed at the bottom of the screen.

### Firmware Version

All controllers must always have the same firmware version. You can [flash](../../firmware/flash) the firmware directly from this website.

### Wifi Setup

The controllers communicate with each other via wifi. Therefore, the next step is to configure the wifi settings for your ftSwarmControl. To do this, select the **Wifi Settings** menu item in **Setup**:

![Home](/assets/img/ftSwarmControl/wifi/wifi-en.png){:.align-center style="width: 25%;"}

Set the wifi mode to **Client** when you are at home. **AP** is best when you are outdoors or at an exhibition. In AP mode, the ftSwarmControl provides an own wifi network.

Then select the **SSID** and enter your wifi **password**.

Click **Save** to save the settings. The controller will restart.

Wifi only needs to be configured on the remote control, the ftSwarmControl. If you wish, you can also configure the wifi on the receivers. This is done via the serial console. When connecting the controllers in the next step, the ftSwarmControl can do that job and transfer the wifi settings to the receivers.

For more information on configuring the wifi, see [here](../../firmware/ftSwarmControl/wifi).

### Connect the receiver

To control one or more receivers, they must be connected to the ftSwarmControl. They then form a swarm.

Go to **Setup** and select the **Swarm Config** menu item. The swarm configuration screen displays the members of the swarm:

![Home](/assets/img/ftSwarmControl/swarm/list-en.png){:.align-center style="width: 25%;"}

Use the **add** and **del** buttons to add or delete additional controllers/receivers.

If the new controller's wifi has not yet been configured, ftSwarmControl can transfer wifi settings to the receiver. To do this, the receiver must be in its default state ([Factory Settings](../../firmware/factoryreset)). During this process, the wifi password is transmitted once in plain text.

For more information on configuring the Swarm, see [here](../../firmware/ftSwarmControl/swarm).

### Specify Function

In the final step, you must assign a function to your controller — which control element of the ftSwarmControl should control which motor, servo, or LED?

Go to **Settings** and select the **Remote Control** menu item:

![Home](/assets/img/ftSwarmControl/remote/remote-en.png){:.align-center style="width: 25%;"}

Press **SET** to change the function. First, select the controller for which you want to assign a function:

![Home](/assets/img/ftSwarmControl/remote/controller.png){:.align-center style="width: 25%;"}

Next, select the controller’s function:

![Home](/assets/img/ftSwarmControl/remote/type-en.png){:.align-center style="width: 25%;"}

The firmware now determines which motor is controlled by which control element.

<hr>

<style>
  .options-group { display: flex; gap: 20px; margin-bottom: 20px; justify-content: center; }
  .options-group label { display: flex; align-items: center; gap: 5px; cursor: pointer; }
  .vehicle-content { display: flex; flex-wrap: wrap; gap: 20px; }
  .vehicle-content div { flex: 0 0 calc((100% - (2 * 20px)) / 3); }
  .vehicle-content img { width: 100%; height: auto; display: block; }
  .vehicle-content img:hover { transform: scale(1.5); }
  .hidden { display: none !important; }
</style>

<div class="options-group">
  <p>Select the desired model function:</p>
  <label><input type="radio" name="vehicle" value="IDCAR" onclick="toggleVehicle(this.value)" checked><p>Car</p></label>
  <label><input type="radio" name="vehicle" value="IDCATAPILLAR" onclick="toggleVehicle(this.value)"><p>Catapillar</p></label>
  <label><input type="radio" name="vehicle" value="IDCRANE" onclick="toggleVehicle(this.value)"><p>Crane</p></label>
  <label><input type="radio" name="vehicle" value="IDTRAILER" onclick="toggleVehicle(this.value)"><p>Trailer</p></label>
</div>

<div id="IDCAR" class="vehicle-content">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/car-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
</div>

<div id="IDCATAPILLAR" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/catapillar-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<div id="IDCRANE" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/crane-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<div id="IDTRAILER" class="vehicle-content hidden">
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-rs.png"></div>
    <div><p class="headline">ftSwarmRS</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-rc.png"></div>
    <div><p class="headline">ftSwarmRC</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-xl.png"></div>
    <div><p class="headline">ftSwarmXL</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-jst.png"></div>
    <div><p class="headline">ftSwarmJST</p></div>
  </div>
  <div>
    <div><img src="/assets/img/ftSwarmControl/remote/trailer-duino.png"></div>
    <div><p class="headline">ftSwarmDuino</p></div>
  </div>
</div>

<script>
function toggleVehicle(selectedId) {
  const panels = document.querySelectorAll('.vehicle-content');
            
  panels.forEach(panel => {
    if (panel.id === selectedId) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}
</script>



