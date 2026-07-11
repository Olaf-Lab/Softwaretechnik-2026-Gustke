// Express für den Webserver laden
const express = require("express");

// CORS erlaubt Anfragen vom Frontend
const cors = require("cors");

// Dateisystem zum Lesen der JSON-Datei
const fs = require("fs");

// Pfade sicher erstellen
const path = require("path");

// Axios für HTTP-Anfragen laden
const axios = require("axios");

// Express-Anwendung erzeugen
const app = express();

// Server-Port festlegen
const PORT = 3000;

// JSON-Anfragen erlauben
app.use(express.json());

// CORS aktivieren
app.use(cors());

// Pfad zur Aufgaben-Datei
const dataPath = path.join(__dirname, "../data/tasks.json");

// REST-API: Alle Aufgaben zurückgeben
app.get("/tasks", (req, res) => {

    // JSON-Datei lesen
    fs.readFile(dataPath, "utf8", (err, data) => {

        // Fehler behandeln
        if (err) {
            return res.status(500).json({
                error: "Tasks could not be loaded."
            });
        }

        // Aufgaben als JSON zurückgeben
        res.json(JSON.parse(data));
    });
});

// REST-API: Aufgabe vom Frontend empfangen
app.post("/process-task", async (req, res) => {

    // Aufgabe aus der Anfrage lesen
    const task = req.body;

    try {

        // Aufgabe an den Worker senden
        const workerResponse = await axios.post(
            "http://localhost:4000/process",
            task
        );

        // Antwort des Workers zurück an das Frontend schicken
        res.json(workerResponse.data);

    } catch (error) {

        // Fehler, falls der Worker nicht erreichbar ist
        res.status(500).json({
            error: "Worker is not reachable."
        });

    }

});

// Server starten
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});