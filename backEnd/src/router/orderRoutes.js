const router = require("express").Router();
const orderController = require("../controllers/orderController");

router.get("/orders/", orderController.index);
router.get("/orders/:id", orderController.showOrderByiD);
router.post("/orders/", orderController.storeOrder);

module.exports = router;