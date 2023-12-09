const express = require("express");
const app = express();
const morgan = require("morgan");
const clientsRouters = require("./routers/clients");
const remittanceRouters = require("./routers/fundremittance");
const accountsRouters = require("./routers/accounts");

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/clients",clientsRouters);
app.use("/api/accounts",accountsRouters);
app.use("/api/remittance",remittanceRouters);

console.log("app is running");
module.exports = app;