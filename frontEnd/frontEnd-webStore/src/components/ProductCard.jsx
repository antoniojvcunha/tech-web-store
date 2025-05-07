import { Link } from "wouter";
import slugify from "../utils/slugify";
import { CartButton } from "../buttons/CartButton";

function ProductCard({ product }) {
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
      <CartButton productId={product.id} variant="floating" />
    </div>
  );
}

export default ProductCard;
