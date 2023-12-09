remittanceRouters = require("express").Router();
const remittanceController = require("../controllers/fundremittance.js");

remittanceRouters.post("", remittanceController.transferBetweenAccounts);
module.exports = remittanceRouters;