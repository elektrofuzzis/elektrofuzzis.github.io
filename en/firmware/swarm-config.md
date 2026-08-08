---
title: Swarm Configuration
layout: category
lang: en
classes: wide
sidebar:
    nav: firmware-en
---

This section manages the swarm.

```
***** Swarm Configuration *****

     Swarm Name: ftSwarm1010
     Kelda: ftSwarm1010
(w)  Communication WIFI: on
(r)  Communication RS485: off
     Pin: 1010

     Name         Status   NW-Age    Alias
( 1) ftSwarm1010  ONLINE   [000004]  

(n)  create new swarm
(+)  add a controller to my swarm
(-)  revoke a controller from my swarm
(a)  set alias name

(x)  Exit
```

### WIFI- and RS485-communication

These two options allow you to specify whether the controller’s swarm communication should take place via Wi-Fi and/or RS485.

The RS485 option is only available for the ftSwarmRS, ftSwarmXL, ftSwarmDuino, and ftSwarmPwrDrive controllers.

If you have selected the RS485 option, you can also set the transmission speed. 4 is the highest speed, which supports up to 16 controllers with a maximum cable length of 50 m. If you encounter problems with the cable length, reduce the swarm speed in increments. At a value of 0, you can use a cable length of up to 4,000 m, but you are limited to a maximum of 4 controllers.

### List of swarm members

This list displays all Swarm members. On the Kelda, all controllers are displayed; on a Swarm member, only the Kelda and the local controller are shown.

- Status indicates whether a controller is ONLINE or OFFLINE
- NW-Age indicates how many milliseconds ago the controller’s last status packet was received.
- If a controller has an alias, it is also displayed.

If you are connected to the Kelda, you can access the controller's IO configuration.

### Create new swarm

Creates a new swarm and sets Kelda mode on this controller. You will be prompted to enter the name and PIN for the new swarm. Afterward, this controller will be the first and only controller in the new swarm.

```
New Swarm Name [min. 5 chars]: Elektrofuzzis
"New Swarm Pin [1..9999]: 1234
Destroy the existing swarm and create a new one? [Y/N]  j
```

After a factory reset, each controller becomes a Kelda and forms its own swarm. To create a swarm from multiple controllers, you should create a new swarm on your designated Kelda. A new PIN will be assigned, which you’ll need when logging in to the Wi-Fi status page. If you use the default settings, anyone can guess the PIN—it’s the Kelda’s serial number.
{: .notice--info}

<div class="notice--info">
  Deleting the swarm is not communicated to the other swarm controllers. 
  <ul>
    <li>If a new swarm is created on a Kelda, the swarm members remain in the old swarm. This swarm no longer serves any purpose, since the Kelda no longer exists. If such a member is queried by a new Kelda, it joins the swarm of the querying Kelda.</li>
    <li>If a new swarm is created on a member and the old Kelda is still online, the old Kelda will automatically pull the member back into its swarm. Therefore, first delete the member on the old Kelda and then create the new swarm on the member.</li>
  </ul>
</div>

### Add a controller to my swarm

Select this option to add another controller to the swarm. This option is only available on the Kelda.

The requested controller will accept the request as long as it is not connected to other controllers in a swarm.

If the controllers communicate via Wi-Fi, both controllers must use the same Wi-Fi network. There are two options for the second controller: You can configure its Wi-Fi settings via the serial console, or the Kelda can transfer these settings to the new swarm member. If the Kelda cannot find the new swarm member on the Wi-Fi network, it will search for the second controller’s default Wi-Fi network and transfer its own Wi-Fi configuration to the new swarm member.
{: .notice--info}

### Revoke a controller from my swarm

Removes a controller from the swarm. This option is available only on the Kelda.

### Set alias name

Sets an alias for one of the controllers in the swarm.