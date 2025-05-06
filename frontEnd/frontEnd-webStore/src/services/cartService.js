const BASE_URL = "http://localhost:3000/api";


async function getCartItems(cartId) {
    try {
        const response = await fetch(`${BASE_URL}/cart-items/${cartId}`);
        if (!response.ok) throw new Error("Erro ao buscar itens do carrinho");
        return await response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }

async function createCart(userId) {
    try {
      const res = await fetch(`${BASE_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });
      if (!res.ok) throw new Error("Error creating cart");
      return res.json();
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error;
    }
  };

async function getCartByUserId(userId) {
    try{
        const res = await fetch(`${BASE_URL}/cart/${userId}`);
        if (!res.ok) throw new Error("Cart not found");
        return res.json();
    } catch (error) {
        console.error("Error fetching cart:", error);
        throw error;
    }
}

async function addItemToCart(cartId, productId, quantity) {
    try {
        const res = await fetch(`${BASE_URL}/cart-items`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            cart_id: cartId, 
            product_id: productId, 
            quantity}),
        });
        if (!res.ok) throw new Error("Error adding item to cart");
      } catch (error) {
        console.error("Error adding item to cart:", error);
        throw error;
      }
  };

async function updateCartItemQuantity(itemId, quantity) {
    try {
        const res = await fetch(`${BASE_URL}/cart-items/${itemId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity }),
        });
        if (!res.ok) throw new Error("Error updating item quantity");
      } catch (error) {
        console.error("Error updating item quantity:", error);
        throw error;
      }
    }
 

async function removeCartItem(itemId) {
    console.log("Removing item with ID:", itemId);

    try {
        const res = await fetch(`${BASE_URL}/cart-items/${itemId}`, {
          method: "DELETE",
        });
        console.log("Response:", res);  // Verifique o que está retornando

        if (!res.ok) throw new Error("Error removing item from cart");
      } catch (error) {
        console.error("Error removing item from cart:", error);
        throw error;
      }
    }
 

export default {
  getCartItems,
  createCart,
  getCartByUserId,
  addItemToCart,
  updateCartItemQuantity,
  removeCartItem,
};