---
title: Debugging
layout: category
lang: en
classes: wide
sidebar:
    nav: manual-en
---
There are multiple options to debug your application. One option is the  controller's [status page](/en/gettingstarted/WebUI). It shows the state of all inputs and outputs, you could manipulate the outputs as well.

Another option is to send some debug messages to your serial console / terminal program. Therefore you need to change your code, but debug output is more effective.


### Arduino Serial

The Arduino environment implements two simple functions to send some output using the serial console. 
**Serial.print** prints the argument, **Serial.println**prints the argument followed by a CR/LF.
If you like to format your output, printf is much more feasible.


### stdout & printf

printf sends stdout to the serial console. So you could just use **printf** commands to get some formatted output. Please keep in mind, the serial console is a buffered device. **printf("Hello world");** doesn't show the string immediatly.
The data is transferred using **fflush( stdout );** or by writing a new line **/n**.

### SWARM_LOPGx

The ftSwarm firmware has its own logging functions. You can also use these to debug your model. There are 5 debugging functions available:

- **SWARM_LOG_INFO** Writes an [INFO] message.
- **SWARM_LOG_WARN** Writes a [WARNING] message.
- **SWARM_LOG_WAIT** Writes a [WAITING] message and sets the LEDs to blue—waiting for hardware.
- **SWARM_LOG_ERROR** Writes an [ERROR] message and sets the LEDs to red—error.
- **SWARM_LOG_FATAL** Writes a [FATAL] message including the filename and the source code line. All motors are stopped and program execution is halted. The LEDs are set to pink.

```cpp
SWARM_LOG_INFO(“SWARM_LOG_INFO works like printf. %d*%d=%s”, 6, 7, “forty-two”);

Output:
[INFO] SWARM_LOG_INFO works like printf. 6*7=forty-two
```

### ESP_LOGx

You could use espressif's logging macro [ESP_LOGx](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/log.html). Using the Arduino IDE, you could set the logging level during compile time **Tools\Core Debug Level**. 
At PlatformIO you set the debug level in your projects ini-file: **build_flags = -DCORE_DEBUG_LEVEL=5**

```cpp
#include <ftSwarm.h>
#include <esp_log.h>

void setup(  ) {

	Serial.begin( 115200 );
	ftSwarm.begin();
	
	int p1 = 17;
	int p2 = 42;
	
	// Serial
	Serial.print("p1=");   Serial.print(p1);
	Serial.print(", p2="); Serial.println(p2);
	
	// printf
	printf( "p1=%d p2=%s\n", p1, p2 );

	// debug message
	ESP_LOGD( "MYTAG", "p1=%d p2=%s", p1, p2 );
	
	// error message
	ESP_LOGE( "MYTAG", "unexpected behaviour" );

}

void loop() {}
```
