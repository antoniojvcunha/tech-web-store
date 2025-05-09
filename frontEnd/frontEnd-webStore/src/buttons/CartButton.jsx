import React, { useState } from "react";
import { useCart } from "../context/cart/useCart";

export const CartButton = ({ productId, variant = "floating", children }) => {
  const { addToCart, loading, cartId } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    setButtonText("Adding...");

    try {
      if (loading || !cartId) {
        console.warn("Cart still loading or cartId missing...");
        setIsAdding(false);
        setButtonText("Await...");
        return;
      }
      await addToCart(productId, 1);
      setButtonText("✓ Added!");
      setTimeout(() => {
        setButtonText("Add to Cart");
        setIsAdding(false);
      }, 1000);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setButtonText("Add to Cart");
      setIsAdding(false);
    }
  };

  const baseStyles = `
    transition-all duration-300 hover:scale-105
    ${isAdding ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"}
  `;

  if (variant === "floating") {
    return (
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          opacity-0 group-hover:opacity-100 text-white py-2 px-6 rounded-full
          ${baseStyles}
        `}
      >
        {children || buttonText}
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`
        w-full py-3 px-6 rounded-full text-white font-medium
        ${baseStyles}
      `}
    >
      {children || buttonText}
    </button>
  );
};
