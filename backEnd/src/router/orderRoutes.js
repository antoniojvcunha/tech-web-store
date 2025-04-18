const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.get("/api/orders/", orderController.index);
router.get("/api/orders/:id", orderController.showOrderByiD);
router.post("/api/orders/", orderController.storeOrder);

module.exports = router;