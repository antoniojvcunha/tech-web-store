const express = require("express");
const routes = require("./router/routes");
const app = express();

const port = 3000;

app.use(express.json());

app.use(routes);

app.listen(port, function() {
    console.log(`Server started on port ${port}`);
})