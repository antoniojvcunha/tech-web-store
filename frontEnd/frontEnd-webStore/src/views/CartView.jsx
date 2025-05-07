import { useCart } from "../context/cart/useCart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CartView() {
  const { cartItems, updateQuantity, removeFromCart, loading } = useCart();

  const handleQuantityChange = (item, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity < 1) return;

    const itemId = item.id || item.product_id;
    if (!itemId || isNaN(itemId)) {
      console.error("Item ID inválido:", item);
      return;
    }

    updateQuantity(itemId, quantity);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + (item.price && !isNaN(item.price) ? item.price : 0) * item.quantity,
    0
  );

  if (loading) return <p className="text-center">Carregando carrinho...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">O meu Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>O seu carrinho está vazio.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => {
              const price = Number(item.price);
              if (isNaN(price)) {
                return null;
              }
              return (
                <div key={item.product_id || item.id}>
                  <div className="flex items-center justify-around w-full py-3 px-4 bg-white rounded-lg shadow-sm">
                    <div className="w-1/6 min-w-[80px]">
                      <img
                        src={item.image_url || item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div className="w-2/6 px-2">
                      <p className="font-semibold text-gray-800 truncate">
                        {item.name || `Produto #${item.product_id}`}
                      </p>
                    </div>
                    <div className="w-1/6 text-center">
                      <p className="text-sm font-medium text-gray-600">
                        ${price.toFixed(2)}
                      </p>
                    </div>
                    <div className="w-1/6">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item, e.target.value)
                        }
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="w-1/6 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 font-medium"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-right font-bold text-lg mt-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CartView;
