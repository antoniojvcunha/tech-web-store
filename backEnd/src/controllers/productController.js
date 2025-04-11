const productService = require("../services/productService")

async function index(req, res) {
    const products = await productService.getAllProducts();
    res.json(products);
}

module.exports = {
    index,
}