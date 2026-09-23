---
title: ftSwarm
layout: category
lang: en
classes: wide
sidebar:
    nav: cppapi-en
---

The ftSwarm object represents the swarm itself. Before using sensors and actors, you must start the swarm with **ftSwarm::begin();**

Unlike sensors and actors, ftSwarm is not a class from which multiple objects are created. Since there can only be one swarm, it is a predefined object.
{: .notice--info}

#### FtSwarmSerialNumber_t begin( bool verbose = false, bool waitOnControllers = true )

This method starts the swarm. The Kelda connects to the Wi-Fi network, contacts the swarm members, discovers the sensors and actors defined in the firmware, and starts the WebUI if necessary.

Some errors may occur during startup:
- If the controller cannot connect to the Wi-Fi network, the firmware stops. The internal ftPixels turn red.
- If the controller cannot reach a swarm member, the firmware waits until the controller is online. The internal ftPixels remain blue until then.

The function returns the serial number of the local controller.

Parameters:
- verbose: If true, the firmware outputs detailed information about starting the swarm on the serial console.
- waitOnControllers: If true, the Kelda waits until all swarm members are online during startup. If false, the Kelda does not wait. For most models, it is useful to wait for all swarm members first.

#### void halt( void )

This method stops all actors in the swarm.

#### bool sendEventData( uint8_t *buffer, size_t size )

User events allow you to extend the firmware on swarm members. Current use cases include additional I2C sensors. This function sends a data packet from a member to the Kelda.

#### bool waitOnUserEvent( int parameter[10], TickType_t xTicksToWait = 512 )

Data sent by a member with **sendEventData** can be read on the Kelda with this function.

#### bool IOAvaliable( const char *name )

Returns true if the IO named **name** exists in the swarm.

#### void setBlink( uint32_t periodMS, uint8_t signal, uint8_t duty, uint8_t pause, uint8_t p1, uint8_t p2, uint8_t p3 )

Enables blink mode for the internal RGB LEDs or ftPixels on all controllers in the swarm.

#### void resetBlink( int32_t color )

Disables blink mode for the internal RGB LEDs or ftPixels on all controllers in the swarm.