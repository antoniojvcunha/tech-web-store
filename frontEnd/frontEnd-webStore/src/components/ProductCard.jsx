import { Link } from "wouter";

function ProductCard({ product }) {
  return (
    <>
      <Link to={`/shop/product/${product.id}`}>
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-md group cursor-pointer transition-all duration-300 hover:scale-105">
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

          {/* Botão Add to Cart */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  text-white py-2 px-6 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 bg-red-500 hover:bg-red-600">
            Add to Cart
          </button>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
