const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController");


router.patch("/checkout/:cartId", checkoutController.checkout);

module.exports = router;
