import { useEffect, useState } from "react";
import { useParams } from "wouter";
import slugify from "../utils/slugify";
import shopProductService from "../services/shopProductService";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BestSellersGrid from "../components/BestSellersGrid.jsx";

function ProductDetailsView() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await shopProductService.fetchAllProductsService();
        const matchedProduct = allProducts.find(
          (p) => slugify(p.name) === slug
        );
        setProduct(matchedProduct);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [slug]);

  if (loading) return <div className="text-center py-10">A carregar...</div>;
  if (!product)
    return <div className="text-center py-10">Produto não encontrado.</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/3">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full rounded-xl shadow-lg object-contain"
          />
        </div>

        <div className="w-full md:w-1/3 space-y-4 flex flex-col justify-center gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-800 font-semibold">
            {product.price} €
          </p>
          <p className="text-gray-600">{product.description}</p>

          <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
      <BestSellersGrid />
      <Footer />
    </>
  );
}

export default ProductDetailsView;
