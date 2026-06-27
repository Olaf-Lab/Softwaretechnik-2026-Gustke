public class LengthConverter {

    public double inchToCentimeter(double inch) {

        if (inch < 0) {
            throw new IllegalArgumentException("Die Länge darf nicht negativ sein.");
        }

        return inch * 2.54;
    }
}