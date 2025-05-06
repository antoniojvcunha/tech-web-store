import { Link } from "wouter";
import slugify from "../utils/slugify";
import { useCart } from "../context/cart/useCart";
import { useState } from "react";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    setButtonText("Adding...");
    
    try {
      await addToCart(product.id, 1);
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

  return (
    <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md group cursor-pointer transition-all duration-300 hover:scale-105">
      <Link to={`/shop/product/${slugify(product.name)}`}>
        {/* Imagem */}
        <div className="w-full h-56 overflow-hidden">
          <img
            src={product.image_url || null}
            alt={product.name}
            className="w-full h-full object-contain transition-all duration-700 group-hover:blur-sm group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="p-4 text-center">
          <h2 className="text-md font-medium">{product.name}</h2>
          <p className="font-bold mt-2">${product.price.toLocaleString()}</p>
        </div>
      </Link>

      {/* Botão Add to Cart */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105 ${
          isAdding ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ProductCard;
