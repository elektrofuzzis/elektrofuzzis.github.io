---
title: Swarm-Konfiguration
layout: category
lang: de
classes: wide
sidebar:
    nav: firmware-de
---

In diesem Bereich wird der Swarm verwaltet.

```
***** Swarm-Konfiguration *****

     Swarm Name: ftSwarm1010
     Kelda: ftSwarm1010
(w)  WLAN-Kommunikation: an
(r)  RS485-Kommunikation: aus
     Pin: 1010

     Name         Status   NW-Age    Alias
( 1) ftSwarm1010  ONLINE   [000014]  

(n)  neuen Swarm erstellen
(+)  Controller hinzufügen
(-)  Controller löschen
(a)  Alias-Name

(x)  Beenden
```

### WLAN- und RS485-Kommunikation

Mit diesen beiden Optionen können Sie festlegen, ob sie Swarm-Kommunikation des Controllers über WLAN und/oder RS485 erfolgen soll.

Die Option RS485 steht nur beiden Controllern ftSwarmRS, ftSwarmXL, ftSwarmDuino und ftSwarmPwrDrive zur Verfügung.

Wenn Sie die Option RS485 ausgewählt haben, können sie zusätzlich die Übertragungsgeschwindigkeit einstellen. 4 ist die höchste Geschwindigkeit, die bis zu 16 Controller bei einer maximale Kabellänge von 50 m ermöglicht. Bei Problemen mit der Kabellänge reduzieren Sie sie Swarm Speed schrittweise. Bei einem Wert von 0 können Sie bis zu 4.000 m Kabellänge verwenden, sind aber auf max. 4 Controller beschränkt.

### Liste der Swarm Member

In dieser Liste werden alle Swarm Member angezeigt. Auf der Kelda werden alle Controller angezeigt, auf einem Swarm Member nur die Kelda und der lokale Controller.

- Status zeigt an, ob ein Controller ONLINE oder OFFLINE ist
- NW-Age zeigt an, vor wie vielen ms das letzte Statuspaket des Controllers empfangen wurde.
- Hat ein Controller einen Alias-Namen so wird dieser ebenfalls angezeigt.

Wenn Sie mit der Kelda verbunden sind, so können Sie in die IO-Konfiguration der Controller wechseln.

### neuen Swarm erstellen

Erzeugt einen neuen Schwarm und stellt den Kelda-Modus an diesem Controller ein. Der Name und die PIN des neuen Schwarms werden abgefragt. Anschließend ist dieser Controller der erste und einzige Controller innerhalb des neuen Schwarms.

```
Neuer Swarm Name [min. 5 Zeichen]: Elektrofuzzis
Neuer Swarm Pin [1..9999]: 1234
Bestehenden Schwarm löschen und einen neuen erstellen? [J/N] j
```

Nach einem Factory Reset ist jeder Controller Kelda und bildet seinen eigenen Swarm. Um nun aus mehreren Controller einen Swarm zu bilden, sollten Sie auf Ihrer geplanten Kelda einen neuen Swarm bilden. Es wird dabei ein neuer PIN vergeben, den Sie beim Einloggen auf der WLAN-Statusseite benötigen. Verwenden Sie die Default-Einstellungen, so kann jeder die PIN erraten - es ist die Seriennummer der Kelda.
{: .notice--info}

<div class="notice--info">
  Das Löschen des Swarms wird nicht an die anderen im Swarm Controller übertragen.
  <ul>
    <li>Wird auf der Kelda ein neuer Swarm erzeugt, so verbleiben die Swarm-Member im alten Swarm. Dieser hat keine Funktion mehr, da es keine Kelda mehr gibt. Wird ein solcher Member von einer neuen Kelda angefragt, so tritt dieser dem Swarm der anfragenden Kelda bei.</li>
    <li>Wird auf einem Member ein neuer Swarm erzeugt und die alte Kelda ist noch Online, so wird diese den Member automatisch erneut in Ihren Swarm ziehen. Löschen Sie deshalb zuerst den Member auf der alten Kelda und erzeugen dann den neuen Swarm auf dem Member.</li>
  </ul>
</div>


### Controller hinzufügen

Wählen Sie diese Option, um dem Swarm einen weiteren Controller hinzuzufügen. Diese Option steht nur auf der Kelda zur Verfügung.

Der angefragte Controller akzeptiert die Anfrage, solange er nicht mit anderen Controllern in einem Swarm verbunden ist.

Kommunizieren die Controller über WLAN, so müssen beide Controller das gleiche WLAN verwenden. Für dem zweiten Controller gibt es zwei Möglichkeiten: Sie konfigurieren seine WLAN-Einstellung über die serielle Konsole oder die Kelda überträgt diese an den neuen Swarm-Member. Findet die Kelda den neuen Swarm-Member nicht im WLAN, so sucht sie nach dem Default-WLAN des zweiten Controllers und überträgt so die eigene WLAN-Konfiguration an den neuen Swarm-Member.
{: .notice--info}

### Controller löschen

Löscht einen Controller aus dem Swarm. Diese Option steht nur auf der Kelda zur Verfügung.

### Alias Name

Setzt einen Alias Namen für einen der Controller im Swarm.