const express = require("express");
const router = express.Router();
const cartItemController = require("../controllers/cartItemController");

router.post("/api/cart-items", cartItemController.addItem);
router.get("/api/cart-items/:cartId", cartItemController.getCartItems);
router.put("/api/cart-items/:itemId", cartItemController.updateQuantity);
router.delete("/api/cart-items/:itemId", cartItemController.removeItem);

module.exports = router;
