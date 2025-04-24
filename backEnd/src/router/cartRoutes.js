const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.post("/api/cart", cartController.createCart);
router.get("/api/cart/:userId", cartController.getCartByUserId);

module.exports = router;
