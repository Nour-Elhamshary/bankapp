const express = require("express");
const app = express();
const morgan = require("morgan");
const clientsRouters = require("./routers/clients");
const productsRouters = require("./routers/products");
const accountsRouters = require("./routers/accounts");
const transRoute=require("./routers/failedTransaction");

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/clients",clientsRouters);
app.use("/api/accounts",accountsRouters);
app.use("/api/trans",transRoute);

console.log("app is running");
module.exports = app;