const router = require("express").Router();

const productController = require("../controllers/productController");


router.get("/products/", productController.index)

module.exports = router;