import { useEffect, useState, useCallback } from "react";
import { CartContext } from "./CartContext";
import cartService from "../../services/cartService";

function CartProvider({ userId, children }) {
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshCartItems = useCallback(async (id) => {
    try {
      const items = await cartService.getCartItems(id || cartId);
      setCartItems(items);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }, [cartId]);

  useEffect(() => {
    async function initCart() {
      if (!userId) return;

      setLoading(true);

      try {
        let cart = await cartService.getCartByUserId(userId);
        if (!cart) {
          const newCart = await cartService.createCart(userId);
          cart = { id: newCart.cartId };
        }
        setCartId(cart.id);

        await refreshCartItems(cart.id);
      } catch (err) {
        console.error("Error initializing cart:", err);
      } finally {
        setLoading(false);
      }
    }

    initCart();
  }, [userId, refreshCartItems]);

  const addToCart = async (productId, quantity = 1) => {
    if (!cartId || loading) return;
    try {
      await cartService.addItemToCart(cartId, productId, quantity);
      await refreshCartItems();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      await cartService.updateCartItemQuantity(itemId, quantity);
      await refreshCartItems();
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await cartService.removeCartItem(itemId);
      await refreshCartItems();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const clearCart = async () => {
    try {
      await cartService.clearCart(cartId);
      setCartItems([]);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartItems,
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
