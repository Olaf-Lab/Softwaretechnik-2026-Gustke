import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class LengthConverterTest {

    @Test
    void inchToCentimeter_shouldConvertCorrectly() {

        LengthConverter converter = new LengthConverter();

        double result = converter.inchToCentimeter(1);

        assertEquals(2.54, result, 0.001);
    }

    @Test
    void inchToCentimeter_shouldThrowExceptionForNegativeValue() {

        LengthConverter converter = new LengthConverter();

        assertThrows(IllegalArgumentException.class, () -> {
            converter.inchToCentimeter(-1);
        });
    }
}