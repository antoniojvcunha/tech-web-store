const db = require("../db/connection_db");

async function getAllProducts() {
    const [result, fields] = await db.query("SELECT * FROM products")
    return result
    
}

async function getProductById(params) {
    
}



module.exports = {
    getAllProducts,

}