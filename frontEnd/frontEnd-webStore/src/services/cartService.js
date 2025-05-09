import { authHeaders } from "../auth/authHeaders";
const BASE_URL = "http://localhost:3000/api";


async function getCartItems(cartId) {
    try {
        const response = await fetch(`${BASE_URL}/cart-items/${cartId}`, {
        headers: authHeaders(),
      });
        if (!response.ok) throw new Error("Error fetching cart items");
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
        headers: authHeaders(),
        body: JSON.stringify({ user_id: userId }),
      });
      if (!res.ok) throw new Error("Error creating cart");

      const data = await res.json();
    console.log("Cart created with ID:", data.cartId);  // Depuração
    return data;
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error;
    }
  };

  async function getCartByUserId(userId) {
    try {
      const res = await fetch(`${BASE_URL}/cart/${userId}`);
      
      if (!res.ok) {
        if (res.status === 404) {
          return null;
        }
        throw new Error(`Failed to fetch cart: ${res.statusText}`);
      }
  
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
          headers: authHeaders(),
          body: JSON.stringify({ 
            cart_id: cartId, 
            product_id: productId, 
            quantity}),
        });
        if (!res.ok) throw new Error("Error adding item to cart");
        const data = await res.json();
    console.log("Item added:", data);
    return data;
      } catch (error) {
        console.error("Error adding item to cart:", error);
        throw error;
      }
  };

async function updateCartItemQuantity(itemId, quantity) {
    try {
        const res = await fetch(`${BASE_URL}/cart-items/${itemId}`, {
          method: "PUT",
          headers: authHeaders(),
          body: JSON.stringify({ quantity }),
        });
        if (!res.ok) throw new Error("Error updating item quantity");
      } catch (error) {
        console.error("Error updating item quantity:", error);
        throw error;
      }
    }
 

async function removeCartItem(itemId) {
    try {
        const res = await fetch(`${BASE_URL}/cart-items/${itemId}`, {
          method: "DELETE",
          headers: authHeaders(),
        });
        if (!res.ok) throw new Error("Error removing item from cart");
        console.log("Response:", res); 
        return await res.json();
      } catch (error) {
        console.error("Error removing item from cart:", error);
        throw error;
      }
    }

    async function clearCart(cartId) {
      try {
        const res = await fetch(`${BASE_URL}/cart/${cartId}/clear`, {
          method: "DELETE",
          headers: authHeaders(),
        });
        if (!res.ok) throw new Error("Error clearing cart");
        const data = await res.json();
        console.log("Cart cleared:", data);
        return data;
      } catch (error) {
        console.error("Error clearing cart:", error);
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
  clearCart
};