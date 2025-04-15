const express = require("express");
const productRoutes = require("./router/productRoutes");
const userRoutes = require("./router/userRoutes");

const app = express();

const port = 3000;

app.use(express.json());

app.use(productRoutes, userRoutes)

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
})