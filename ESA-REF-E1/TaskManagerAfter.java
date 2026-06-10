public class TaskManagerAfter {

    public static void main(String[] args) {
        createTask("ESA REF bearbeiten", "hoch", "offen");
    }

    public static void createTask(String taskName, String priority, String status) {

        System.out.println("Neue Aufgabe: " + taskName);

        printPriority(priority);
        printStatus(status);

        System.out.println("Aufgabe gespeichert");
    }

    private static void printPriority(String priority) {

        if (priority.equals("hoch")) {
            System.out.println("Priorität: Hoch");
        } else {
            System.out.println("Priorität: Normal");
        }
    }

    private static void printStatus(String status) {

        if (status.equals("offen")) {
            System.out.println("Status: Offen");
        } else {
            System.out.println("Status: In Bearbeitung");
        }
    }
}