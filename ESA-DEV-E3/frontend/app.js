// Buttons aus dem HTML auswählen
const loadButton = document.getElementById("loadTasksButton");
const processButton = document.getElementById("processTaskButton");

// Bereich für die Ausgabe auswählen
const taskContainer = document.getElementById("taskContainer");

// Klick auf „Aufgaben laden“
loadButton.addEventListener("click", loadTasks);

// Klick auf „Aufgabe verarbeiten“
processButton.addEventListener("click", processTask);

// Aufgaben vom Backend laden
async function loadTasks() {
    try {
        // GET-Anfrage an das Backend senden
        const response = await fetch("http://localhost:3000/tasks");

        // Antwort in JavaScript-Daten umwandeln
        const tasks = await response.json();

        let output = "";

        // Alle Aufgaben anzeigen
        tasks.forEach(task => {
            output += `
                <p>
                    <strong>${task.title}</strong><br>
                    Priorität: ${task.priority}<br>
                    Status: ${task.status}<br>
                    Empfehlung: ${task.recommendation || "Noch nicht verarbeitet"}
                </p>
                <hr>
            `;
        });

        taskContainer.innerHTML = output;

    } catch (error) {
        taskContainer.innerHTML =
            "<p>Backend nicht erreichbar.</p>";
    }
}

// Eine Beispielaufgabe über das Backend an den Worker senden
async function processTask() {

    // Beispielaufgabe für den Test
    const task = {
        id: 1,
        title: "Complete DEV-E3",
        priority: "High",
        status: "Open"
    };

    try {
        // POST-Anfrage an das Backend senden
        const response = await fetch(
            "http://localhost:3000/process-task",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            }
        );

        // Ergebnis des Workers auslesen
        const processedTask = await response.json();

        // Ergebnis anzeigen
        taskContainer.innerHTML = `
            <h2>Verarbeitungsergebnis</h2>
            <p>
                <strong>${processedTask.title}</strong><br>
                Priorität: ${processedTask.priority}<br>
                Status: ${processedTask.status}<br>
                Empfehlung: ${processedTask.recommendation || "Keine Empfehlung vorhanden"}
            </p>
        `;

    } catch (error) {
        taskContainer.innerHTML =
            "<p>Backend oder Worker nicht erreichbar.</p>";
    }
}