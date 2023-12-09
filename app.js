const express = require("express");
const app = express();
const morgan = require("morgan");
const clientsRouters = require("./routers/clients");
const productsRouters = require("./routers/products");
const loanRouters = require("./routers/Loans");

app.use(express.json());
app.use(morgan('dev'));
app.use("/api/clients",clientsRouters);
app.use("/api/products",productsRouters);
app.use("/api/loans",loanRouters);

console.log("app is running");
module.exports = app;