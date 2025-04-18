const express = require("express");
const productRoutes = require("./router/productRoutes");
const userRoutes = require("./router/userRoutes");
const orderRoutes = require("./router/orderRoutes");
const orderItemRoutes = require("./router/orderItemRoutes");


const app = express();

const port = 3000;

app.use(express.json());

app.use(productRoutes, userRoutes, orderRoutes, orderItemRoutes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
})