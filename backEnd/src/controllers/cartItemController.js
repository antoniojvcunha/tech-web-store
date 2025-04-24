const cartItemService = require("../services/cartItemService");

// Adicionar item ao carrinho
async function addItem(req, res) {
    const { cart_id, product_id, quantity } = req.body;

    if (!cart_id || !product_id || !quantity) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    try {
        await cartItemService.addItemToCart(cart_id, product_id, quantity);
        res.status(201).json({ message: "Item added to cart." });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function getCartItems(req, res) {
    const cartId = +req.params.cartId;

    try {
        const items = await cartItemService.getItemsByCartId(cartId);
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function updateQuantity(req, res) {
    const itemId = +req.params.itemId;
    const { quantity } = req.body;

    try {
        const updated = await cartItemService.updateCartItemQuantity(itemId, quantity);

        if (!updated) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({ message: "Quantity updated." });
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function removeItem(req, res) {
    const itemId = +req.params.itemId;

    try {
        const removed = await cartItemService.removeItemFromCart(itemId);

        if (!removed) {
            return res.status(404).json({ message: "Item not found" });
        }

        res.status(200).json({ message: "Item removed from cart." });
    } catch (error) {
        console.error("Error removing item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    addItem,
    getCartItems,
    updateQuantity,
    removeItem
};
