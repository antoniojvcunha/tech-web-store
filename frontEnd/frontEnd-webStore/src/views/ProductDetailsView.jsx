import { useEffect, useState } from "react";
import { useParams } from "wouter";
import shopProductService from "../services/shopProductService.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ProductDetailsView() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await shopProductService.fetchProductsByIdService(
          productId
        );
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (loading) return <div className="text-center py-10">A carregar...</div>;
  if (!product)
    return <div className="text-center py-10">Produto não encontrado.</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10">
        {/* Imagem do produto */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-contain"
          />
        </div>

        {/* Info do produto */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold">
            {product.price} €
          </p>
          <p className="text-gray-600">{product.description}</p>

          {/* Exemplo de stock ou categorias */}
          <p className="text-sm text-gray-500">Categoria: {product.category}</p>
          <p className="text-sm text-gray-500">Stock: {product.stock}</p>

          {/* Botão para adicionar ao carrinho (opcional) */}
          <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailsView;
