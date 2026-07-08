// Express wird für den Webserver verwendet
const express = require("express");

// fs wird zum Lesen der JSON-Datei verwendet
const fs = require("fs");

// CORS erlaubt den Zugriff vom Frontend auf das Backend
const cors = require("cors");

// path hilft beim sicheren Erstellen von Dateipfaden
const path = require("path");

// Express-App erstellen
const app = express();

// Port für das Backend festlegen
const PORT = 3000;

// JSON-Daten erlauben
app.use(express.json());

// CORS aktivieren
app.use(cors());

// Pfad zur JSON-Datei mit den Aufgaben
const dataPath = path.join(__dirname, "../data/tasks.json");

// REST-Endpunkt zum Abrufen aller Aufgaben
app.get("/tasks", (req, res) => {

    // Aufgaben aus der JSON-Datei lesen
    fs.readFile(dataPath, "utf8", (err, data) => {

        // Fehlerbehandlung, falls Datei nicht gelesen werden kann
        if (err) {
            return res.status(500).json({
                error: "Tasks could not be loaded."
            });
        }

        // JSON-Daten an das Frontend senden
        res.json(JSON.parse(data));
    });
});

// Server starten
app.listen(PORT, () => {
    console.log(`Smart Task Manager backend running on port ${PORT}`);
});