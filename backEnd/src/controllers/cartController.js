const cartService = require("../services/cartService");

async function createCart(req, res) {
    const userId = +req.body.user_id;

    try {
        const cartId = await cartService.createCart(userId);
        res.status(201).json({ message: "Cart created successfully", cartId });
    } catch (error) {
        console.error("Error creating cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function getCartByUserId(req, res) {
    const userId = +req.params.userId;

    try {
        const cart = await cartService.getCartByUserId(userId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    createCart,
    getCartByUserId,
};
