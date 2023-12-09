const express = require("express");
const app = express();
const morgan = require("morgan");
const clientsRouters = require("./routers/clients");
const remittanceRouters = require("./routers/fundremittance");
const accountsRouters = require("./routers/accounts");
const virtualRouters=require('./routers/virtualCard');
const loanRouters = require("./routers/Loans");
const transRoute=require("./routers/failedTransaction");

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/clients",clientsRouters);
app.use("/api/accounts",accountsRouters);
app.use("/api/remittance",remittanceRouters);
app.use("/api/virtualCards",virtualRouters);
app.use("/api/loans",loanRouters);
app.use("/api/trans",transRoute);

console.log("app is running");
module.exports = app;