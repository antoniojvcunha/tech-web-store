const orderService = require("../services/orderService");

async function index(req, res) {
    try {
        const orders = await orderService.getAllOrders();
        res.json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

async function showOrderByiD(req, res) {
    const id = +req.params.id;

    try {
        const order = await orderService.getOrderById(id);

        if (!order) {
            res.status(404).json({ message: "Order not found" });
        }
        res.json(order)
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).json({ error: "Internal server error" });
    }   
}

async function storeOrder(req, res) {
    const userId = req.body.user_id;
    const items = req.body.items;

    try {
        const order = await orderService.createOrder(userId, items);
        res.status(201).json({
            message: "Order created successfully",
            order
        });
    } catch (error) {
        console.error("Error inserting order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    index,
    showOrderByiD,
    storeOrder

}
