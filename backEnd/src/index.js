const express = require("express");
const productRoutes = require("./router/productRoutes");
const userRoutes = require("./router/userRoutes");
const orderRoutes = require("./router/orderRoutes");
const orderItemRoutes = require("./router/orderItemRoutes");
const cartRoutes = require("./router/cartRoutes");
const cartItemRoutes = require("./router/cartItemRoutes");
const noveltieRoutes = require("./router/noveltieRoutes");

const app = express();

const cors = require('cors');

app.use(cors());

const port = 3000;

app.use(express.json());

app.use(productRoutes, userRoutes, orderRoutes, orderItemRoutes, cartRoutes, cartItemRoutes, noveltieRoutes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
})