const db = require("../db/connection_db");

async function getAllProducts() {
    const [result, fields] = await db.query("SELECT * FROM products")
    return result
    
}

async function getProductById(id) {
    const [result, fields] = await db.query("SELECT * FROM products WHERE id = ?", [id]);

    if (result.length == 1 ) {
        return result[0];
    } else {
        return null;
    }
}

async function getProductsByCategoryName(categoryName) {
    const [result, fields] = await db.query("SELECT p.* FROM products p JOIN categories c ON p.category_id = c.id WHERE c.name = ?", [categoryName]);
    return result;
}



module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategoryName,

}