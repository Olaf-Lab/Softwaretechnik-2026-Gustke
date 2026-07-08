# Architektur

## Ziel

Der Smart Task Manager ist eine kleine Webanwendung zur Verwaltung persönlicher Aufgaben. Ziel des Projekts ist es, eine übersichtliche und modular aufgebaute Anwendung zu entwickeln, die schrittweise erweitert werden kann.

## Architektur

Die Anwendung besteht aus vier logisch getrennten Bereichen:

- Frontend
- Backend
- Datenhaltung
- Dokumentation

Das Frontend stellt die grafische Benutzeroberfläche bereit und ermöglicht die Interaktion mit dem Benutzer. Das Backend verarbeitet Anfragen und stellt die benötigten Daten über eine REST-Schnittstelle bereit. Die Daten werden zunächst in einer JSON-Datei gespeichert. Die Projektdokumentation erfolgt über Markdown-Dateien.

## Komponenten

- Frontend (HTML, CSS, JavaScript)
- Backend (Node.js und Express)
- Datenhaltung (JSON-Datei)
- Dokumentation (Markdown)

## Ausblick

Diese Architektur bildet die Grundlage für DEV-E3. Dort wird die Anwendung zu einer verteilten Software erweitert, indem zusätzliche Prozesse oder Dienste miteinander kommunizieren.
