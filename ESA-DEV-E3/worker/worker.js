// Express für den Worker laden
const express = require("express");

// Express-Anwendung erstellen
const app = express();

// JSON-Daten erlauben
app.use(express.json());

// Port des Workers
const PORT = 4000;

// REST-Endpunkt zur Verarbeitung einer Aufgabe
app.post("/process", (req, res) => {

    // Aufgabe aus der Anfrage lesen
    const task = req.body;

    // Empfehlung erzeugen
    let recommendation = "";

    if (task.priority === "High") {
        recommendation = "Start today.";
    } else if (task.priority === "Medium") {
        recommendation = "Complete this week.";
    } else {
        recommendation = "Can be scheduled later.";
    }

    // Ergebnis zurückgeben
    res.json({
        ...task,
        recommendation
    });

});

// Worker starten
app.listen(PORT, () => {
    console.log(`Worker running on port ${PORT}`);
});