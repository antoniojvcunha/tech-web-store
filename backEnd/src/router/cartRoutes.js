const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/cart", cartController.createCart);
router.get("/cart/:userId", cartController.getCartByUserId);
router.delete('/cart/:cartId/clear', cartController.clearCart);


module.exports = router;
