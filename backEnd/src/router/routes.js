const router = require("express").Router();

const productController = require("../controllers/productController");


router.get("/products/", productController.index);
router.get("/products/:id", productController.showProductById);
router.get("/products/category/:categoryName", productController.showProductsByCategoryName);

module.exports = router;