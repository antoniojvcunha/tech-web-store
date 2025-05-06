// src/context/cart/CartProvider.jsx
import { useEffect, useState } from "react";
import {CartContext} from './CartContext';
import cartService from "../../services/cartService";
import { v4 as uuidv4 } from "uuid";


function CartProvider({ userId, children }) {
  const [cartId, setCartId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initCart() {
      setLoading(true);
      try {
        let cart;

        if (userId) {
            const tempItems = JSON.parse(localStorage.getItem("tempCartItems")) || [];
          cart = await cartService.getCartByUserId(userId);
          if (!cart) {
            const newCart = await cartService.createCart(userId);
            cart = { id: newCart.insertId };
          }
          setCartId(cart.id);

          for (const item of tempItems) {
            await cartService.addItemToCart(cart.id, item.product_id, item.quantity);
          }

          localStorage.removeItem("tempCartItems");
          localStorage.removeItem("tempCartId");

          const items = await cartService.getCartItems(cart.id);
          setCartItems(items);

        } else {
          let tempId = localStorage.getItem("tempCartId");
          if (!tempId) {
            tempId = uuidv4();
            localStorage.setItem("tempCartId", tempId);
          }
          cart = { id: tempId };
        
          const localItems = JSON.parse(localStorage.getItem("tempCartItems")) || [];
          setCartItems(localItems);
        }
      } catch (err) {
        console.error("Erro ao inicializar carrinho:", err);
      } finally {
        setLoading(false);
      }
    }

    initCart();
  }, [userId]);

  const addToCart = async (productId, quantity = 1) => {
    if (!cartId) return;
  
    try {
      if (userId) {
        await cartService.addItemToCart(cartId, productId, quantity);
        const items = await cartService.getCartItems(cartId);
        setCartItems(items);
      } else {
        const localItems = [...cartItems];
        const existingItem = localItems.find(item => item.product_id === productId);
  
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          localItems.push({ 
            product_id: productId, 
            quantity,
            // Adicione mais detalhes do produto para exibição
            name: product?.name || `Product ${productId}`,
            price: product?.price || 0,
            image_url: product?.image_url || null
          });
        }
  
        localStorage.setItem("tempCartItems", JSON.stringify(localItems));
        setCartItems(localItems);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error; // Rejeita a promise para tratamento no componente
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    if (userId) {
      await cartService.updateCartItemQuantity(itemId, quantity);
      const items = await cartService.getCartItems(cartId);
      setCartItems(items);
    } else {
      const localItems = [...cartItems];
      const updated = localItems.map(item =>
        item.product_id === itemId ? { ...item, quantity } : item
      );
      localStorage.setItem("tempCartItems", JSON.stringify(updated));
      setCartItems(updated);
    }
  };

  const removeFromCart = async (itemId) => {
    if (userId) {
      await cartService.removeCartItem(itemId);
      const items = await cartService.getCartItems(cartId);
      setCartItems(items);
    } else {
      const updated = cartItems.filter(item => item.product_id !== itemId);
      localStorage.setItem("tempCartItems", JSON.stringify(updated));
      setCartItems(updated);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
