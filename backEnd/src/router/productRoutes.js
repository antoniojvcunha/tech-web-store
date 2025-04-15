const router = require("express").Router();

const productController = require("../controllers/productController");


router.get("/api/products/", productController.index);
router.get("/api/products/:id", productController.showProductById);
router.get("/api/products/category/:categoryName", productController.showProductsByCategoryName);
router.post("/api/products/", productController.storeProduct);
router.put("/api/products/:id", productController.updateProduct);
router.delete("/api/products/:id", productController.destroyProduct);

module.exports = router;