# ESA-DEV-E2 – Pet Project: Smart Task Manager

## Aufgabenstellung

Ziel dieser Aufgabe ist die Entwicklung eines eigenen Pet Projects unter Verwendung moderner AI- und GenAI-Unterstützung. Dabei soll ein funktionsfähiger Software-Prototyp entstehen, dessen Entwicklung nachvollziehbar dokumentiert wird.

## Projektidee

Für diese Einsendeaufgabe wurde ein **Smart Task Manager** entwickelt. Die Anwendung unterstützt Benutzer bei der Verwaltung persönlicher Aufgaben, Prioritäten und Bearbeitungsstände.

Das Projekt baut auf dem in DEV-E1 entworfenen GUI-Prototyp auf und erweitert diesen zu einer lauffähigen Webanwendung.

## Projektstruktur

```text
ESA-DEV-E2/
├── frontend/
├── backend/
├── data/
├── docs/
└── screenshots/
```

## Verwendete Technologien

- HTML5
- CSS3
- JavaScript
- Node.js
- Express
- JSON
- Git
- GitHub
- Visual Studio Code
- AI-/GenAI-Unterstützung

## Projektziel

Im Mittelpunkt steht die Entwicklung einer kleinen modular aufgebauten Webanwendung. Die Anwendung bildet gleichzeitig die Grundlage für DEV-E3, in dem sie zu einer verteilten Anwendung erweitert wird.

## Dokumentation

Weitere Informationen befinden sich in den Markdown-Dateien im Ordner `docs`.

- architecture.md
- features.md
- development-steps.md

## Projekt starten

### Voraussetzungen

Folgende Software wird benötigt:

- Node.js
- npm
- Git
- Visual Studio Code

### Installation

Die benötigten Bibliotheken werden einmalig installiert:

```bash
npm install
```

### Backend starten

Zum Starten des Backends wird folgender Befehl verwendet:

```bash
node backend/server.js
```

### REST-API testen

Nach dem Start des Backends kann die REST-API im Browser überprüft werden:

```text
http://localhost:3000/tasks
```

### Frontend starten

Anschließend wird die Datei `frontend/index.html` im Browser geöffnet. Das Frontend lädt die Aufgaben automatisch über die REST-API und zeigt sie in der Benutzeroberfläche an.

## Testergebnis

Die Anwendung wurde erfolgreich getestet. Das Backend konnte gestartet werden, die REST-API liefert die Aufgaben als JSON-Daten und das Frontend stellt diese korrekt im Browser dar.