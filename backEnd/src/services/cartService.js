const db = require("../db/connection_db");

async function createCart(userId) {
    const [result] = await db.query("INSERT INTO cart (user_id) VALUES (?)", [userId]);
    return result.insertId;
}

async function getCartByUserId(userId) {
    const [result] = await db.query("SELECT * FROM cart WHERE user_id = ?", [userId]);
    return result[0];
}

async function deleteCartByUserId(userId) {
    const [result] = await db.query("DELETE FROM cart WHERE user_id = ?", [userId]);
    return result.affectedRows > 0;
}
    
module.exports = {
    createCart,
    getCartByUserId,
    deleteCartByUserId
}