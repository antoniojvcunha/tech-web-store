const db = require("../db/connection_db");
const { insertOrderItems } = require("./orderItemService");

async function getAllOrders() {
    const [result] = await db.query("SELECT orders.id, orders.user_id, users.name AS user_name, orders.total_price, orders.created_at FROM orders JOIN users ON orders.user_id = users.id ORDER BY orders.created_at DESC");
    return result;
}

async function getOrderById(id) {
    const [result] = await db.query("SELECT * FROM orders WHERE id = ?", [id]);

    if (result.length == 1 ) {
        return result[0];
    } else {
        return null;
    }
}

async function createOrder(user_id, items) {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();

        let total = 0;
        for (const item of items) {
            const [productResult] = await connection.query("SELECT * FROM products WHERE id = ?", [item.product_id]);
            if (productResult.length === 0) throw new Error("Product not found");

            const price = productResult[0].price;
            total += price * item.quantity;
            item.price_unit = price;
        }

        const [orderResult] = await connection.query("INSERT INTO orders (user_id, total_price) VALUES (?, ?)", [user_id, total]);
        const orderId = orderResult.insertId;

        await insertOrderItems(connection, orderId, items);

        await connection.commit();
        return {orderId, total};
    
    } catch (error) {
        await connection.rollback();
        throw error;
    } finally {
        connection.release();
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
}