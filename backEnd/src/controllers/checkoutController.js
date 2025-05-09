const cartService = require("../services/cartService");
const orderService = require("../services/orderService");
const {getItemsByCartId} = require("../services/cartItemService");

async function checkout(req, res) {
    const cartId = +req.params.cartId;
    const { user_id } = req.body;

    console.log("Checkout iniciado para cartId:", cartId, "e user_id:", user_id);

    if (isNaN(cartId)) {
        return res.status(400).json({ message: "Invalid cart ID" });
    }

    try {
        const cart = await cartService.getCartById(cartId);
        console.log("Carrinho encontrado:", cart);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        if (cart.user_id !== user_id) {
            console.log("Cart user_id não corresponde:", cart.user_id, "!==", user_id);
            return res.status(400).json({ message: "Cart ID mismatch" });
        }

        if (cart.status !== "pending") {
            return res.status(400).json({ message: "Cart already completed" });
        }

        const cartItems = await getItemsByCartId(cartId);
        if (!cartItems.length) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const formattedItems = cartItems.map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
            price_unit: item.price
        }));

        // Criar a ordem com os itens do carrinho
        const order = await orderService.createOrder(user_id, formattedItems);
        console.log("Pedido criado:", order);

        // Finaliza o carrinho apenas após a ordem ser criada
        const success = await cartService.completeCart(cartId);
        if (!success) {
            return res.status(500).json({ message: "Failed to complete cart" });
        }

        res.status(200).json({
            message: "Checkout completed successfully.",
            order
        });

        await cartService.clearCart(cartId);
    } catch (error) {
        console.error("Erro ao finalizar carrinho:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = { checkout };
