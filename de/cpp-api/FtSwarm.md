---
title: ftSwarm
layout: category
lang: de
classes: wide
sidebar:
    nav: cppapi-de
---

Das Object ftSwarm stellt den Swarm selbst dar. Bevor Sie Sensoren und Aktoren verwenden können, müssen Sie den Swarm mit **ftSwarm::begin();** starten. 

Im Gegensatz zu Sensoren und Aktoren ist ftSwarm keine Klasse von der verschiedene Objekte abgeleitet werden. Da es nur einen Swarm geben kann, ist es ein vordefiniertes Objekt.
{: .notice--info}

#### FtSwarmSerialNumber_t begin( bool verbose = false, bool waitOnControllers = true )

Diese Methode startet den Swarm. Die Kelda verbindet sich mit den WLAN, kontaktiert die Swarm Member, lernt die in der Firmware definierten Sensoren und Aktoren und startet ggf. auch das WebUI.

Beim Start können einige Fehler auftreten:
- Kann der Controller sich nicht mit dem WLAN-Verbinden, so stoppt die Firmware. Die internen ftPixel werden rot.
- Kann der Controller einen Swarm Member nicht erreichen, so wartet die Firmware bis der Controller online ist. Die internen ftPixel sind solange blau.

Die Funktion liefert die Seriennummer des lokalen Controllers zurück.

Parameter:
- verbose: true, so gibt die Firmware viele Informationen über den Start Start des Swarms auf der seriellen Konsole aus.
- waitOnControllers: Ist der Parameter true, so wartet die Kelda ebim Starten bis alle Swarm Member online sind. Ist er false, so wartet die Kelda nicht. In den meisten Modellen ist es sinnvoll zunächst auf alle Swarm Member zu warten.

#### void halt( void )

Diese Methode stoppt alle Aktoren im Swarm.

#### bool sendEventData( uint8_t *buffer, size_t size )

Mit User-Events können Sie die Firmware auf Swarm-Membern erweitern. Anwendungsfälle sind z.Z. zusätzliche I²C-Sensoren.Diese Funktion sendet ein Datenpaket vom Member an die Kelda.

#### bool waitOnUserEvent( int parameter[10], TickType_t xTicksToWait = 512 )

Daten die mit **sendEventData** auf dem Member verschickt wurden, können mit dieser Funktion auf der Kelda ausgelegsen werden.

#### bool IOAvaliable( const char *name )

True, wenn es der IO **name** im Swarm existiert.

#### void setBlink( uint32_t periodMS, uint8_t signal, uint8_t duty, uint8_t pause, uint8_t p1, uint8_t p2, uint8_t p3 )

Schaltet bei allen Controllern im Swarm für die internen RGB-Leds bzw. ftPixel den Blinkmodus ein.

#### void resetBlink( int32_t color )

Schaltet bei allen Controllern im Swarm für die internen RGB-Leds bzw. ftPixel den Blinkmodus aus.