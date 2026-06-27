import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ShoppingCartTest {

    @Test
    void newCartShouldBeEmpty() {

        ShoppingCart cart = new ShoppingCart();

        assertEquals(0, cart.getItemCount());
    }
    @Test
void newCartShouldNotBeNull() {

    ShoppingCart cart = new ShoppingCart();

    assertNotNull(cart);
}
}