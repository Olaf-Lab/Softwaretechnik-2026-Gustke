# ESA-DEV-E3 – Distributed Smart Task Manager

## Übersicht

Im Rahmen von DEV-E3 wird der in DEV-E2 entwickelte Smart Task Manager zu einer einfachen verteilten Anwendung erweitert.

Das System besteht aus mehreren eigenständigen Prozessen, die miteinander kommunizieren.

## Ziel

- verteilte Software entwickeln
- Kommunikation zwischen mehreren Prozessen
- AI-unterstützte Entwicklung dokumentieren

## Projektstruktur

```text
ESA-DEV-E3
│
├── backend/
│   └── server.js
│
├── worker/
│   └── worker.js
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── style.css
│
├── data/
│   └── tasks.json
│
├── docs/
│   └── architecture.md
│
├── screenshots/
│
├── README.md
├── package.json
└── package-lock.json

## Verteilte Architektur

Die Anwendung besteht aus drei Komponenten:

- Frontend (Browser)
- Backend (REST-API, Port 3000)
- Worker-Service (Port 4000)

Das Frontend kommuniziert ausschließlich mit dem Backend. Das Backend leitet Aufgaben per HTTP an den Worker-Service weiter. Der Worker verarbeitet die Aufgabe und sendet das Ergebnis an das Backend zurück.

## Technologien

- Node.js
- Express
- Axios
- HTML
- JavaScript

## AI-Unterstützung

Die Anwendung wurde mit Unterstützung generativer KI entwickelt. Die KI unterstützte bei der Erstellung der Projektstruktur, der Implementierung einzelner Komponenten sowie der Dokumentation. Die fachliche Prüfung, Anpassung und Integration erfolgte eigenständig.

## Ergebnis

Die Anwendung erfüllt die Anforderungen der Einsendeaufgabe DEV-E3. Sie demonstriert eine einfache verteilte Softwarearchitektur mit Frontend, Backend und einem eigenständigen Worker-Service.