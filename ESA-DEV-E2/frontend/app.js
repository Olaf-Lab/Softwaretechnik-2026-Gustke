// Aufgaben vom Backend laden
fetch("http://localhost:3000/tasks")

    // Antwort des Servers in JSON umwandeln
    .then(response => response.json())

    // Aufgaben aus der JSON-Antwort verarbeiten
    .then(tasks => {

        // Aufgabenliste aus dem HTML auswählen
        const taskList = document.getElementById("tasks");

        // Alte Inhalte entfernen
        taskList.innerHTML = "";

        // Jede Aufgabe einzeln anzeigen
        tasks.forEach(task => {

            // Neues Listenelement erstellen
            const item = document.createElement("li");

            // Aufgabe mit Titel, Priorität und Status anzeigen
            item.innerHTML = `
                <strong>${task.title}</strong><br>
                Priority: ${task.priority}<br>
                Status: ${task.status}
            `;

            // Aufgabe in die Liste einfügen
            taskList.appendChild(item);
        });
    })

    // Fehler anzeigen, falls das Backend nicht erreichbar ist
    .catch(error => {
        console.error("Error loading tasks:", error);
    });