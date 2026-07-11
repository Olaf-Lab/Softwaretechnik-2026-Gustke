# Architektur

## Ziel

Der Smart Task Manager wird in DEV-E3 zu einer verteilten Anwendung erweitert.

Die Verteilung besteht darin, dass zwei eigenständige Node.js-Prozesse miteinander über HTTP kommunizieren.

## Komponenten

Das System besteht aus drei Hauptkomponenten:

1. Frontend
2. Backend/API-Server
3. Worker-Service

## Kommunikation

```text
Frontend
   |
   | HTTP-Anfrage
   v
Backend auf Port 3000
   |
   | HTTP-Anfrage
   v
Worker auf Port 4000
   |
   | Verarbeitungsergebnis
   v
Backend
   |
   v
Frontend
```

## Aufgaben der Komponenten

### Frontend

Das Frontend zeigt die Aufgaben und Verarbeitungsergebnisse für den Benutzer an.

### Backend

Das Backend empfängt Anfragen vom Frontend. Es lädt Aufgaben und sendet einzelne Aufgaben zur Verarbeitung an den Worker-Service.

### Worker

Der Worker läuft als eigener Prozess auf Port 4000. Er empfängt Aufgaben vom Backend, verarbeitet Priorität und Status und sendet eine Empfehlung zurück.

## Warum ist die Anwendung verteilt?

Backend und Worker sind zwei unabhängig gestartete Prozesse.

Sie laufen:

- in getrennten Node.js-Prozessen
- auf unterschiedlichen Ports
- mit unterschiedlichen Aufgaben
- mit Kommunikation über HTTP

Damit sendet ein Prozess Daten an einen zweiten Prozess, der diese verarbeitet und ein Ergebnis zurückgibt.