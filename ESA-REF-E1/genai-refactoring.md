# Refactoring mit Generativer AI

## Ausgangscode

Der ursprüngliche Java-Code enthielt mehrere Aufgaben innerhalb einer einzigen Methode.

Für diesen Teil wurde ChatGPT als Generative AI verwendet.

Java

public class TaskProcessorBefore {

    public static void processTask(String taskName, String priority) {
        System.out.println("Bearbeite Aufgabe: " + taskName);

        if (priority.equals("hoch")) {
            System.out.println("Hohe Priorität");
        }

        System.out.println("Status speichern");
    }
}


Für diesen Teil wurde ChatGPT als Generative AI verwendet.
Die Generative AI schlug vor, die Prioritätsprüfung in eine separate Methode auszulagern.

## Code nach Refactoring

public class TaskProcessorAfter {

    public static void processTask(String taskName, String priority) {
        System.out.println("Bearbeite Aufgabe: " + taskName);
        checkPriority(priority);
        System.out.println("Status speichern");
    }

    private static void checkPriority(String priority) {
        if (priority.equals("hoch")) {
            System.out.println("Hohe Priorität");
        }
    }
}

