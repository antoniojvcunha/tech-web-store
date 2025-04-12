const productService = require("../services/productService")

async function index(req, res) {
    const products = await productService.getAllProducts();
    res.json(products);
}

async function showProductById(req, res) {
    const id = +req.params.id;

    try {
        const product = await productService.getProductById(id);

        if (!product) {
            return res.status(404).end({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ error: "Internal server error" });
    
    }
} 

async function showProductsByCategoryName(req, res) {
    const categoryName = req.params.categoryName;

    try {
        const products = await productService.getProductsByCategoryName(categoryName);

        if (!products) {
            return res.status(404).end({ message: "Products not found" });
        }

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}



module.exports = {
    index,
    showProductById,
    showProductsByCategoryName,
}