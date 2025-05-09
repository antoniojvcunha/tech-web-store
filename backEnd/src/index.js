const express = require("express");
const productRoutes = require("./router/productRoutes");
const userRoutes = require("./router/userRoutes");
const orderRoutes = require("./router/orderRoutes");
const orderItemRoutes = require("./router/orderItemRoutes");
const cartRoutes = require("./router/cartRoutes");
const cartItemRoutes = require("./router/cartItemRoutes");
const noveltieRoutes = require("./router/noveltieRoutes");
const contactUsRoutes = require("./router/contactUsRoutes");
const checkoutRoutes = require("./router/checkoutRoutes");

const app = express();

const cors = require('cors');

app.use(cors());

const port = 3000;

app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);
app.use("/api", orderItemRoutes);
app.use("/api", cartRoutes);
app.use("/api", cartItemRoutes);
app.use("/api", noveltieRoutes);
app.use("/api", contactUsRoutes);
app.use("/api", checkoutRoutes); 

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});
